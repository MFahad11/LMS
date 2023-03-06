const service = require('../services/user')
const { catchAsync } = require('../helpers/request');


exports.createUser = catchAsync(async (req, res, next) => {
    const payload = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    };
  
    res.body = await service.createUser(payload);
    return res.json(res.body);
  });
  exports.updatePayment = catchAsync(async (req, res, next) => {
 
    const payload = {
      user: req.params.id,
      payment: true,
    };
  
    res.body = await service.updatePayment(payload);
    return res.json(res.body);
  });
  