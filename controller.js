const noteModel = require('./model/model')

module.exports.new = (req,res)=>{
    const note = new noteModel({
        note : req.body.noteContent
    })
    note.save(note).then(()=>{
        res.redirect('/')
    })
    .catch(err=>console.log(err)) 
}

module.exports.getNotes = (req,res)=>{
    noteModel.find().then((notes)=>{
        res.render('home.ejs',{
            notes
        })
    })
}

module.exports.deleteNote = (req,res)=>{
    const id = req.params.id
    console.log(id)
    noteModel.findByIdAndDelete(id).then(()=>{
        res.redirect('/')
        console.log('deleted succes')
    })
    .catch(err=>console.log(err))
}

module.exports.editNoteGet = (req,res)=>{
    const id = req.params.id
    noteModel.findById(id).then(notes=>{
        res.render('edit.ejs',{
            note:notes.note,
            id:notes.id
        })
    })
}

module.exports.editNotePost = (req,res)=>{
    let notes = {
        note : req.body.noteContent
    }
    console.log(notes)
    let id = req.params.id
    noteModel.findByIdAndUpdate(id,notes,(err,content)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/')
            console.log(content)
        }
    })
}