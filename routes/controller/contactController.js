//desc get all contacts
//@route get/api/contacts
//@public

const getContacts=(req,res)=>{
    console.log("the request body is:",req.body);
    const{name,email,phone}=req.body;
    if(!name ||!email||!phone){
        res.status(400);
        throw new Error("all fields are mandatory!")
    }
    res.status(200).json({message:"get all contacts"});
};


//desc create new  contacts
//@route post/api/contacts
//@public

const createContact=(req,res)=>{
    res.status(201).json({message:"create contacts"});
}


//desc get  contact
//@route get/api/contacts/:id
//@public

const getContact=(req,res)=>{
    res.status(200).json({message:`get contacts for  ${req.params.id}`});
}


//desc update  contact
//@route put/api/contacts/:id
//@public

const updateContact=(req,res)=>{
    res.status(200).json({message:`update contacts for  ${req.params.id}`});
};



//desc delete  contact
//@route delete/api/contacts/:id
//@public

const deleteContact=(req,res)=>{
    res.status(200).json({message:`delete contacts for  ${req.params.id}`});
};


module.exports={getContacts,createContact,getContact,updateContact,deleteContact};