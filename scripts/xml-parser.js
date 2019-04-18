#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const slugify = require('@sindresorhus/slugify');
const TurndownService = require('turndown');
const turndownService = new TurndownService();

const formatDate = date => {
  if (!date || typeof date !== 'string') return null;

  // Case `MM/DD/YYYY`:
  if (date.includes('/')) {
    const d = date.split(/\//);
    if (d.length !== 3) return null;
    const [month, day, year] = d;
    if (!day || !month || !year) return null;
    try {
      return new Date(Date.UTC(year, month - 1, day)).toISOString();
    } catch (e) {
      return null;
    }
  }
};

const buffers = [];
// Assumes script is ran by `node scripts/xml-parser.js` from project root folder.
const fileReadStream = fs.createReadStream(
  path.resolve('./migrate/karadere_feed.xml')
);

fileReadStream.on('data', data => {
  buffers.push(data);
});

fileReadStream.on('error', console.error);

fileReadStream.on('end', () => {
  let dataString = '';

  try {
    const buffer = Buffer.concat(buffers);
    const parser = xml2js.Parser();

    parser.parseString(buffer, (err, result) => {
      if (err) console.error(err);

      if (result && result.rss && result.rss.channel) {
        const { channel } = result.rss;
        const items = channel[0].item;

        items.forEach(item => {
          const title = item.title[0];
          console.log(`Generating file for: ${title}`);
          const slug = slugify(title);
          const description = item.description
            ? turndownService.turndown(item.description[0])
            : '';
          const author = item['dc:creator'] ? item['dc:creator'][0] : '';
          const category = item.category ? item.category[0] : '';
          const pubDate = item.pubDate[0];

          const datePart = pubDate.split('-')[0].trim();
          const date = formatDate(datePart);

          const doc = ['---'];
          doc.push(`templateKey: 'article-page'`);
          doc.push(`title: '${title}'`);
          doc.push(`slug: '${slug}'`);
          doc.push(`date: '${date}'`);
          doc.push(`author: '${author}'`);
          doc.push(`cover: ''`);
          doc.push(`meta_title: '${title}'`);
          doc.push(`meta_description: ''`);
          if (category) {
            doc.push(`tags: 
            - ${category}`);
          } else {
            doc.push(`tags: `);
          }
          doc.push('---');
          doc.push(description);

          const document = doc.join('\n');

          fs.writeFileSync(
            path.resolve(`./migrate/files/${slug}.md`),
            document
          );
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
});
