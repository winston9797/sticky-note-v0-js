const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true,useFindAndModify:true,useUnifiedTopology: true });
    mongoose.connection.once('open',()=>{
        console.log('db connected')
    }).on('error',err=>{
        console.log(err)
    })
}

module.exports = connectDB