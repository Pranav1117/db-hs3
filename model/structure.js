const mongoose=require("mongoose")

const employee_structure=  mongoose.Schema({
firstName:{
    typeof:String
},
lastName:{
    typeof:String
},
salary:{
    typeof:String
},
overallExp:{
    typeof:String
},
lastCompany:{
    typeof:String
},
department:{
    type:String
},
gradStream:{
    type:String
},
contactInfo:{
    type:String
},
lastSalary:{
    type:String
},
yearGrad:{
    type:String
}



})

const collection=mongoose.model("Human_Resource_HS3",employee_structure)

mongoose.model.exports=collection