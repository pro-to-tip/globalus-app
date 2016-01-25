Countries =  new Mongo.Collection("countries");

var countSchema = new SimpleSchema({
    name:{type:String},
    usersonline:{type:[String],optional:true},
  })



  Countries.attachSchema(countSchema);

//Countries.remove({})
