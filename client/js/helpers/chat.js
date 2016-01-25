Template.chat.helpers({
  message:function(){
    var m = Messages.find({connectid:this.connectid}).fetch();
    console.log(m);
    if(m){
      return m;
    }
  },
  connected:function(){
    var connection  = Connections.findOne(this.connectid);
    if(connection && connection.connected){return true}
    return false;
  }
})
