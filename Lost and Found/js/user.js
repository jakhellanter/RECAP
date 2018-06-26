	



	var user = firebase.auth().currentUser;
  	var tblUsers = document.getElementById('tbl_users_list');
	var databaseRef = firebase.database().ref('users/');
  	var rowIndex = 1;
  
  	databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   	var childKey = childSnapshot.key;
   	var childData = childSnapshot.val();
   
   	var row = tblUsers.insertRow(rowIndex);
   	var cellName = row.insertCell(0);
   	var cellEmail = row.insertCell(1);
   	var cellDateJoined = row.insertCell(2);
   	cellName.appendChild(document.createTextNode(childData.name));
   	cellEmail.appendChild(document.createTextNode(childData.email));
   	cellDateJoined.appendChild(document.createTextNode(childData.datejoined));
	  rowIndex = rowIndex + 1;
	  
	  
    	
 	 });


})