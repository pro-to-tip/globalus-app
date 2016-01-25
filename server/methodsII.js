Meteor.methods({
  setStatus:function(status){
    var profile = Profiles.findOne({userid:Meteor.userId()});
    if(profile && profile.status){
      return Profiles.update(profile._id,{$set:{status:status}})

    }

    else if(profile && !profile.status){
          return Profiles.update(profile._id,{$set:{status:status}})
    }
    else{
      var obj =  {};
      obj.userid = Meteor.userId();
      obj.username = Meteor.user().username;
      obj.status  = status;
      return Profiles.insert(obj);

    }
  },
  addUserToOnliners:function(obj){

    var language = Countries.findOne({name:obj.c});
    var profile = Profiles.findOne(obj.id);
    if(language){
      return Countries.update(language._id,{$addToSet:{usersonline:profile._id}});
    }
    else{
      var newObj= {name:obj.c};
      Countries.insert(newObj,function(err,data){
        if(err){return console.log(err)}
        //console.log(data)
            return Countries.update(data,{$addToSet:{usersonline:profile._id}});
      })
    }

  },
  removeUserOnline:function(obj){
    var country = Countries.findOne({name:obj.country})
    return Countries.update(country._id,{$pull:{usersonline:obj.id}})
  }
})
