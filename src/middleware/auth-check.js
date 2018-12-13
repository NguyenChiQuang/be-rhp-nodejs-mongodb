const jwt    = require('jsonwebtoken');
const User = require('../models/user')
const config = require('../../config');

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    const decoded =jwt.verify(token, config.JWT_SECRET);
    req.userData = decoded; 
    next();
  }catch(error){
    return res.status(401).json({
        message: 'Auth Failed'
    })
  }

};