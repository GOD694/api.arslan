const {Schema,model, Types} = require("mongoose");

const servicSchema  = new Schema({
    icon: {
        type:String,
        required : true
    },
    
    title: {
        type :String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    clr:   {
        type:String,
        required:true
    },
    tags:   {
        type: [String],
        default: []
      },
    desc:  {
        type:String,
        required:true
    },
    items: {
        type: [String],
        default: []
      },
},{ timestamps: true });


const Services = model("Service",servicSchema);

module.exports = Services;