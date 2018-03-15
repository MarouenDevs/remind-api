'use strict';

import HttpStatus from 'http-status-codes';
import dbRemind from '../../config/dbStore';


/**
 * Get notes list
 *
 */
 function getNotes(req, res) {

   dbRemind.find({}).exec(function (err, notes) {
        return res.status("200").send(notes);
    });

}


async function deleteNotes(req, res) {

    dbRemind.remove({_id: req.params.id}, {}, function (err, numRemoved) {
        return res.status(HttpStatus.OK).send({success: true});
    });

}


/**
 * Add note
 * @param req
 * @param res
 * @returns {Promise.<void>}
 */
async function addNote(req, res) {
    const date = new Date();
    var note = {
        title: "title 1",
        content: "my content 1",
        updateAt: date.toDateString(),
        color: 'lazur',
    };

    dbRemind.insert(note, function (err, newDoc) {
        return res.status(HttpStatus.OK).send(newDoc);
    });


}

export default {addNote, getNotes, deleteNotes};
