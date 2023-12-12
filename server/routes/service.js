const app=require('express')
const router=app.Router()
const Calls=require('../models/Calls')
const Customers=require('../models/Customers')
const fetchuser=require('../middleware/fetchuser')

router.post('/addcall',async(req,res)=>{
    try{
        const {name,phone,location,service,requirement,image}=req.body
        
        const call=await Calls.create({
            name,
            phone,
            location,
            service,
            requirement,
            image

        })
        const customer=await Customers.findOne({phone})
        if(!customer){
            const customer=await Customers.create({
                name,
                phone,
                location,
                service
            })
        }
        else{
            customer.service.push(service)
            await customer.save()
        
        }
        res.json({"call":call,"customer":customer})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})
router.get('/getcalls',fetchuser,async(req,res)=>{
    try{
        const calls=await Calls.find()
        res.json(calls)
    }
    catch(error){
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})
router.get('/getcustomer',fetchuser,async(req,res)=>{
    try{
        const customer=await Calls.find()
        res.json(customer)
    }
    catch(error){
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})
module.exports=router;