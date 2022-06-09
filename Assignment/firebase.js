var storage = firebase.storage();
var storageRef = storage.ref();

$('#List').find('tbody').html('');
 

var i = 0 ;
storageRef.child('uploads/').listAll().then(function(result){
   result.items.forEach(function(imageRef){
        console.log("Image refernce" + imageRef.toString());
   })
});
