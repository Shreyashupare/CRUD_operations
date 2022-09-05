const Joi = require('joi');

const addEmployeeValidator = (req, res, next ) =>{
    
    const schema = Joi.object({
        Emp_id: Joi.required(),
        name: Joi.string().required(),
        age: Joi.number().integer().required()
    });
    const { error }  = schema.validate(req.body);

    if(error){
        console.log(`validation error :${error.message}`);
        res.send(`validation error :${error.message}`);
    }
    else{
        next();
    }
}

module.exports = addEmployeeValidator