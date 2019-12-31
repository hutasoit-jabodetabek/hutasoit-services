if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
    require('dotenv').config();
}
const errorHandler = require('./middlewares/errorHandler');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",routes);
mongoose.connect('mongodb://localhost:27017/hutasoit',{useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify:false})
.then(data => {
    console.log('success connect')
}).catch(err => {
    console.log('error')
})

app.use(errorHandler);
app.listen(port,()=>{
    console.log("Server listen to "+port);
});

module.exports = app
