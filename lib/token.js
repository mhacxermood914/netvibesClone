const jwt = require('jsonwebtoken')
const token = async (email) => {
   return jwt.sign(
        { email },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        })
}

module.exports = {token}