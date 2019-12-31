// module.exports = (req,res,next) => {
//     const article = require('../models/article')
//     const id = req.decode.id
//     const articleId = req.body.id
//     article.findById(articleId)
//     .then(data => {
//         if(data.user == id){
//             next()
//         }
//     }).catch(err => {
//             next({httpStatus: 401, message: 'You are not Authorized!!'})
//     })

// }

