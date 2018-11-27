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

const validateDuplicateById = ( data ) => {
    let err = {};
    let status = true;
    
    if(!data || !data.id ) {
        err.userId = 'Thieu id product con ak';
        status = false;
    }
    return {
        err,
        status
    };
}

module.exports = {
    index: ( req, res, next ) => {
        Product.find({})
            .then( data => res.status(200).json(data) )
            .catch(err => next(err))
    },

    create: async ( req, res, next ) => {
        try {
            const body = req.body;
            const validation = validate(body);

            if(!validation.status) {
                res.json({
                    code: 2,
                    status: 401,
                    message: validation.err,
                })
            }

            const product = new Product(body);
            product.save((err, data) => {
                if(err) {
                    res.json({
                        code: 2,
                        status: 401,
                        message: err.message,
                    })
                }

                res.json({
                    code: 1,
                    status: 201,
                    message: 'Bạn đã tạo thành công rồi đó, vui không?',
                })
                
            })
        } catch (error) {
            res.json({
                code: 2,
                status: 401,
                message: 'Đéo tạo được đâu, đừng cố làm gì',
            })
        }
    },

    delete: async ( req, res, next ) => {
        const body = req.body;
        try{
            const productById = await Product.findByIdAndRemove(body.id);
            if(productById) {
                res.json({
                    code: 1,
                    status: 200,
                    message: 'Xóa product thành công',
                })
            } else {
                res.json({
                    code: 2,
                    status: 400,
                    message: 'Xóa product thất bại'
                })
            }
        } catch (err){
            res.json({
                code:2,
                status: 400,
                message: err.message
            });
        }
    },

    getProductById: async ( req, res ) => {
        try {
            const id = req.params.id;
            const product = await Product.findById(id);
            if(product) {
                res.json({
                    code: 1,
                    status: 200,
                    data: product
                });
            } else {
                res.json({
                    code: 2,
                    status: 400,
                    message: 'Làm lờ có sản phẩm mà tìm'
                });
            }
        } catch (error) {
            res.json({
                code: 2,
                status: 400,
                message: error.message
            });
        }
    },

    duplicateById: async ( req, res ) => {
        try {
            const body = req.body;
            const validation = validateDuplicateById(body);
            if(!validation.status) {
                res.json({
                    code: 2,
                    status: 401,
                    message: validation.err,
                });
            }
            const product  = await Product.findById(body.id)
            if(!product) {
                res.json({
                    code: 2,
                    status: 400,
                    message: "Có tồn tại sản phẩm đâu mà mua"
                })
            }
            const productNew = new Product({
                "nameProduct": product.nameProduct,
                "descProduct": product.descProduct,
                "priceProduct": product.priceProduct,
                "size": product.size,
                "qty": 1,
                "status": product.status,
                "userId": product.userId
            })
            productNew.save((err, data) => {
                if(err) {
                    res.json({
                        code: 2,
                        status: 401,
                        message: err.message,
                    })
                }

                res.json({
                    code: 1,
                    status: 201,
                    message: 'Bạn đã tạo thành công rồi đó, vui không?',
                })
                
            })
        } catch (error) {
            res.json({
                code: 2,
                status: 400,
                message: error.message
            });
        }
    }

}