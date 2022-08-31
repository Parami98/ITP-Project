const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({

    
    employeeID : {
        type : String,
        required : true
    },

    employeeName : {
        type : String,
        required : true
    },

    position : {
        type : String,
        required : true
    },

    attendance : {
        type : String,
        required : true
    },

    calculateBy : {
        type : String,
        required : true
    },

    salary : {
        type : Number,
        required : true
    }

});

module.exports = mongoose.model('Salarys',salarySchema);