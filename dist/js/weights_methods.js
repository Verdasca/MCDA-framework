/* Variables */ 
var criteria_area, ranking_area, importance_area, whiteCard_area, weights_area, report_area;
var whiteCardInput = false;
var totalWhiteCards = 0;
var updateWhiteC = false; //Needed to update the white card section or not
var updateAux = false; //Update the data from auxiliar table
//var weightsDone = false; //First time calculating the weigths
var valuesChanged = false;	//Something changed after calculating the weigths

/** Onload function **/
function showMainPage() {
	document.getElementById('rankingSection').style.display = 'none';
	document.getElementById('importanceSection').style.display = 'none';
	document.getElementById('whiteCardSection').style.display = 'none';
	document.getElementById('weightsSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteriaSection').style.display = 'block';
	document.getElementById('criteria').style.backgroundColor = "#eee";
	criteria_area = true;
	ranking_area = importance_area = whiteCard_area = weights_area = report_area = false;
}

/** Change tab function **/
function showCriteria() {
	document.getElementById('rankingSection').style.display = 'none';
	document.getElementById('importanceSection').style.display = 'none';
	document.getElementById('whiteCardSection').style.display = 'none';
	document.getElementById('weightsSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteriaSection').style.display = 'block';
	document.getElementById('criteria').style.backgroundColor = "#eee";
	criteria_area = true;
	ranking_area = importance_area = whiteCard_area = weights_area = report_area = false;
    document.getElementById("ranking").style.backgroundColor = "white";
    document.getElementById("importance").style.backgroundColor = "white";
    document.getElementById("whiteCard").style.backgroundColor = "white";
    document.getElementById("weights").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showRanking() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('rankingSection').style.display = 'block';
	document.getElementById('importanceSection').style.display = 'none';
	document.getElementById('whiteCardSection').style.display = 'none';
	document.getElementById('weightsSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteria').style.backgroundColor = "white";
	ranking_area = true;
	criteria_area = importance_area = whiteCard_area = weights_area = report_area = false;
	document.getElementById("criteria").style.backgroundColor = "white";
    document.getElementById("importance").style.backgroundColor = "white";
    document.getElementById("whiteCard").style.backgroundColor = "white";
    document.getElementById("weights").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
    updateWhiteC = true;
    updateAux = true;
}

function showImportance() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('rankingSection').style.display = 'none';
	document.getElementById('importanceSection').style.display = 'block';
	document.getElementById('whiteCardSection').style.display = 'none';
	document.getElementById('weightsSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteria').style.backgroundColor = "white";
	importance_area = true;
	ranking_area = criteria_area = whiteCard_area = weights_area = report_area = false;
	document.getElementById("criteria").style.backgroundColor = "white";
    document.getElementById("ranking").style.backgroundColor = "white";
    document.getElementById("whiteCard").style.backgroundColor = "white";
    document.getElementById("weights").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showWhiteCard() {
  	document.getElementById('criteriaSection').style.display = 'none';
	document.getElementById('rankingSection').style.display = 'none';
	document.getElementById('importanceSection').style.display = 'none'; 
	document.getElementById('whiteCardSection').style.display = 'block';
	document.getElementById('weightsSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteria').style.backgroundColor = "white";
	whiteCard_area = true;
	ranking_area = importance_area = criteria_area = weights_area = report_area = false;
	document.getElementById("criteria").style.backgroundColor = "white";
    document.getElementById("ranking").style.backgroundColor = "white";
    document.getElementById("importance").style.backgroundColor = "white";
    document.getElementById("weights").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showWeights() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('rankingSection').style.display = 'none';
	document.getElementById('importanceSection').style.display = 'none'; 
	document.getElementById('whiteCardSection').style.display = 'none';
	document.getElementById('weightsSection').style.display = 'block';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteria').style.backgroundColor = "white";
	weights_area = true;
	ranking_area = importance_area = whiteCard_area = criteria_area = report_area = false;
	document.getElementById("criteria").style.backgroundColor = "white";
    document.getElementById("ranking").style.backgroundColor = "white";
    document.getElementById("importance").style.backgroundColor = "white";
    document.getElementById("whiteCard").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showReport() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('rankingSection').style.display = 'none';
	document.getElementById('importanceSection').style.display = 'none';
	document.getElementById('whiteCardSection').style.display = 'none';
	document.getElementById('weightsSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'block';
	document.getElementById('criteria').style.backgroundColor = "white";
	report_area = true;
	ranking_area = importance_area = whiteCard_area = weights_area = criteria_area = false;
	document.getElementById("criteria").style.backgroundColor = "white";
    document.getElementById("ranking").style.backgroundColor = "white";
    document.getElementById("importance").style.backgroundColor = "white";
    document.getElementById("whiteCard").style.backgroundColor = "white";
    document.getElementById("weights").style.backgroundColor = "white";
}

/* Functions to active or not the sections */
function ChangeBackgroundColor(name){
	var section_name = name;
	
	switch (section_name) {
    case "criteria":
        document.getElementById("criteria").style.backgroundColor = "#eee";
        break;
    case "ranking":
        document.getElementById("ranking").style.backgroundColor = "#eee";
        break;
    case "importance":
        document.getElementById("importance").style.backgroundColor = "#eee";
        break;
    case "whiteCard":
        document.getElementById("whiteCard").style.backgroundColor = "#eee";
        break;
    case "weights":
        document.getElementById("weights").style.backgroundColor = "#eee";
        break;
    case "report":
        document.getElementById("report").style.backgroundColor = "#eee";
        break;
	}
}

function RestoreBackgroundColor(name){
	var section_name = name;
	
	switch (section_name) {
    case "criteria":
		if(criteria_area){
			// do nothing
		}else{
			document.getElementById("criteria").style.backgroundColor = "white";
		}
        break;
    case "ranking":
        if(ranking_area){
			// do nothing
		}else{
			document.getElementById("ranking").style.backgroundColor = "white";
		}
		break;
    case "importance":
        if(importance_area){
			// do nothing
		}else{
			document.getElementById("importance").style.backgroundColor = "white";
		}
		break;
    case "whiteCard":
        if(whiteCard_area){
			// do nothing
		}else{
			document.getElementById("whiteCard").style.backgroundColor = "white";
		}
		break;
    case "weights":
        if(weights_area){
			// do nothing
		}else{
			document.getElementById("weights").style.backgroundColor = "white";
		}
		break;
    case "report":
        if(report_area){
			// do nothing
		}else{
			document.getElementById("report").style.backgroundColor = "white";
		}
		break;
	}
}


/** Criteria and Ranking functions **/
//Table functions
//Add function
function Add(){
    $("#tblData tbody").append(
      "<tr>"+
      "<td><input type='text' maxlength='20'/></td>"+
      "<td><input type='text' maxlength='40'/></td>"+
      "<td><img src='../../images/disk.png' class='btnSave' width='30' height='30'><img src='../../images/delete.png' class='btnDelete'width='30' height='30'/></td>"+
      "</tr>");
	  
      $(".btnSave").bind("click", Save);
      $(".btnDelete").bind("click", Delete);
}; 
    
//Save function
function Save(){
    var par = $(this).parent().parent(); //tr
    var tdName = par.children("td:nth-child(1)");
    var tdAdicionalInfo = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");
    
	//Save values for the ranking table
	var valName = tdName.children("input[type=text]").val();
	var valInfo = tdAdicionalInfo.children("input[type=text]").val();
	
	if(valName == ""){
		document.getElementById("error").style.display = 'block';	
	}else{
		tdName.html(tdName.children("input[type=text]").val());
		tdAdicionalInfo.html(tdAdicionalInfo.children("input[type=text]").val());
		tdButtons.html("<img src='../../images/delete.png' class='btnDelete' width='30' height='30'/><img src='../../images/pencil.png' class='btnEdit' width='30' height='30'/>");
	
		//Add values to the ranking area
		var index = par[0].rowIndex;
		//var par2 = document.getElementById("tblData2").insertRow(index); //tr
		//Insert on tbody of tblData2
		var par2 = document.getElementById("tblData2").getElementsByTagName('tbody')[0];
		var newRow  = par2.insertRow(par2.rows.length);
		newRow.insertCell(0).innerHTML = '<input id=rank'+index+' type=number value='+index+' min=1 max=""></input>';
		newRow.insertCell(1).innerHTML = valName;
		newRow.insertCell(2).innerHTML = valInfo;
		
		$(".btnEdit").bind("click", Edit);
		$(".btnDelete").bind("click", Delete);
		
		document.getElementById("error").style.display = 'none';	
	}
	valuesChanged = true;
    updateWhiteC = true;
    updateAux = true;
};
    
    //Edit function
function Edit(){
	var par = $(this).parent().parent(); //tr
    var tdName = par.children("td:nth-child(1)");
    var tdAdicionalInfo = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");
      
    tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
    tdAdicionalInfo.html("<input type='text' id='txtAdicionalInfo' value='"+tdAdicionalInfo.html()+"'/>");
    tdButtons.html("<img src='../../images/disk.png' class='btnSave' width='30' height='30'/>");
      
    $(".btnSave").bind("click", Save);
    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
};
    
//Delete function
function Delete(){
    var par = $(this).parent().parent(); //tr
	var index = par[0].rowIndex;
	var par2 = document.getElementById("tblData2").rows[index]; //tr
	par2.remove();
	par.remove();
	valuesChanged= true;
    updateWhiteC = true;
    updateAux = true;
};

/** White card functions **/
//Function to get the data from ranking section to the white card section
function copyRankingTable(){
    if(updateWhiteC){
        totalWhiteCards = 0;
        var source = document.getElementById('tblData2');
        var destination = document.getElementById('tblData3');
        var copy = source.cloneNode(true);
        copy.setAttribute('id', 'tblData3');
        destination.parentNode.replaceChild(copy, destination);	
        
        var table = document.getElementById('tblData3');
        var nRows = table.rows.length;
        for (var i=1; i<nRows; i++) {
            //var c = document.getElementById('tblData2').rows[i].cells[0].value;
            var c = $("#tblData2 tr").eq(i).find('td').eq(0).find('input').eq(0);
            var val = c.val();
            table.rows[i].cells[0].innerHTML = val;
        }    
        updateWhiteC = false;  
        
        //Sort table according to rank
        SortTable();
        //Merge criteria with the same ranking
        mergeSameRanks();
      
    }else{
        //Do nothing, no need for update
    }
}

/* Add white card input appears */
function addWhiteCard(){
	if(whiteCardInput){
		document.getElementById("addCard").style.display = 'none';
		whiteCardInput=false;
	}
	else{
		document.getElementById("addCard").style.display = 'block';
		whiteCardInput=true;
	}
}

//Add white card function
function addCard(){
	var table = document.getElementById("tblData3");
	var i = document.getElementById("betweenRank2").value;
	var j = document.getElementById("betweenRank1").value;
	var jj = parseInt(j) + 1;
	var jjj = parseInt(j) - 1;
	var row;
	if(jj == i || jjj == i){
		if(j < i){
			row = table.insertRow(i);
		}else{
			row = table.insertRow(j);
		}
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = "";
		cell2.innerHTML = "White Card";
		cell3.innerHTML = "<button id='btnRemoveWhiteCard' onclick='removeWhiteCard(this)'>Remove</button>";
		document.getElementById("error2").style.display = 'none';
		totalWhiteCards = totalWhiteCards + 1;
	}else{
		document.getElementById("error2").style.display = 'block';	
	}
	valuesChanged= true;
}

//Delete white card function
function removeWhiteCard(o){
	var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
	valuesChanged= true;
	totalWhiteCards = totalWhiteCards - 1;
}

//Function to sort the table, according to rank, from white card section
function SortTable(){
    var tbl = document.getElementById("tblData3").tBodies[0];
    var store = [];
    for(var i=0, len=tbl.rows.length; i<len; i++){
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[0].textContent || row.cells[0].innerText);
        if(!isNaN(sortnr)) store.push([sortnr, row]);
    }
    store.sort(function(x,y){
        return x[0] - y[0];
    });
    for(var i=0, len=store.length; i<len; i++){
        tbl.appendChild(store[i][1]);
    }
    store = null;
}

//Function to merge criteria with the same rank
function mergeSameRanks(){
    var tbl = document.getElementById("tblData3").tBodies[0];    
    var len = tbl.rows.length - 1;
	for(var i=0; i<len; i++){
        var row = tbl.rows[i]; 
        var j = i + 1;
        var row2 = tbl.rows[j];
        //If they have the same rank, merge them and delete 1 row
        if(row.cells[0].innerHTML === row2.cells[0].innerHTML){
            row.cells[1].innerHTML += ', ' + row2.cells[1].innerHTML;
            tbl.deleteRow(j);   
            len = tbl.rows.length - 1; 
            i--;
        }
    }
}

/* Calculation of weights functions */

//Get the rank value of row i
function getRank(i){
    var table4 = document.getElementById("tblData3").rows[i];
    var rank = table4.cells[0].innerHTML;
    return rank;
}

//Get the name value of row i
function getName(i){
    var table4 = document.getElementById("tblData3").rows[i];
    var name = table4.cells[1].innerHTML;
    return "{ " + name + " }";
}

//See if it has white cards
function hasWhiteCard(i){   
    //If it's the last row, don't need to see if it has a white card
    if(i == document.getElementById("tblData3").rows.length - 1){
        return 0;
    }else{
        //See if the next row is a white card
        var k = i + 1;
        var table4 = document.getElementById("tblData3").rows[k];
        var name = table4.cells[1].innerHTML;
        if(name == "White Card"){
            return 1;   //If it's a white card add 1
        }else{
            return 0;   //If not add 0
        }
    }
}

//Sum all Er
var totalEr = 0; //Total of Er
function getTotalEr(){
    var table = document.getElementById("tblData4").getElementsByTagName('tbody')[0];
	var len = table.rows.length - 1;
	for(var i=1; i<len-1; i++){
        var row = table.rows[i];
        var name = row.cells[1].innerHTML;
        var er = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[i].cells[3].innerHTML;
        var val = Number(er);
        if(name == "{ White Card }") { 
            //do nothing - ignore the white card rows
        }else{
            totalEr = totalEr + val;          
        }     
    }
    return totalEr;
}

//Calculate the required e0 + e1 + ... + er-1 for K(r)
function getE(i){
    var total = 0;
    var table = document.getElementById("tblData4").getElementsByTagName('tbody')[0];
	//var len = table.rows.length - 1;
    //var j = i;
	for(var k=1; k<i; k++){
        var row = table.rows[k];
        var name = row.cells[1].innerHTML;
        var er = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[k].cells[3].innerHTML;
        var val = Number(er);
        if(name == "{ White Card }") { 
            //Do nothing - ignore the white card rows
        }else{
            total = total + val;          
        }     
    }
    
    return total;
}

var totalWeights = 0.0;
//Calculate non-normalized weight
function calculateKr(i){
    var z = document.getElementById("ratioZ").value - 1;
    var total = totalEr;
    
    var u = z/total;
    
    var allE = getE(i);
    
    var rest = u.toFixed(6) * allE;
    var final = 1.0 + rest;
    
    var whiteCard = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[i].cells[1].innerHTML;
    if(whiteCard == "{ White Card }") { 
        //Do nothing - ignore the white card rows
    }else{
        totalWeights = totalWeights + Number(final.toFixed(2));          
    }  
    //Put max. 2 decimals   
    return final.toFixed(2);
}

var allTotals = 0.0;
//Calculate total
function calculateTotal(i){
    var w = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[i].cells[4].innerHTML;
    var weight = Number(w);
    var name = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[i].cells[1].innerHTML;
    //var criteria = name.split(',');
    var numCriteria = name.split(',').length;
    var final = weight * numCriteria;
    if(name == "{ White Card }") { 
        //Do nothing - ignore the white card rows
    }else{
        allTotals = allTotals + Number(final.toFixed(2));          
    }  
    //Put max. 2 decimals   
    return final.toFixed(2);
}

var cardDeleted = false;
//Function to calculate the non-normalized weigths
function calculateWeights(){
	//Eliminates previous data from the table
    $("#tblData4 tbody tr").remove();
    //reset global totals
    totalEr = 0; 
    totalWeights = 0.0; 
    allTotals = 0.0;   
    
    var table = document.getElementById("tblData4").getElementsByTagName('tbody')[0];
	var table2 = document.getElementById("tblData3");
    var tbl = document.getElementById("tblData2");
	var len = table2.rows.length;
        
	for(var i=0; i<=len; i++){
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i);
			
		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
            
        if(i==len){ //Insert the last row (for total, sum, etc...)
            cell1.innerHTML = "Sum";
            cell2.innerHTML = tbl.rows.length - 1;
            cell3.innerHTML = totalWhiteCards;
            cell4.innerHTML = getTotalEr();	
            cell5.innerHTML = "";
            cell6.innerHTML = "";	
        }
        else{ //Insert the criteria weights
            // Add some text to the new cells:
            cell1.innerHTML = getRank(i);
            cell2.innerHTML = getName(i);
            if(i==len-1){
                cell3.innerHTML = "...";
                cell4.innerHTML = "...";    
            }else{
                cell3.innerHTML = hasWhiteCard(i);
                cell4.innerHTML = hasWhiteCard(i) + 1;    
            }
            cell5.innerHTML = "";
            cell6.innerHTML = "";	 
        }	
    }
        
    //Add the calculated weights to each row
    for(var i=1; i<len-1; i++){
        table.rows[i].cells[4].innerHTML = calculateKr(i);
        table.rows[i].cells[5].innerHTML = calculateTotal(i);
    }
    
    table.rows[len-1].cells[4].innerHTML = calculateKr(len-1);
    table.rows[len-1].cells[5].innerHTML = calculateTotal(len-1);  
    table.rows[len].cells[4].innerHTML = totalWeights; //Add total sum of weights 
    table.rows[len].cells[5].innerHTML = allTotals;  //Add total sum of totals
             
    table.deleteRow(0); //delete the first row (contains the header of the table)

    //Delete the white card rows, because they don't need to have a single row for the weight table
    var table3 = document.getElementById("tblData4").tBodies[0];
    var rowCount = table3.rows.length;
    for(var i=0; i<rowCount; i++) {
        //Check if a white card was already deleted
        if(cardDeleted){
            i--;
            cardDeleted = false;
        }
            
        //See if we already reach the last row of the table
        if(i == document.getElementById("tblData4").tBodies[0].rows.length - 1){
            break;
        }
                
        var row3 = table.rows[i];
        var name = row3.cells[1].innerHTML;
        //If it's a white card, delete row
        if(name == "{ White Card }") { 
            table3.deleteRow(i);
            cardDeleted = true;
        }
    }
    
    //normalizedWeights();
}

//Function to create a auxiliar table to help calculate the normalized weights
function createAuxiliarTable(){
    if(updateAux){
        var source = document.getElementById('tblData2');
        var destination = document.getElementById('tblAux');
        var copy = source.cloneNode(true);
        copy.setAttribute('id', 'tblAux');
        destination.parentNode.replaceChild(copy, destination);	
        
        var table = document.getElementById('tblAux');
        var nRows = table.rows.length;
        for (var i=1; i<nRows; i++) {
            var c = $("#tblData2 tr").eq(i).find('td').eq(0).find('input').eq(0);
            var val = c.val();
            table.rows[i].cells[0].innerHTML = val;
        }    
        updateAux = false;  
        
        //Sort table according to rank
        sortAuxiliarTable();
      
    }else{
        //Do nothing, no need for update
    }
}

//Function to sort the table, according to rank, from ranking section
function sortAuxiliarTable(){
    var tbl = document.getElementById("tblAux").tBodies[0];
    var store = [];
    for(var i=0, len=tbl.rows.length; i<len; i++){
        var row = tbl.rows[i];
        var sortnr = parseFloat(row.cells[0].textContent || row.cells[0].innerText);
        if(!isNaN(sortnr)) store.push([sortnr, row]);
    }
    store.sort(function(x,y){
        return x[0] - y[0];
    });
    for(var i=0, len=store.length; i<len; i++){
        tbl.appendChild(store[i][1]);
    }
    store = null;
}

//Get the criteria rank of row i
function getCriteriaRank(i){
    var table = document.getElementById("tblAux").rows[i];
    var rank = table.cells[0].innerHTML;
    return rank;
}

//Get the criteria name value of row i
function getCriteriaName(i){
    var table = document.getElementById("tblAux").rows[i];
    var name = table.cells[1].innerHTML;
    return name;
}

//Calculate normalized weights ki*
function calculateKi(i,k){
    var table = document.getElementById("tblAux").rows[i];
    var rank = table.cells[0].innerHTML;
    var tbl = document.getElementById("tblData4").getElementsByTagName('tbody')[0];
    var len = tbl.rows.length;
    //Get the non-normalized weight according to teh rank
    for(var j=0; j<len; j++){
        var rank2 = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[j].cells[0].innerHTML; 
        if(rank2 == rank){
            var weight = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[j].cells[4].innerHTML;
        }
        if((j+1) == len){
            var K = document.getElementById("tblData4").getElementsByTagName('tbody')[0].rows[j].cells[5].innerHTML;   
        } 
    }      
    var mul = 100 * weight;
    var final = mul / K;
    
    if(k == 0){
        return final.toFixed(9);    
    }else{
        return final.toFixed(1);    
    }
}

//Funtion to calculate ratio di
function calculateRatio(i){
    //Get W value and necessary weight values
    var e = document.getElementById("ratioW");
    var w = e.options[e.selectedIndex].value; 
    var k = document.getElementById("tblData5").getElementsByTagName('tbody')[0].rows[i].cells[2].innerHTML; 
    var ki = document.getElementById("tblData5").getElementsByTagName('tbody')[0].rows[i].cells[3].innerHTML; 
    var invert = 1;
    
    if(w == 0){
        //Do nothing, stays 1
    }else if(w == 1){
        invert = 10;     
    }else{
        invert = 100;    
    }   
    
    var aux = (k-ki).toFixed(9);
    var aux2 = 1/invert;
    var aux3 = (aux2-aux).toFixed(9);
    var final = (aux3/k).toFixed(9);
    
    return final;
}

//Funtion to calculate ratio /di
function calculateRatioi(i){
    var k = document.getElementById("tblData5").getElementsByTagName('tbody')[0].rows[i].cells[2].innerHTML; 
    var ki = document.getElementById("tblData5").getElementsByTagName('tbody')[0].rows[i].cells[3].innerHTML; 
    
    var aux = (k-ki).toFixed(9);
    var final = (aux/k).toFixed(9);
    
    return final; 
}

var totalKi = 0.0; //Total sum of norm. weights ki*
var ttlKi = 0.0;    //Total sum of norm. weights ki''
var totalD = 0.0;   //Total sum of ratio di
var totalDi = 0.0;  //Total sum of ratio /di
//Function to calculate the normalized weigths
function normalizedWeights(){
    //Eliminates previous data from the table
    $("#tblData5 tbody tr").remove();
    totalKi, ttlKi, totalD, totalDi = 0.0;
    
    var table = document.getElementById("tblData5").getElementsByTagName('tbody')[0];
    var tbl = document.getElementById("tblData2");
	var table2 = document.getElementById("tblAux");
	var len = table2.rows.length;
    
    for(var i=0; i<=len; i++){
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i);
			
		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
            
        if(i==len){ //Insert the last row (for total, sum, etc...)
            cell1.innerHTML = "Sum";
            cell2.innerHTML = tbl.rows.length - 1;
            cell3.innerHTML = "";
            cell4.innerHTML = "";	
            cell5.innerHTML = "";
            cell6.innerHTML = "";
            cell7.innerHTML = "";	
        }
        else{ //Insert the criteria weights
            // Add some text to the new cells:
            cell1.innerHTML = getCriteriaRank(i);
            cell2.innerHTML = getCriteriaName(i);
            cell3.innerHTML = calculateKi(i,0);
            cell4.innerHTML = calculateKi(i,1);	
            cell5.innerHTML = "";
            cell6.innerHTML = "";
            cell7.innerHTML = calculateKi(i,1);	 
        }	
    }
    
    //Get the total sum of Ki and ki'' and calculate the ratios di and /di
    for(var i=1; i<len; i++){
        totalKi = totalKi + Number(table.rows[i].cells[2].innerHTML);
        ttlKi = ttlKi + Number(table.rows[i].cells[3].innerHTML);
        table.rows[i].cells[4].innerHTML = calculateRatio(i);
        table.rows[i].cells[5].innerHTML = calculateRatioi(i);
    }
    
    //Get the total sum of ratios di and /di
    for(var i=1; i<len; i++){
        totalD = totalD + Number(table.rows[i].cells[4].innerHTML);
        totalDi = totalDi + Number(table.rows[i].cells[5].innerHTML);
    }
    
    table.rows[len].cells[2].innerHTML = totalKi.toFixed(2);
    table.rows[len].cells[3].innerHTML = ttlKi;
    table.rows[len].cells[4].innerHTML = totalD.toFixed(9);
    table.rows[len].cells[5].innerHTML = totalDi.toFixed(9);
    table.rows[len].cells[6].innerHTML = ttlKi;
    
    table.deleteRow(0); //delete the first row (contains the header of the table)
}

/* Report section functions */

//Function to export the results into a pdf
function exportPDF(){
    document.getElementById("tblData6").style.display = 'block';  
    document.getElementById("tblData7").style.display = 'block';    
    var pdf = new jsPDF('l', 'pt', 'a4')

    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    , source = $('#reportSection')[0]

    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    , specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function(element, renderer){
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    }

    margins = {
        top: 20,
        bottom: 20,
        left: 40,
        width: 600
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , margins.left // x coord
        , margins.top // y coord
        , {
            'width': margins.width // max width of content on PDF
            , 'elementHandlers': specialElementHandlers
        },
        function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
            pdf.save('Report.pdf');
        },
        margins
    )
    
    document.getElementById("tblData6").style.display = 'none';  
    document.getElementById("tblData7").style.display = 'none';    
}

//Auxiliar function to export the results in pdf
function copyWeightsTables(){
    $("#tblData6 tbody tr").remove();
    var source = document.getElementById('tblData4').getElementsByTagName('tbody')[0];
    var destination = document.getElementById('tblData6').getElementsByTagName('tbody')[0];     
    var copy = source.cloneNode(true);
    copy.setAttribute('id', 'tblData6');
    destination.parentNode.replaceChild(copy, destination); 
    
    $("#tblData7 tbody tr").remove();
    var source2 = document.getElementById('tblData5').getElementsByTagName('tbody')[0];
    var destination2 = document.getElementById('tblData7').getElementsByTagName('tbody')[0];     
    var copy2 = source2.cloneNode(true);
    copy2.setAttribute('id', 'tblData7');
    destination2.parentNode.replaceChild(copy2, destination2); 
}