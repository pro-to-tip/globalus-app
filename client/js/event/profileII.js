Template.profile.events({
  "click .glyphicon-camera":function(e){
    e.preventDefault();
    $("#inputmyprofile").trigger("click")
  },
  "change #inputmyprofile":function(e){
    var files = $("#inputmyprofile").prop("files");

                                Images.insert(files[0],function(err,fileObj){
                                    if(err){return console.log(err)}
                                    else{
                                          var intervalhandle = Meteor.setInterval(function (){

                                                    if(fileObj.hasStored("images")){

                                                           var obj = {};
                                                           obj.imageUrl = fileObj.url();
                                                           obj.imageid = fileObj._id;
                                                           obj.userid = Meteor.userId();
                                                           obj.username = Meteor.user().username;
                                                        Meteor.call("addProfileImage",obj,function(err){
                                                          if(err){
                                                            Images.remove(obj.imageid);
                                                            return console.log(err)}
                                                          console.log("ProfileImage updates")
                                                          return Meteor.clearInterval(intervalhandle);
                                                        })

                                                    }
                                            },1000)
                                    }
                                })
  },
  "mouseout #introtext":function(){
      var text  = $("#introtext").val();
      if(text && text.length){

            Meteor.call("addIntroMessage",text,function(err){
              if(err){return console.log(err)}
              console.log("Intro text entered")
            })
      }
  }
})
