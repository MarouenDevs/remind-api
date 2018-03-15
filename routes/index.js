import notes from './notes/notes.controller';

export default function addRouter(app) {
    app.post('/api/notes/add',notes.addNote);
    app.get('/api/notes/search/:title',notes.searchNote);
    app.delete('/api/notes/delete/:id',notes.deleteNotes);
    app.get('/api/notes', notes.getNotes);


};
