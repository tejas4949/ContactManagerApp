const errorHandler=(err,req,res,next)=>{
   const statusCode=res.statusCode ? res.statusCode:500;
   switch(statusCode){
    case 400:
        res.json({title:"validation failed",message:err.message,stackTrace:err.stack});
        break;
        case 404:
            res.json({title:"not found",message:err.message,stackTrace:err.stack});
   
        default:
            break;
   }
  
};
module.exports=errorHandler;