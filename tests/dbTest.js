const storeInDb = require('../lib/scripts/storeInDb');
let jsoning = require('jsoning');
let database = new jsoning('database.json');

storeInDb('123/234/123', 1, 2, database);