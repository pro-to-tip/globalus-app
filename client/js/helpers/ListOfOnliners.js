Template.ListOfOnliners.helpers({
  people:function(){
        var Country = Countries.find({}).fetch();
        //console.log(Countries)
        if(Country && Country.length){
          var cout = Country.map(function(i){
            console.log(i)
          })
          return Country;
        }
        return false;
  }
})
