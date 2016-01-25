Template.oneUser.events({
  "click .userInfo":function(e){
    var profile = Profiles.findOne({userid:Meteor.userId()});
    var a = Countries.findOne({usersonline:{$in:[profile._id]}})
    var re  = this.userid;

    if(Meteor.userId() === this.userid){return false;}
    var obj = {
      personA:Meteor.userId(),
      personB:this.userid
    }
    
    var connectid;
    Meteor.call("createConnection",obj,function(err,data){
      if(err){return console.log(err)}
      console.log("Connection Established")
      connectid = data;

    })

    //After successful connection send notification to the user clicked
                          var intervalhandle = Meteor.setInterval(function (){
                            console.log("Entering")

                                                                      if(connectid){
                                                                        var link = "/chat/" + a.name + "/" + re + "/" + connectid;
                                                                        if(link){

                                                                          var f = {
                                                                            link:link,
                                                                            username:Meteor.user().username,
                                                                            reciever:re,
                                                                            language:a.name,
                                                                            seen:false

                                                                          }

                                                                        Meteor.call("SendNotification",f,function(err){
                                                                          if(err){
                                                                            console.log(err)
                                                                            return Meteor.clearInterval(intervalhandle);
                                                                          }
                                                                          console.log("Notification sent")
                                                                          Router.go(link)
                                                                          return Meteor.clearInterval(intervalhandle);
                                                                        })

                                                                        }
                                                                        else{return Meteor.clearInterval(intervalhandle);}

                                                                      }

                          },1000)



  }
})
