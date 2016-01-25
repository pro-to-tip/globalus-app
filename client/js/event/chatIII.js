Template.chat.events({
  "click #ConnectBothUsers":function(e){
    e.preventDefault();
    var mypeerid = Session.get("mypeerid");
    console.log(mypeerid)
    var obj = {
      user:Meteor.userId(),
      connectid: this.connectid,
      mypeerid:mypeerid
    }
    Meteor.call("confirmConnection",obj,function(err){
      if(err){return console.log(err)}
      console.log("Connection confirmed")
    })
  },
  "click #makeCall": function () {
    var number;
    var connection = Connections.findOne(this.connectid);
    if(connection && connection.theirpeeridA && connection.theirpeeridA){

        if(connection.personA === Meteor.userId()){
          number = connection.theirpeeridA;
        }

        if(connection.personB === Meteor.userId()){
          number = connection.theirpeeridA;
        }
      var outgoingCall = peer.call(number, window.localStream);
      window.currentCall = outgoingCall;
      console.log(window.currentCall)
      outgoingCall.on('stream', function (remoteStream) {
        window.remoteStream = remoteStream;
        console.log("Inside the Remote Stream")
        var video = document.getElementById("theirVideo")
        console.log("Video captured")
        console.log("Their video found ")
        video.src = URL.createObjectURL(remoteStream);
      });

    }

      },
      "click #endCall": function () {
      window.currentCall.close();
      $("#gobacktoselectlang").trigger("click")

    }
})
