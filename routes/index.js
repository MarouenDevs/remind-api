import notes from './notes/notes.controller';

export default function addRouter(app) {
    app.delete('/api/notes/delete/:id',notes.deleteNotes);
    app.get('/api/notes', (notes.getNotes));
    app.post('/api/notes',notes.addNote);

};
