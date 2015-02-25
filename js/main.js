var target_div = document.getElementById('display_area');
var running_grade_total = 0;
var running_grade_count = 0;
var yes = false;

function add_record() {
	var container = document.createElement('div');
	var student_name = document.createElement('span');
	var student_class = document.createElement('span');
	var student_grade = document.createElement('span');

	student_name.textContent = document.getElementById('name_input').value;
	var student_class_value = document.getElementById('class_input').value;
	var student_grade_value = document.getElementById('grade_input').value;
	var average = document.getElementById('average_div');

	student_class.textContent = student_class_value;
	
	student_grade.textContent = student_grade_value;
	running_grade_total+=parseInt(student_grade_value);
	running_grade_count++;

	average.innerHTML = running_grade_total/ running_grade_count;


	container.style.background="rgba(150,150,150, .8)";

	container.style.width="500px";
	student_name.style.margin="20%";
	student_class.style.margin="19%";
	student_grade.style.margin="22%";



	container.appendChild(student_name).appendChild(student_class).appendChild(student_grade);
	target_div.appendChild(average);
	target_div.appendChild(container);

	for()

}

