Template.profile.events({
  "click #online":function(){
    $("#slidingwhiteball").animate({"margin-left":"0px"})
  },

  "click #offline":function(){
    $("#slidingwhiteball").animate({"margin-left":"160px"})
  },
  "click #logout":function(){
      Meteor.logout(function(){
        console.log("Logged Out")
      })
  },
  "click #findPartner":function(){
    Router.go("/selectlanguage")
  }
})
