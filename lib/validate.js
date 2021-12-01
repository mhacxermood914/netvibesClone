const Ajv = require ('ajv'),validator=require('validator')
const ajv = new Ajv()
const schema = {
    title:'validate',
    properties:{
        email: { type: 'string' },
        password:{type:'string'}
    }
}
const validate = ajv.compile(schema);
const inputController = (data)=>{


    if(!validate(data,schema)){
        return "Please ensure you enter correct data";
    }
    else if (!validator.isEmail(data.email)){
        return "Please ensure it's an email";
    } else if (!data.password){
        return "Please ensure it's a password"
    }
}

module.exports = inputController