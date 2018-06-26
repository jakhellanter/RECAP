	


	var user = firebase.auth().currentUser;
  	var tblUsers = document.getElementById('tbl_items_list');
	var databaseRef = firebase.database().ref('items/').orderByChild("dateSubmitted");
	
  	var rowIndex = 1;
  
  	databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   	var childKey = childSnapshot.key;
   	var childData = childSnapshot.val();
   
   	var row = tblUsers.insertRow(rowIndex);
   	var cellId = row.insertCell(0);
   	var cellName = row.insertCell(1);
   	var cellStatus = row.insertCell(2);
	   var cellPoster = row.insertCell(3);
	   var cellDateSubmitted = row.insertCell(4);
   	cellId.appendChild(document.createTextNode(childKey));
   	cellName.appendChild(document.createTextNode(childData.itemName));
   	cellStatus.appendChild(document.createTextNode(childData.status));
	cellPoster.appendChild(document.createTextNode(childData.poster));
	cellDateSubmitted.appendChild(document.createTextNode(childData.dateSubmitted));
	  rowIndex = rowIndex + 1;
	  
	  
    	});
 	 });


