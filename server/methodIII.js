Meteor.methods({
  createConnection:function(obj){
    return Connections.insert(obj);
  },
  CheckConnection:function(connectid){
    var connection = Connections.findOne(connectid);
    var profile  = Profiles.findOne({userid:Meteor.userId()})
    if(connection.personA === Meteor.userId()){
        Connections.update(connection._id,{$set:{leftA:true}})
      console.log("poerson A")
    }
    if(connection.personB === Meteor.userId()){
          Connections.update(connection._id,{$set:{leftB:true}})
      console.log("person B")
    }
    if(connection  && connection.connected){
      console.log("Connection to be stored")
      return  Profiles.update(profile._id,{$push:{listOfConnections:connectid}})
    }
    console.log("Connection to be removed")
    var messages = Messages.find({connectid:connectid}).fetch();
    if(messages && messages.length){
      messages.forEach(function(it){
        Messages.remove(it._id);
        console.log("Deleted Messages")
      })
    }
    connection = Connections.findOne(connectid);
    if(connection.leftA && connection.leftB){
      console.log("Both Left")
          return Connections.remove(connectid);
    }
    else{
      return true;
    }

  },
  SendNotification:function(obj){
    console.log("Sending Notifications")
    return Notifications.insert(obj);
  },
  addMessage:function(obj){
    Messages.insert(obj);
  }
})
