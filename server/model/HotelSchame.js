const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({

    name:{

        type:String,
        required: true,
        maxLength:255


    },
    location:{

        type:String,
        required: true,
        maxLength:255


    },
    floor:{

        type:Number,
        required: true



    },
    bedrooms:{

        type:Number,
        required: true



    },
    car_spaces:{

        type:Number

    },
    living_space:{

        type:Number

    },
    bathrooms:{

        type:Number

    },
    area:{

        type:Number,
        required: true



    },
    price:{

        type:Number,
        required: true

    },
    status:{

        type:String,
        required: true,
        enum: ['available','reserved','sold'],
        default:'available'

    },
    date_sell_from:{

        type:Date

    }, 
    date_sell_to:{

        type:Date

    },
    created_at:{

        type:Date,
        required: true

    },
    updated_at:{

        type:Date

    },




})

const Hotels = mongoose.model('hotel',HotelSchema)

module.exports = Hotels