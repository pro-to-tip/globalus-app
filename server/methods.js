Meteor.methods({
  addProfileImage:function(obj){
    var profile = Profiles.findOne({userid:Meteor.userId()});
    if(profile && profile.imageUrl){

        return Profiles.update(profile._id,{$set:{imageUrl:obj.imageUrl,imageid:obj.imageid}})
    }
    else if(profile  && !profile.imageUrl){
      return Profiles.update(profile._id,{$set:{imageUrl:obj.imageUrl,imageid:obj.imageid}})
    }

    return Profiles.insert(obj);
  },
  addIntroMessage:function(text){
      var profile = Profiles.findOne({userid:Meteor.userId()});

      if(profile  && profile.intromessage){
          return Profiles.update(profile._id,{$set:{intromessage:text}});
      }
      else if(profile  && !profile.intromessage){
          return Profiles.update(profile._id,{$set:{intromessage:text}});
      }
      else if(!profile){
        var obj =  {};
        obj.userid = Meteor.userId();
        obj.username = Meteor.user().username;
        obj.intromessage = text;
        return Profiles.insert(obj);
      }
  }

})
