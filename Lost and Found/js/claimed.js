var mainApp = {};

(function(){
	var firebase = app_fireBase;
var uid = null;
	firebase.auth().onAuthStateChanged(function(user) {
  		if (user) {
    		// User is signed in.
    		uid = user.uid;
  		}else{
  			// Redirect to login page
  			uid = null;
  			window.location.replace("login.html");
  		}
	  });

	function logOut(){
		firebase.auth().signOut();
	}

	function reload_page(){
		window.location.reload();
	   }


	function messageHandler(err){
		if(!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}

	

	function fnCreate(){
		var path = 'users/' + uid;
		var data = {
			name: "Gabriel",
			age: 29,
			message: "Hello firebase"
		}
		app_fireBase.databaseApi.create(path, data, messageHandler);

	}
	function fnRead(){
		var path = 'users/' + uid;
		app_fireBase.databaseApi.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!!snapShot){
				console.log(snapShot.val());
			}else{
				console.log('No data found');
			}

		}
	}



	/*function fnDelete(){
		var path = 'users/' + uid;
		app_fireBase.databaseApi.delete(path, messageHandler);
	}*/
	function fnDelete(){
		var item_id = document.getElementById('items_id').value;
		var path = 'items/'+ item_id +'/';
		
		var data = {
			approvalStatus: 2
		}
		app_fireBase.databaseApi.update(path, data, messageHandler);
		alert('The submission was declined successfully!');
   		reload_page();
	}

	function fnUpdate(){
		var item_id = document.getElementById('items_id').value;
		var path = 'items/'+ item_id +'/';
		
		var data = {
			approvalStatus: 1
		}
		app_fireBase.databaseApi.update(path, data, messageHandler);
		alert('The submission was approved successfully!');
   		reload_page();
	}



	var user = firebase.auth().currentUser;
  	var tblUsers = document.getElementById('tbl_items_list');
	var databaseRef = firebase.database().ref('ClaimedItems/');
	
  	var rowIndex = 1;
  
  	databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   	var childKey = childSnapshot.key;
   	var childData = childSnapshot.val();
   
   	var row = tblUsers.insertRow(rowIndex);
   	var cellId = row.insertCell(0);
   	var cellName = row.insertCell(1);
   	var cellDescription = row.insertCell(2);
    var cellStatus = row.insertCell(3);
    var cellPoster = row.insertCell(4);
    var cellLocationDescription = row.insertCell(5);
    var cellDateSubmitted = row.insertCell(6);
   	cellId.appendChild(document.createTextNode(childKey));
    cellName.appendChild(document.createTextNode(childData.itemName));
    cellDescription.appendChild(document.createTextNode(childData.description));
   	cellStatus.appendChild(document.createTextNode(childData.status));
    cellPoster.appendChild(document.createTextNode(childData.poster));
    cellLocationDescription.appendChild(document.createTextNode(childData.locationDescription));
    cellDateSubmitted.appendChild(document.createTextNode(childData.dateSubmitted));
	  rowIndex = rowIndex + 1;
	  
	  
    	});
 	 });


	mainApp.Create = fnCreate;
	mainApp.Read = fnRead;
	mainApp.Update= fnUpdate;
	mainApp.Delete = fnDelete;

	mainApp.logOut = logOut;


})()