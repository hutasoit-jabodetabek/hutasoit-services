const {encrypt} = require('../helpers/hash')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        minlength: [2, "Name at least contain 2 letter"],
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        , "This is not email format"],
        validate : {
            validator : function(){
                return new Promise((resolve,reject)=>{
                    users.findOne({
                        email : this.email
                    })
                    .then(email=>{
                        if (email){
                            resolve(false)
                        }
                        else{
                            resolve(true)
                        }
                    })
                    .catch(err =>{
                        resolve(false)
                    })
                })
            }, message : "this email is already used"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8,"Password at least contain 8 letter"]
    },
    role:{
        type: String,
        default: "member"
    }
},{
    timestamps: true,
    versionKey: false
})

userSchema.pre('save', function(next){
    let password = encrypt (this.password)
    this.password = password
    next()
})

const users = mongoose.model('users', userSchema)

module.exports = users