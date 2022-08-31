const mongoose = require('mongoose');
const Joi = require('joi');

const crewSchema = new mongoose.Schema({

    contractID:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    employeeID:{
        type:String,
        required:true
    },
    employeeName:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    }

});
// const crew = mongoose.model('Crews',crewSchema);

// const validaor = (data) => {
//     const Schema =Joi.object({
//         contractID:Joi.String().required(),
//         position:Joi.String().required(),
//         employeeID:Joi.String().required(),
//         employeeName:Joi.String().required(),
//         contactNo:Joi.number().required()
//     });
//     return this.schema.validate(data);
// }

module.exports = mongoose.model('Crews',crewSchema);
// module.exports = [crew, validaor];