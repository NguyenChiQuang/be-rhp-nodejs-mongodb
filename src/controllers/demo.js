const Demo = require('../models/demo')

module.exports = {
    index: ( req, res, next ) => {
        Demo.find({})
            .then( data => res.status(200).json(data) )
            .catch(err => next(err))
    },
    create: ( req, res, next ) => {
        const data = new Demo(req.body);
        data.save()
            .then( data => res.status(201).json(data) )
            .catch( err => next(err) )
    }

}