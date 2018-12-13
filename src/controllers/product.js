
const NotFound = require('../helpers/not-found');
const Product = require('../models/product')
const validate = ( data ) => {
    let err = {};
    let status = true;

    if(!data || !data.userId ) {
        err.userId = 'THieu userId con ak';
        status = false;
    }

    if(!data || !data.size ) {
        err.size = 'Thieu Size kia con';
        status = false;
    }
        
    if(!data || !data.nameProduct ) {
        err.nameProduct = 'Thieu nameProduct con ak';
        status = false;
    }
    if(!data || !data.qty  ) {
        err.qty = 'Khong co so luong ak';
        status = false;
    }

    return {
        err,
        status
    };
}

module.exports = {
    /**
     * get all product
     * @param req
     * @param res
     * @param next
    */
    getAllProducts: ( req, res, next ) => {
        Product.find({})
            .then( data => res.status(200).json(data) )
            .catch(err => next(err))
    },

    /**
     * reset password
     * @param req
     * @param res
     * @param next
    */
    createProduct: async ( req, res, next ) => {
        try {
            const body = req.body;
            const validation = validate(body);

            if(!validation.status) {
                throw new NotFound(validation.err, 400);
            }

            const product = new Product(body);
            product.save((err, data) => {
                if(err) {
                    throw new NotFound(err.message, 401);
                }
                res.send(data);
            })
        } catch (error) {
            next(new NotFound(error, 404));
        }
    },

    /**
     * delete product
     * @param req
     * @param res
     * @param next
    */
    deleteProduct: async ( req, res, next ) => {
        try{
            const product = req.product;
            const productById = await Product.findByIdAndRemove(product.id);
            if(productById) {
                res.end();
            } else {
                next(new NotFound('Xóa product thất bại', 400));
            }
        } catch (err){
            next(new NotFound(err, 400));
        }
    },

    /**
     * update product
     * @param req
     * @param res
     * @param next
    */
    updateProduct: async ( req, res ) => {
        const product = req.product;
        Blog.update({ _id: product.id }, req.body, {
            upsert: false, multi: false 
        }, (err, success) => {
            if (err) 
                return res.send(err);
            return res.send(success);
        });
    },

    /**
     * get one product
     * @param req
     * @param res
    */
    getOneProduct: async ( req, res ) => {
        try {
            res.json(req.product);
        } catch (error) {
            next(new NotFound(error, 404));
        }
    },

    /**
     * get product by id
     * @param req
     * @param res
     * @param next
    */
    getByIdProduct: async ( req, res, next, id ) => {
        try {
            const product = await Product.findById(id);
            if(product) {
                req.product = product;
                next();
            } else {
                next(new NotFound('User not exist!', 404));
            }
        } catch (error) {
            next(new NotFound(error, 404));
        }
    },

    /**
     * duplicate product by id
     * @param req
     * @param res
    */
    duplicateById: async ( req, res ) => {
        try {
            const product = req.product;
            const productNew = new Product({
                "nameProduct": product.nameProduct,
                "descProduct": product.descProduct,
                "priceProduct": product.priceProduct,
                "size": product.size,
                "qty": product.qty,
                "status": product.status,
                "userId": product.userId
            })
            productNew.save((err, data) => {
                if(err) {
                    throw new NotFound(err, 400);
                }
                res.send(data)
            })
        } catch (error) {
            next( new NotFound(error, 400));
        }
    }

}