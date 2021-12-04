const User = require('./../models/users')
const createUser = async ({ email, encryptedPassword, jwt }) => {
  User.create({ "email": email, "password": encryptedPassword, "token": jwt })
  return { msg: "User is created successful" };
};

const updateUser = async (user) => {
  return { msg: "User is updated successful" };
};

const deleteUser = async (user) => {
  return { msg: "User is deleted successful" };
};

const getUserBy = async (key) => {
  const res = await User.findOne({ where: { email: key } });
  return res
}


const getAllUsers = async ()=>{
  const res = await User.findAll()
  return res
}
const getUserInfoBy = async (key, attributes = true) => {

  

  let res;

  if (typeof attributes === 'boolean') {
    res = await User.find({
      where: {
        email: key
      }
    })
  } else {
    console.log(typeof attributes)
    res = await User.findAll({
      attributes: [attributes],
      where: {
        email: key
      }
    })
  }

  return res
}

module.exports = {
  createUser,
  getUserBy,
  getUserInfoBy,
  updateUser,
  deleteUser,
  getAllUsers
};
