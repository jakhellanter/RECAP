var user = firebase.auth().currentUser;
  	var tblUsers = document.getElementById('tbl_users_list');
	var databaseRef = firebase.database().ref('items/');
  	var rowIndex = 1;
  
  	databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   	var childKey = childSnapshot.key;
   	var childData = childSnapshot.val();
   
   	var row = tblUsers.insertRow(rowIndex);
   	var cellName = row.insertCell(0);
   	var cellStatus = row.insertCell(1);
   	
   	cellName.appendChild(document.createTextNode(childData.name));
   	cellEmail.appendChild(document.createTextNode(childData.status));
   	
	  rowIndex = rowIndex + 1;
	  
	  
    	
 	 });


})