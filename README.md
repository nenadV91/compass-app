# compass-app [Demo](https://compass-app-demo.herokuapp.com/#/)
React - node application demo

## Get started
*Client*
  - `cd client`
  - run `npm install`
  - start the dev server `npm start` on port 3000
  - to create production build files run `npm run build`

*Server*
  - `cd server`
  - run `npm install`
  - set env variables in .env file for `DB_HOST` and `DB_NAME`
  - if you want server to use client **build** files then change `NODE_ENV` to production
  - start the server with `npm run dev` on port 4000
