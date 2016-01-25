Template.ApplicationLayout.events({
  "click #nitclick":function(){
    $("#shownotifiation").slideToggle("slow");
  },
  "click .nitlinks":function(e){
    var id = e.target.id;
    console.log(id)
    Notifications.remove(id,function(err){
      if(err){return console.log(err)}
      console.log("deleted")
    });
  }
})
