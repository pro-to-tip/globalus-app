Notifications  =  new Mongo.Collection("notofications");

var notifySchema = new SimpleSchema({
    link:{type:String},
    username:{type:String},
    reciever:{type:String},
    language:{type:String,optional:true},
    seen:{type:Boolean,optional:true}
  })



  Notifications.attachSchema(notifySchema);

//Notifications.remove({})
