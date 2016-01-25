Template.chat.events({
  "click #sendmessage":function(e){
    e.preventDefault()
    var obj = {}
    obj.userid =  Meteor.userId()
    obj.username = Meteor.user().username;
    obj.date = new  Date();
    obj.text =$("#textareaSpance").val();
    obj.connectid = this.connectid;
    var profile = Profiles.findOne({userid:Meteor.userId()})
    if(profile && profile.imageUrl){
          obj.imageUrl = profile.imageUrl;
    }


    if(obj.text){
      Meteor.call("addMessage",obj,function(err){
        if(err){return console.log(err)}
        $("#textareaSpance").val("");
      })
    }
  }
})
