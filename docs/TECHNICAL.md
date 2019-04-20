# Technical documentation

The website is built with [Gatsby.js](https://www.gatsbyjs.org/) and is hosted on [netlify.com](https://www.netlify.com/). This setup delivers an improved web presence based on the so called [JAMstack](https://jamstack.org/).

Better performance, security, accessiblity and easiness to maintain infrastructure of tools.

## Getting started

We are grateful you are interested into the technical details of the project. Probably you are here in order to figure out how to contribute and that's great!

**Requirements**

- Node.js (8.10.x or higher)
- yarn >= 1.x

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm).

```sh
# Install node version corresponding to the one defined in .nvmrc
# Use '--reinstall-packages-from=node' if you want to migrate npm packages from a previous version
nvm install

# Use the newly installed version
nvm use
```

## Get dependencies

Either run:

```sh
npm install
```

Or if you have `yarn`:

```sh
yarn
```

## Start project locally

This is the command:

```sh
yarn start
```

This will start a [GraphQL](https://graphql.org/learn/) server and a watch task for changes in HMR mode provided by Gatsby.js.

Changing your code, you will see changes reflect on the website immediately without page reload.

## Structure overview

```
➜  karadere.info git:(master) ✗ tree -I node_modules  -L 2
.
├── config.js                 <--- Central configuration file
├── docs                      <--- Specific documentation
├── gatsby-config.js          <--- The place to manage plugins
├── gatsby-node.js            <--- The place to create Gatsby.js pages programatically
├── migrate                   <--- Content from previous Drupal 6 site
├── netlify.toml              <--- Netlify hosting configurations
├── package.json
├── package-lock.json
├── public                    <--- The folder to deploy to static site hosting
├── README.md                 <--- The read-me-first.
├── scripts                   <--- Utility scripts
├── src                       <--- Where you usually write code the most
│   ├── assets                <--- Assets which webpack optimises
│   ├── cms                   <--- Scripting for NetlifyCMS
│   ├── components            <--- React components
│   ├── html.js               <--- Specifics for rendering, rarely used.
│   ├── pages                 <--- CONTENT IS HERE
│   └── templates             <--- Templates, re-used by NetlifyCMS
├── static                    <--- Assets which webpack does not optimise
│   ├── admin                 <--- NetlifyCMS configuration
│   ├── files                 <--- That's site/default/files
│   ├── _headers
│   ├── icons
│   ├── img                   <--- That's also site/default/files ;)
│   └── robots.txt
└── yarn.lock
```
