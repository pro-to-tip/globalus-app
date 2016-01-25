Template.profile.events({
  "click #online":function(){
    var status  = true;
      Meteor.call("setStatus",status,function(err){
        if(err){return console.log(err)}
        console.log("status set true");
      })
  },
  "click #offline":function(){
    var status  = false;
      Meteor.call("setStatus",status,function(err){
        if(err){return console.log(err)}
        console.log("status set false");
      })
  }
})
