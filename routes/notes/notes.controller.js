'use strict';

import HttpStatus from 'http-status-codes';
import dbRemind from '../../config/dbStore';


/**
 * Get notes list
 *
 */
async function getNotes(req, res) {

    dbRemind.find({}).exec(function (err, notes) {
        return res.status(HttpStatus.OK).send(notes);
    });

}

/**
 * Add note
 * @param req
 * @param res
 * @returns {Promise.<void>}
 */
async function addNote(req, res) {



}

export default {addNote, getNotes};
