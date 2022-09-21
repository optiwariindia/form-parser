const form=require("formidable")({multiples:true});

module.exports=(req,res,next)=>{
    form.parse(req,(err,fields,files)=>{
        if(!!(err))next();
        req.body=fields;
        req.files=files;
        next();
    })
}