const {Webhook} =require('svix')
const User=require('../models/User.js')
const dotenv=require('dotenv')
// api controller function to manage  clerk user with database...
dotenv.config({
    path:".env"
})
const clerkhooks=async(req,res)=>{
try {
    // create a svix instance with clerk webhook...
    const whook =new Webhook(process.env.CLERK_WEBHOOK)
    // verifying header
    await whook.verify(JSON.stringify(req.body),{
        "svix-id":req.headers['svix-id'],
        "svix-timestamp":req.headers["svix-timestamp"],
        'svix-signature':req.headers['svix-signature']
    })
    // getting data from requist body
    const {data,type}=req.body;
    // switch cases for different events...
    switch(type){
        case 'user.created':{
            const userdata={
_id:data.id,
email:data.email_addresses[0].email_address,
name:data.first_name +" "+data.last_name,
image:data.image_url,
resume:""
            }
            await User.create(userdata)
            res.json({})
            break;
        }
        case 'user.updated':{
            const userdata={
              
                email:data.email_addresses[0].email_address,
                name:data.first_name +" "+data.last_name,
                image:data.image_url,
                
                            }
                            await User.findByIdAndUpdate(data.id,userdata)
                            res.json({})
                            break;
        }
        case 'user.deleted':{
            await User.findByIdAndDelete(data.id)
            res.json({})
            break;
        }
        default:
        break;
    }
} catch (error) {
    console.log(error.message)
    res.json({
        succedss:false,message:"webhook error..."
    })

}
}
module.exports=clerkhooks