Profiles = new Mongo.Collection("profiles");

  var profileSchema = new SimpleSchema({
    userid:{type:String},
    imageid:{type:String,optional:true},
    imageUrl:{type:String,optional:true},
    username:{type:String,optional:true},
    intromessage:{type:String,optional:true},
    rating:{type:String,optional:true},
    mylanguage:{type:String,optional:true},
    status:{type:Boolean,optional:true},
    listOfConnections:{
      type:[String],
      optional:true
    }

  })



  Profiles.attachSchema(profileSchema);

//Profiles.remove({})
