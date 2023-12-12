const app=require('express')
const router=app.Router();
const Admin=require('../models/Admin')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const fetchuser=require('../middleware/fetchuser')
require('dotenv').config();

router.post('/createadmin',async(req,res)=>{
    success=false
    try{
        const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt)
    let admincred=await Admin.create(
        {
            name:req.body.name,
           
            password:secPass
        }
    )
        success=true
    res.json({"success":success,admincred})}
    catch(error){
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/login',async(req,res)=>{
    success=false
    console.log(req.body)
    try{
        const user=await Admin.findOne({name:req.body.name})
        if(!user){
            return res.status(400).json({error:"Please try to login with correct credentials"})
        }
        const passwordCompare=await bcrypt.compare(req.body.password,user.password)
        if(!passwordCompare){
            return res.status(400).json({error:"Please try to login with correct credentials"})
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data,process.env.JWT_SECRET)
        success=true
        res.json({"success":success,authToken})
    }
    catch(error){
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})


module.exports=router;
