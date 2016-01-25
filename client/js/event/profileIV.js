Template.profile.events({
  "click #rest":function(){

    var c = confirm("Do you really want to delete your Account?");
    if(c){
        var profile = Profiles.find({userid:Meteor.userId()});
        if(profile){
          Images.remove(profile.imageid);
          Profiles.remove(profile._id);
        }
          Meteor.call("removeUser");
    }
  }
})
