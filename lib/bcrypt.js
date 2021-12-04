const bcrypt = require("bcryptjs");
const saltRounds = 10;

const hash = (password) => {
    return bcrypt.hash(password, saltRounds);
}

const compare = async (password, hash) => {
    const res = await bcrypt.compare(password, hash)
    return res
}

module.exports = {
    hash,
    compare
}