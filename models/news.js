const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
},
{
    timestamps: true,
    versionKey: false
})
const news = mongoose.model('news', newsSchema)

module.exports = news;