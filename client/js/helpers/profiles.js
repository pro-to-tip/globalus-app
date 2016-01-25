Template.profile.helpers({
  myprofile:function(){
    var profile = Profiles.findOne({userid:Meteor.userId()});

    if(profile   && profile.imageUrl){
      return profile.imageUrl;
    }
    return false;
  },
  intromessage:function(){
    var profile = Profiles.findOne({userid:Meteor.userId()});
    if(profile && profile.intromessage){
      return profile.intromessage;
    }
    else{
      return false;
    }
  },
  online:function(){
      var profile = Profiles.findOne({userid:Meteor.userId()});
      if(profile && profile.status){return profile.status};
      return false;
  },
  date:function(){
    var today = new Date();
    return moment(today).format('LLLL');
  }
})
