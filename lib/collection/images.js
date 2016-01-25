var imageStore = new FS.Store.GridFS("images");
  //var imageStore = new FS.Store.FileSystem("images", {path: "../../../../../public"})
Images = new FS.Collection("images", {
 stores: [imageStore],
 filter: {
   allow: {
 contentTypes: ['image/*'],
 extensions: ['png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG','gif','GIF']
}}
});

//Images.remove({})
