Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function(){
        this.route("profile",{
          path:"/",
          template:"profile"
        });

        this.route("chat",{
          path:"/chat/:country/:user/:connectid",
          template:"chat",
          data:function(){
            return {
              connectid:this.params.connectid
            }
          }
        });
        this.route("selectlanguage",{
          path:"/selectlanguage",
          template:"selectlanguage"
        });
        this.route("users",{
          path:"/users/:country",
          template:"users",
          data:function(){
            //console.log(this.params.country)
            return {
              country:this.params.country
            }
          }
        });

})



var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        this.render('home');
        return pause();
      }
      else{
          this.next()
      }


    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['profile', 'selectlanguage',"chat","users"]
});
