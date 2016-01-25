Connections.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 }

 });

Connections.allow({
 insert: function(){
   if(Meteor.userId()){
     return true;
   }
   return false;
 },
 update: function(){
   if(Meteor.userId()){
     return true;
   }
   return false;
 },
 remove: function(){
   if(Meteor.userId()){
     return true;
   }
   return false;
 }
});
