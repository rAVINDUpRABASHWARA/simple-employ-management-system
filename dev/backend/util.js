import  Jwt from "jsonwebtoken";

//generate the token for the user
export const generateToken = (user) => {
    return Jwt.sign(
        {
            _id: user._id,
            NIC: user.NIC,
            isAdmin: user.isAdmin,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '30d'
        }
    );
};

//provide authentication 
export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization) {
        const token = authorization.slice(7, authorization.length);
        Jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if(err) {
                res.status(401).send({message: 'Invalid Token'});
            } else {
                req.user = decode;
                next();
            }
        });
    } else {
        res.status(401).send({message: 'No Token'});
    }
};

//check whether the user is an admin or not
export const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({message: 'Invalid Admin Token'});
    }
};