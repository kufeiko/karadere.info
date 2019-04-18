import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ posts }) => {
  return (
    <div className="container">
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className="content single-card"
            style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
            key={post.id}
          >
            <p>
              <h2>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
              </h2>
              <small className="data-text">{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button is-small" to={post.fields.slug}>
                Виж повече →
              </Link>
            </p>
          </div>
        ))}
    </div>
  );
};

export default PostCard;
