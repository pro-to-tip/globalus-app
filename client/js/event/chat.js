Template.chat.events({
  "click #gobacktoselectlang":function(){
    var connectid = this.connectid;
    var profile = Profiles.findOne({userid:Meteor.userId()});
    var country = Countries.findOne({usersonline:{$in:[profile._id]}});


    var obj = {
      country:country.name,
      id:profile._id
    }
    Meteor.call("removeUserOnline",obj,function(err){
      if(err){return console.log(err)}
      console.log("User was removed")
    })

    if(connectid){
      Meteor.call("CheckConnection",connectid,function(err){
        if(err){return console.log(err)}
        return Router.go("/selectlanguage")
      })
    }

  }
})
