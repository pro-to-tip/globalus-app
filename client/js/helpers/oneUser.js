Template.oneUser.helpers({
  notOwner:function(){
    return this.userid === Meteor.userId()
  }
})
