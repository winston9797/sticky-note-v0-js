const router = require('express').Router()
const controller = require('./controller')

router.get('/',controller.getNotes)
router.post('/new',controller.new)
router.get('/new',(req,res)=>{
    res.render('create.ejs',{
        message: ''
    })
})
router.get('/delete/:id',controller.deleteNote)
router.get('/edit/:id',controller.editNoteGet)
router.post('/edit/:id',controller.editNotePost)


module.exports = router