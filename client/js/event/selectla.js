Template.selectlanguage.events({
  "mouseover .country":function(e){
    $(e.target).removeClass("card")
  },
  "mouseout .country":function(e){
    $(e.target).addClass("card")
  },
  "click .call":function(){
    Router.go("/")
  },

  "click .country":function(e){
    var c = e.target.id;
    var profile = Profiles.findOne({userid:Meteor.userId()});
    var obj  = {c:c,id:profile._id};
    Meteor.call("addUserToOnliners",obj,function(err){
      if(err){return console.log(err)}
      console.log("A user was added")
      //console.log(Countries.findOne({name:c}))
      return Router.go("/users/" +c );
    })

  }
})
