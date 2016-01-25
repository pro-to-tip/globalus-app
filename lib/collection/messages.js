Messages =  new Mongo.Collection("messages");

var messSchema = new SimpleSchema({
  username:{type:String},
  date:{type:String},
    userid:{type:String,optional:true},
    connectid:{type:String,optional:true},
    imageUrl:{type:String},
    text:{type:String}
  })



  Messages.attachSchema(messSchema);

//Messages.remove({})
