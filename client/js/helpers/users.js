Template.users.helpers({
  onlineer:function(){
    var countryname = this.country;
    var country = Countries.findOne({name:countryname})
    if(country && country.usersonline && country.usersonline.length){

          var u = country.usersonline.map(function(it){
              var profile = Profiles.findOne(it);
              return profile;
          })
          return u;
    }
  },
  myprofile:function(){
      var profile = Profiles.findOne({userid:Meteor.userId()});
      //console.log(Countries.findOne({name:this.country}))

      if(profile && profile.imageUrl){
        return profile.imageUrl;
      }
      else{
        return false;
      }
  },
  status:function(){
      var profile = Profiles.findOne({userid:Meteor.userId()});
      if(profile && profile.status){return profile.status;}
      return false;
  },
  intromessage:function(){
    var profile = Profiles.findOne({userid:Meteor.userId()});
    if(profile && profile.intromessage){return profile.intromessage;}
    return false;
  },
  username:function(){
    var profile = Profiles.findOne({userid:Meteor.userId()});
    if(profile && profile.username){return profile.username;}
    return false;
  }
})
