Template.chat.onRendered = function(){

  // Handle event: upon opening our connection to the PeerJS server
  peer.on('open', function () {
    $('#myPeerId').text(peer.id);
    console.log("onRendered")
    console.log($('#myPeerId').text(peer.id))
    Session.setPersistent("mypeerid",peer.id);
  });

}

/*Template.chat.onCreated = function(){
  peer.on('open', function () {
    $('#myPeerId').text(peer.id);
    console.log("onCreated")
    console.log($('#myPeerId').text(peer.id))
    Session.setPersistent("mypeerid",peer.id);
  });

}*/

  Template.chat.rendered = function(){

    // Handle event: upon opening our connection to the PeerJS server
    peer.on('open', function () {
      $('#myPeerId').text(peer.id);
      console.log($('#myPeerId').text(peer.id))
      Session.setPersistent("mypeerid",peer.id);
    });

  }
  Template.chatEntity.rendered = function(){
    // Create a Peer instance
      window.peer = new Peer({
      key: 'ixn0zm15kz6ko6r',  // get a free key at http://peerjs.com/peerserver
      debug: 3,
      config: {'iceServers': [
        { url: 'stun:stun.l.google.com:19302' },
        { url: 'stun:stun1.l.google.com:19302' },
      ]}
    });

  /*  // Handle event: upon opening our connection to the PeerJS server
    peer.on('open', function () {
      $('#myPeerId').text(peer.id);
    });*/

    // Handle event: remote peer receives a call
    peer.on('call', function (incomingCall) {
      window.currentCall = incomingCall;
      console.log(window.currentCall)
      incomingCall.answer(window.localStream);
      incomingCall.on('stream', function (remoteStream) {
        window.remoteStream = remoteStream;
        console.log(window.remoteStream)
        console.log("Here")
        var video = document.getElementById("theirVideo")
        video.src = URL.createObjectURL(remoteStream);
      });
    });



  navigator.getUserMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia );
//window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
//navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
   // get audio/video
   navigator.getUserMedia({audio:true, video: true}, function (stream) {
         //display video
         var video = document.getElementById("myVideo");
         console.log(video)
       video.src = URL.createObjectURL(stream);
         window.localStream = stream;
       },
       function (error) { console.log(error); }
     );




  }
