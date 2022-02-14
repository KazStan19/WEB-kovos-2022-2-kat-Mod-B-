const express = require('express')
const app = express()
const cors = require('cors')
const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose')
require('dotenv').config()

const hotelModel = require('./model/HotelSchame.js')
const reserveModel = require('./model/ReserevedSchema.js')

const username = process.env.USER_NAME

const password = process.env.PASS_WORD

app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://${username}:${password}@hotelcluster.glmuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{useNewUrlParser:true})
.then(()=>{

    console.log('connection succesfull')

})
.catch((err) => console.log(err))

app.get('/admin/read', async (req,res)=>{

    hotelModel.find({},(err,result)=>{

        if(err){res.send(err)}

        //console.log(result)

        res.send(result)
    
    })

})

app.get('/client/read', async (req,res)=>{

    hotelModel.find({status:'available'},(err,result)=>{

        if(err){res.send(err)}

        //console.log(result)

        res.send(result)
    
    })

})

app.delete('/admin/delete/:id', async (req,res)=>{

    id = req.params.id

    hotelModel.findByIdAndRemove((id)).exec()

})


app.post('/admin/post', async (req,res)=>{

    const hotel= new hotelModel ({
        name:req.body.name,
        location:req.body.location,
        floor:req.body.floor,
        bedrooms:req.body.bedrooms,
        bathrooms:req.body.bathrooms,
        car_spaces:req.body.car,
        living_space:req.body.living,
        area:req.body.area,
        price:req.body.price,
        status:req.body.status,
        date_sell_from:req.body.sellForm,
        date_sell_to:req.body.sellForm,
        created_at:Date.now()
    })

    

    try {

        await hotel.save()
        //console.log(hotel)
        res.send(hotel)

    } catch (error) {
        //console.log(error)
        res.send(error)
    }

})

app.post('/POST/api/v1/apartments/:id/reserve', async (req,res)=>{

    const hotel= new hotelModel ({
        first_name:'dummy',
        last_name:'dummy',
        email:'dummy',
        phone:'dummy',
        reserved_at:'dummy',
        created_at:'dummy',
        updated_at:'dummy',

    })

    

    try {

        await hotel.save()
        //console.log(hotel)
        res.send(hotel)

    } catch (error) {
        //console.log(error)
        res.send(error)
    }

})


app.post('/admin/post/file', async (req,res)=>{

    const fileData  = []

    fs.createReadStream(req.body.fileUrl)
    .pipe(csv())
    .on('data', (row) => {
    fileData.push(row)
    })
    .on('end', () => {
    console.log('CSV file successfully processed');
    });

    try {

        await fileData.save()
        /onsole.log(fileData)
        res.send(fileData)

    } catch (error) {
        //console.log(error)
        res.send(error)
    }

})

app.listen(5000,()=>{

    console.log('live server is on port 5000')

})