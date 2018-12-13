
const NotFound = require('../helpers/not-found');
const Order = require('../models/order')

module.exports = {
    getAllOrders: ( req, res, next ) => {
        Order.find({})
            .then( data => res.status(200).json(data) )
            .catch(err => next(err))
    },

    createOrder: async ( req, res, next ) => {
        try {
            const body = req.body;

            if (!body.nameCustomer) {
                throw new NotFound('nameCustomer is required.', 400);
            }
            
            if (!body.emailCustomer) {
                throw new NotFound('emailCustomer is required.', 400);
            }

            if (!body.provinceCustomer) {
                throw new NotFound('provinceCustomer is required.', 400);
            }

            if (!body.qty) {
                throw new NotFound('qty is required.', 400);
            }

            const order = new Order(body);
            order.save((err, data) => {
                if(err) {
                    throw new NotFound(err.message, 401);
                }
                res.send(data);
            })
        } catch (error) {
            next(new NotFound(error, 404));
        }
    },

    deleteOrder: async ( req, res, next ) => {
        try{
            const order = req.order;
            const orderById = await Order.findByIdAndRemove(order.id);
            if(orderById) {
                res.end();
            } else {
                next(new NotFound('Xóa order thất bại', 400));
            }
        } catch (err){
            next(new NotFound(err, 400));
        }
    },

    updateOrder: async ( req, res ) => {
        const order = req.order;
        Blog.update({ _id: order.id }, req.body, {
            upsert: false, multi: false 
        }, (err, success) => {
            if (err) 
                return res.send(err);
            return res.send(success);
        });
    },

    getOneOrder: async ( req, res ) => {
        try {
            res.json(req.order);
        } catch (error) {
            next(new NotFound(error, 404));
        }
    },

    getByIdOrder: async ( req, res, next, id ) => {
        try {
            const order = await Order.findById(id);
            if(order) {
                req.order = order;
                next();
            } else {
                next(new NotFound('User not exist!', 404));
            }
        } catch (error) {
            next(new NotFound(error, 404));
        }
    }

}