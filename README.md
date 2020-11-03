# ImageSharig - BackEnd
Created Post, User and Auth routes for Image Sharing

Back-end for https://github.com/claudialigidakis/image-sharing_prototype

## Installation
- Fork and clone
- `npm install`
- Add your own .env file with a `SECRET` environment variable

## Database Setup
- Make sure you have PostgreSQL
- Create a database on your local
  - createDB image-site
- `npm run knex migrate:latest`
- `npm run knex seed:run`
