Connections =  new Mongo.Collection("connections");

var connectSchema = new SimpleSchema({
    personA:{type:String},
    personB:{type:String},
    acceptA:{type:Boolean,optional:true},
    acceptB:{type:Boolean,optional:true},
    connected:{type:Boolean,optional:true},
    dateofConnection:{type:Date,optional:true},
    timeofConnection:{type:String,optional:true},
    lengthofConnection:{type:String,optional:true},
    language:{type:String,optional:true},
    leftA:{type:Boolean,optional:true},
    leftB:{type:Boolean,optional:true},
    theirpeeridA:{type:String,optional:true},
    theirpeeridB:{type:String,optional:true}
  })



  Connections.attachSchema(connectSchema);

//Connections.remove({})
