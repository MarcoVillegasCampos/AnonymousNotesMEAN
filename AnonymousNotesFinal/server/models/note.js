

const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    msg: {
        type: String, 
        required: [true, "Note is required"], 
        minlength: [3, "Notes must be at least 3 characters"],
    }
}, {timestamps: true});

mongoose.model('Note', NoteSchema); 

module.exports = NoteSchema;