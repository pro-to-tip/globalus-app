Template.welcome.events({
  "click #signin":function(e){
    e.preventDefault()
                        var user = {};
                        user.username =  $("[name=username]").val();
                        user.password = $("[name=password]").val();
                        if(user.username && user.password && user.password.length === 8){

                            Meteor.loginWithPassword(user.username, user.password, function(err){
                              if(err){
                                console.log(err)
                                var error  = err.reason;
                                Session.set("error",true)
                                return $(".errorplace").html(error);

                              };
                              console.log("I am Logged In");
                              Session.set("error",null)
                              Router.go("/");
                            })
                        }

  },
  "click #signup":function(e){
    e.preventDefault()
                      var user = {};
                      user.username =  $("[name=username]").val();
                      user.password = $("[name=password]").val();

                      Accounts.createUser(user,function(err){
                        if(err){
                          var error  = err.reason;
                          Session.set("error",true)
                          return $(".errorplace").html(error);

                        };
                        console.log("I am Logged In");
                        Session.set("error",null)
                        Router.go("/");
                      })
  }
})
