const express = require('express')
const router = new express.Router()

//This is the only collection in the sample_airbnb database
const listings = require('../models/sample_airbnb/listings_model')

router.get('/airbnb_questions/1', async (req, res) => {
    try{   
        const data = await listings;
        res.status(200).send({answer:data.notes[0], order:1})

    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router