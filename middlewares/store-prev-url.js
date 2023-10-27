const storePrevUrl = (req, res, next) => {
    if(!req.originalUrl.includes('auth')) 
       req.session.returnTo = req.originalUrl;
    next();
}

module.exports = storePrevUrl;