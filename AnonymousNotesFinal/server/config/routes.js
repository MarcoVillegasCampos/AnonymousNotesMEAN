

const Notes = require("../controllers/notes");


module.exports = function(app){
    app.get("/notes", Notes.getAll);
    app.get("/notes/:id", Notes.getId);
    app.post("/notes", Notes.create);
    app.put('/notes/:id', Notes.update);
    app.delete('/notes/:id', Notes.delete);
}