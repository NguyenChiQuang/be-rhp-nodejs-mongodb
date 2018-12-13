
const NotFound = require('../helpers/not-found');
const Order = require('../models/order')

module.exports = {
    /**
     * get order by id
     * @param req
     * @param res
     * @param next
    */
    getByIdOrder: async ( req, res, next ) => {
        try {
            // const { name } = req.body; 
            // const store = await Store.find({name: `/${name}/` });
            // if(order) {
            //     req.order = order;
            //     next();
            // } else {
            //     next(new NotFound('User not exist!', 404));
            // }
        } catch (error) {
            // next(new NotFound(error, 404));
        }
    }

}