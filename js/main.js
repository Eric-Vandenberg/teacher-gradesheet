var target_div = document.getElementById('display_area');
var input_div = document.getElementById('input_div');
var running_grade_total = 0;
var running_grade_count = 0;
var yes = false;
var json = {"students": []};

function add_record() {
	var container = document.createElement('div');
	var student_name = document.createElement('span');
	var student_class = document.createElement('span');
	var student_grade = document.createElement('span');
	var check_box = document.createElement('input');

	check_box.type = "checkbox";
	check_box.name = "foo";
	check_box.checked = "";
	check_box.value = "";
	check_box.id = "check_box";


	student_name.textContent = document.getElementById('name_input').value;
	var student_class_value = document.getElementById('class_input').value;
	var student_grade_value = document.getElementById('grade_input').value;
	var average = document.getElementById('average_div');

	//adding the input text as text content 
	student_class.textContent = student_class_value;
	student_grade.textContent = student_grade_value;
	running_grade_total+=parseFloat(student_grade_value);

	//creating object to push into jsonArray
	var jsonObject = {};
	jsonObject.studentName = student_name.textContent;
	jsonObject.studentClass = student_class.textContent;
	jsonObject.studentGrade = student_grade.textContent;
	json.students[running_grade_count] = jsonObject;

	//index keeps track of number of grades || number of entries
	running_grade_count++;



	average.innerHTML = "Average: " + (running_grade_total/ running_grade_count).toFixed(2);


	container.style.background="transparent";
	student_name.style.fontsize = "20px";

	container.classList.add('cont');
	student_name.classList.add('namestyle');
	student_class.classList.add('classstyle');
	student_grade.classList.add('gradestyle');


	student_name.appendChild(check_box);
	container.appendChild(student_name).appendChild(student_class).appendChild(student_grade);
	target_div.appendChild(container);
	target_div.appendChild(average);


}




function toggle(source) {
	var checkboxes = document.getElementsByName('foo');
	for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
	}
}


function deleteRecord() {
	var checkedNames = $("span input:checked");
	checkedNames.parentsUntil("div#display_area").remove();
}















































