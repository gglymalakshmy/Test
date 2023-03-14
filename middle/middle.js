const jwt = require("jsonwebtoken")
const protect = async(req, res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            console.log(req.headers.authorization.split(" ")[1],"token");
            token=req.headers.authorization.split(" ")[1]
            jwt.verify(token,"glyma123")
            next()
        } catch (error) {
            res.json("Not authorised....")
        }
    }
    if(!token)
    {
        res.json("no token...")
    }


}
module.exports = {protect}
