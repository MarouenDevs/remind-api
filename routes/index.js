import notes from './notes/notes.controller';

export default function addRouter(app) {

    app.get('/api/notes', notes.getNotes);
    app.post('/notes',notes.addNote);
};
