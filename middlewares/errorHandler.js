function errorHandler(err, req, res, next) {
    console.log(">>>>>>>>>>>>>>")
    console.log(err, 'masuk error handler <<<<<<<<')
    if (err.code == 404) {
        res.status(404).json({
            code: 404,
            message: err.message
        })
    } else if (err.code == 401) {
        res.status(401).json({
            code: 401,
            message: err.message
        })
    } else if (err.name == 'JsonWebTokenError') {
        res.status(401).json({
            code: 401,
            message: 'Invalid token.'
        })
    } else if (err.name == 'ValidationError') {
        let errArray=[]
        for(let key in err.errors){
            errArray.push(err.errors[key].message)
        }
        res.status(400).json({
            errArray
        })
    } else {
        res.status(500).json({
            code: 500,
            message: err.message
        })
    }
}
  
module.exports = errorHandler
