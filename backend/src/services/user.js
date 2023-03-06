const userRepo = require("../repositories/user");
exports.createUser = async (payload) => {
    const createPayload = {
      name: payload.name,
      email: payload.email,
      phone:payload.phone
    };
    return await userRepo.create(createPayload);
  };
  exports.updatePayment = async (payload) => {
    const createPayload = {
      user: payload.user,
      payment: true,
    };
    return await userRepo.update(createPayload);
  };