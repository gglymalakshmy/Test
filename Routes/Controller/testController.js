const bcrypt= require("bcrypt")
const User= require("../../Schema/testSchema")
const jwt = require("jsonwebtoken")

const arrayGet = async(req, res) => {
    const {name,email,password} = req.body

    let len=password.length
    if(!name||!password||!email){}

    const userDetails = await User.create ({
        name,
        email,
        password
    })

    res.json(userDetails) 
}  
    const data=(req,res)=>{
        res.json("Hii is working...........");
}
const getuserData = async(req,res)=>{
const  userDatas =await User.find({})
    res.json(userDatas)

}
const getallEmails = async(req,res)=>{
    const  userEmails =await User.find({})
        res.json(userEmails)
}

const getOneData = async(req,res)=>{

    const {email}= req.body
    const  userOneData =await User.findOne({email:email})
        res.json(userOneData)
    
    }
    const getOneUser = async(req,res)=>{

        const {email,password}= req.body
        if(!email ||!password){
            {
                res.json("Error")
            }
        }
         else{
        const {email}= req.body
        const  userOne =await User.findOne({email:email})
        if(userOne)
        {
            res.json("Login Success")
        }
        else
        {
            res.json("Failed")
        }    
        }
    }
    const login = async(req,res)=>{

        const {email,password}= req.body
        if(!email ||!password){
            {
                res.json("Error")
            }
        }
         else{
        const {email}= req.body
        const  userOne =await User.findOne({email:email})
       // console.log(userOne.password,"hashed....");
        //console.log(password,"password...");
        if(userOne && await bcrypt.compare(password,userOne.password))
        {
            // res.json("Login Success")
            res.json({
                id:userOne.id,
                email:userOne.email,
                message:"success",
                token:generateToken(userOne.id)
            })
        }
        else
        { 
            // res.json("Failed")
            res.json({
                message:"Login Failed",
                isError:true
            })
        }    
        }
    }
const signUp = async(req,res)=>{
    const {email,name,password}=req.body
    const salt=await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt)
    console.log(hashedPassword);
    const userExit=await User.findOne({email:email})
    if(userExit)
    {
        res.json("Email already Exit")
    }
    else
    {
    const userSignUp=await User.create({
    name,
    email,
    password:hashedPassword
    })
    res.json({
        id:userSignUp.id,
        name:userSignUp.name,
        email:userSignUp.email,
        token:generateToken(userSignUp.id)

    })
    }
}
const userHome =(req,res)=>{
    res.json("This is Home page.........");
}
const generateToken=(id)=>{
    return jwt.sign({id},"glyma123",{expiresIn:"1d"})
}
// const updateuser= async(req,res)=>{
//     const {name}=req.body
//     const _id="63d785385435227704d03b11"
//     const updateuser= await User.findByIdAndUpdate(_id,{name
//     })
//     res.json(updateuser)
// }

const updateUser =async(req,res)=>{

    const {name,email} = req.body

    const _id = "63d7938b76127ca5e2c93a63"

    const updatedUser = await User.findByIdAndUpdate(_id,{
        name,
        email
    })

    res.json(updatedUser)
}

const deleteUser =async(req,res)=>{

    const {_id} = req.body

    const deleteduser = await User.findByIdAndDelete(_id)

    res.json(deleteduser)
}
const deleteParamUser =async(req,res)=>{

    const _id = req.params.del
    const deletedUser1 = await User.findByIdAndDelete(_id)

    res.json(deletedUser1)
}

// const test = (req,res)=>{
//     const  array=[
//         {name:"hello",age:20},
//         {name:"bye",age:70}
//     ]
//         res.json(array)
    
//     }
    const test = async(req,res)=>{
        const studentData = await User.find({})
            res.json(studentData)
        
        }


        const testing = async(req,res)=>{
            const {email,name,password}=req.body
            const userDetails = await User.create ({
                name,
                email,
                password
            })
            res.json(userDetails)
        }

        const updateEmail =async(req,res)=>{

            const {_id,email} = req.body
        
            const updatedUser = await User.findByIdAndUpdate(_id,{
                email
            })
        
            res.json(updatedUser)
        }


 module.exports= {data,arrayGet,getuserData,getOneData,getOneUser,signUp,login,userHome,updateUser,deleteUser,deleteParamUser,test,testing,getallEmails,updateEmail}
    