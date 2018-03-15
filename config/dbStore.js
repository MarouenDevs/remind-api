/**
 * DataStore to persist data
 * @type {*|Datastore}
 */
const Datastore = require('nedb');
const dbRemind = new Datastore();

export default dbRemind;