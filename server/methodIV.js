Meteor.methods({
  confirmConnection:function(obj){
    var connection = Connections.findOne(obj.connectid);
    if(connection.personA === Meteor.userId()){
      Connections.update(connection._id,{$set:{acceptA:true,theirpeeridB:obj.mypeerid}})
      console.log("A accepted")
    }
    if(connection.personB === Meteor.userId()){
      Connections.update(connection._id,{$set:{acceptB:true,theirpeeridA:obj.mypeerid}})
      console.log("B accepted")
    }
    connection = Connections.findOne(obj.connectid);
    if(connection.acceptA && connection.acceptB){
      return Connections.update(connection._id,{$set:{connected:true,dateofConnection:new Date()}})
    }
    else{
      return true;
    }

  },
  removeUser:function(){
    Meteor.users.remove(Meteor.userId())

  }
})
