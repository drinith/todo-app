module.exports = function(req,rest,next){

    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTION,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept')
    next()
}