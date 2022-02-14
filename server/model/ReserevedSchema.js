const mongoose = require('mongoose')

const ResercedSchema = new mongoose.Schema({

    first_name:{

        type:String,
        required: true,
        maxlength:30,
        minlength:3


    },
    last_name:{

        type:String,
        required: true,
        maxlength:30,
        minlength:3


    },
    email:{

        type:String,
        required: true,
        maxlength:255,
        minlength:3


    },
    phone:{

        type:String,
        required: true,
        maxlength:20,
        minlength:6,
        match:[/^\+\d{3,3} *\d{3,3} *\d{5,5}$/]

    },
    reserved_at:{

        type:Date,
        required: true

    },
    created_at:{

        type:Date,
        default:Date.now(),
        required: true

    },
    updated_at:{

        type:Date

    },


})

const Resered = mongoose.model('reserves',ResercedSchema)

module.exports = Resered