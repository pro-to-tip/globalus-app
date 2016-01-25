Template.ApplicationLayout.helpers({
  notification:function(){
    var n = Notifications.find({reciever:Meteor.userId()}).fetch();
    if(n && n.length){
      console.log(n)
      return n;
    }
  }
})
