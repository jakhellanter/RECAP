var app_fireBase = {};
(function(){
	//Initialize Firebase
	var config = {
    apiKey: "AIzaSyDXfKHQrIY9e9u1ZQq1dzfcFQj3kB2OXo0",
    authDomain: "lostandfoundfinal.firebaseapp.com",
    databaseURL: "https://lostandfoundfinal.firebaseio.com",
    projectId: "lostandfoundfinal",
    storageBucket: "lostandfoundfinal.appspot.com",
    messagingSenderId: "901798337669"
  };

  firebase.initializeApp(config);


  app_fireBase = firebase;

  function fnCreate(path, body, callBack){
    if (!path || !body) return;
    app_fireBase.database().ref(path).set(body, callBack);
  }

  function fnRead(path, successFunction, errorFunction){
    if (!path || !successFunction || !errorFunction) return;
    app_fireBase.database().ref(path).once('value').then(successFunction, errorFunction);
  }

  function fnUpdate(path, body, callBack){
  if (!path || !body)
   return;
   app_fireBase.database().ref(path).update(body, callBack);
  }

 function fnDecline(item_id, callBack){
   if (!item_id) return;
  var item_id = document.getElementById('items_id').value;
  
   app_fireBase.database().ref().child('/items/' + item_id).remove(callBack);
 }

  app_fireBase.databaseApi = {
    create: fnCreate,
    read: fnRead,
    update: fnUpdate,
    decline: fnDecline
    
  }


  

})()

