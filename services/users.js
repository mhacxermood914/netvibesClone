const User = require('./../models/users');
const Widget = require('./../models/widget');
const { Op } = require('sequelize');

User.hasMany(Widget, {
  foreignKey: 'userId'
});

// Widget.belongsTo(User);

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
  const res = await User.findOne({
    where: {
      [Op.or]: [
        { id: key },
        { email: key }
      ]
    }
  });
  return res
}


const getAllUsers = async ()=>{
  const res = await User.findAll()
  console.log(res)
  return res
}

// FIXME: 
// getAllUsers().then(res => console.log(res)).catch(e => console.log(e))

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
