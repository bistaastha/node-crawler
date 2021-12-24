# StackOverflow questions crawler

## Setup

### NodeJS app

#### Installing dependencies

```
git clone git@github.com:bistaastha/node-crawler.git
cd node-crawler
npm install
```

#### Running the app

```
npm start
```

### Database

- Install [RethinkDB](https://rethinkdb.com/docs/install/)
- Run as Admin
- Visit <u>localhost:8080</u> on a web browser
- Create database `scraperdb`, and under that, table `questions`