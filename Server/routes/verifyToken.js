const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
            if(err){
                res.status(403).json("Sorry,Token is not valid!")
            }
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("Sorry, Your're not authorised!");
    }
}

const VerifyTokenAndAuthorization  = (req, res, next) => {
    verifyToken(req ,res, ()=>{
        console.log(req.user.id, req.params.id)
        if(req.user.id === req.params.id || req.user.isAdmin){
         next();
        }else{
            res.status(403).json("You are not allowed to do that!")
        }
    })
}

module.exports = { verifyToken ,VerifyTokenAndAuthorization};