/* Variables */ 
var criteria_area, performance_area, categories_area, validation_area, report_area;

/** Onload function **/
function showMainPage() {
	document.getElementById('performanceSection').style.display = 'none';
	document.getElementById('categoriesSection').style.display = 'none';
	document.getElementById('validationSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteriaSection').style.display = 'block';
	document.getElementById('criteria').style.backgroundColor = "#eee";
	criteria_area = true;
	performance_area = categories_area = validation_area = report_area = false;
}

/** Change tab functions for each section **/
function showCriteria() {
	document.getElementById('performanceSection').style.display = 'none';
	document.getElementById('categoriesSection').style.display = 'none';
	document.getElementById('validationSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteriaSection').style.display = 'block';
	document.getElementById('criteria').style.backgroundColor = "#eee";
	criteria_area = true;
	performance_area = categories_area = validation_area = report_area = false;
    document.getElementById("performance").style.backgroundColor = "white";
    document.getElementById("categories").style.backgroundColor = "white";
    document.getElementById("validation").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showPerformance() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('performanceSection').style.display = 'block';
	document.getElementById('categoriesSection').style.display = 'none';
	document.getElementById('validationSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteria').style.backgroundColor = "white";
	performance_area = true;
	criteria_area = categories_area = validation_area = report_area = false;
	document.getElementById("categories").style.backgroundColor = "white";
    document.getElementById("validation").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showCategories() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('performanceSection').style.display = 'none';
	document.getElementById('categoriesSection').style.display = 'block';
	document.getElementById('validationSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteria').style.backgroundColor = "white";
	categories_area = true;
	criteria_area = performance_area = validation_area = report_area = false;
    document.getElementById("performance").style.backgroundColor = "white";
    document.getElementById("validation").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showValidation() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('performanceSection').style.display = 'none';
	document.getElementById('categoriesSection').style.display = 'none';
	document.getElementById('validationSection').style.display = 'block';
	document.getElementById('reportSection').style.display = 'none';
	document.getElementById('criteria').style.backgroundColor = "white";
	validation_area = true;
	criteria_area = performance_area = categories_area = report_area = false;
    document.getElementById("performance").style.backgroundColor = "white";
    document.getElementById("categories").style.backgroundColor = "white";
	document.getElementById("report").style.backgroundColor = "white";
}

function showReport() {
  	document.getElementById('criteriaSection').style.display = 'none';
 	document.getElementById('performanceSection').style.display = 'none';
	document.getElementById('categoriesSection').style.display = 'none';
	document.getElementById('validationSection').style.display = 'none';
	document.getElementById('reportSection').style.display = 'block';
	document.getElementById('criteria').style.backgroundColor = "white";
	report_area = true;
	criteria_area = performance_area = categories_area = validation_area = false;
	document.getElementById("performance").style.backgroundColor = "white";
    document.getElementById("categories").style.backgroundColor = "white";
	document.getElementById("validation").style.backgroundColor = "white";
}

/* Functions to active or not the sections */
function ChangeBackgroundColor(name){
	var section_name = name;
	
	switch (section_name) {
    case "criteria":
        document.getElementById("criteria").style.backgroundColor = "#eee";
        break;
    case "performance":
        document.getElementById("performance").style.backgroundColor = "#eee";
        break;
    case "categories":
        document.getElementById("categories").style.backgroundColor = "#eee";
        break;
    case "validation":
        document.getElementById("validation").style.backgroundColor = "#eee";
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
    case "performance":
        if(performance_area){
			// do nothing
		}else{
			document.getElementById("performance").style.backgroundColor = "white";
		}
		break;
    case "categories":
        if(categories_area){
			// do nothing
		}else{
			document.getElementById("categories").style.backgroundColor = "white";
		}
		break;
    case "validation":
        if(validation_area){
			// do nothing
		}else{
			document.getElementById("validation").style.backgroundColor = "white";
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

/** Criteria and actions section functions **/





/** Performance section functions **/


/** Categories and characteristic reference section functions **/


/** Validation section functions **/


/** Report section functions **/