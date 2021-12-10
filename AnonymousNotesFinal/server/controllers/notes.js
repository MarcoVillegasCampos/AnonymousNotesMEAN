

const mongoose = require('mongoose');
const Note = mongoose.model('Note');

class Notes {
    getAll(req, res){
        Note.find({}).sort({"updatedAt" : -1}).exec( function(err, notes){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "notes": notes})
            }
        });
    }
    getId(req, res){
        Note.findOne({_id: req.params.id}, function(err, note){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "note": note});
            }
        });
    }
    create(req, res){
        let note = new Note(req.body);
        note.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        });
    }
    update(req, res){
        Note.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        })
    }
    delete(req, res){
        Note.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        })
    }
}

module.exports = new Notes();
