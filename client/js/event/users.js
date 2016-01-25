Template.users.events({
  "click .call":function(){
    var profile = Profiles.findOne({userid:Meteor.userId()});
    var country = this.country;
    console.log(country)
    var obj = {
      country:country,
      id:profile._id
    }
    Meteor.call("removeUserOnline",obj,function(err){
      if(err){return console.log(err)}
      console.log("User was removed")
        Router.go("/selectlanguage")
    })

  }
})
