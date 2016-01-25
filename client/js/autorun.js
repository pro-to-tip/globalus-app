Deps.autorun(function(){
var n = Notifications.find({reciever:Meteor.userId()}).fetch();
console.log(n.length)
if(n.length > 0){
  document.title ="LangTalk" + "(" + n.length + ")";
}
else{
  document.title ="LangTalk";
}

});
