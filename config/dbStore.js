/**
 * DataStore to persist data
 * @type {*|Datastore}
 */
const Datastore = require('nedb');
const dbRemind = new Datastore({ filename: '../data/data.db', autoload: true });

export default dbRemind;