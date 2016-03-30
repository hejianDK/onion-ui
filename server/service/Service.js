'use strict';

var pgp = require("pg-promise")();
var db = pgp({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '900528',
  database: 'oniondb'
});

module.exports = class Service {
  constructor() {
    this.db = db;
  }
};