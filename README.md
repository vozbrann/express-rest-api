# Node.js Rest APIs with Express & MySQL

## Create database
Open MySQL Shell and enter:
```
\sql
```
Enter this line and provide a password for 'root@localhost':
```
\connect --mx root@localhost
```
Create a schema from sqlModel.sql file:
```
\source <Path to sqlModel.sql>
```

## Project setup
```
npm install
```
```
npm start
```

## API
### Lessons route
* GET http://localhost:3000/lessons/
* GET http://localhost:3000/lessons/1
* DELETE http://localhost:3000/lessons/
* DELETE http://localhost:3000/lessons/1
* POST http://localhost:3000/lessons/
```
{
	"lesson_title":"math1",
	"group_id_group": "1",
	"teacher_id_teacher": "8",
	"classroom_id_classroom": "102"
}
```
* PUT http://localhost:3000/lessons/4
```
{
    "lesson_title": "math1111",
    "group_id_group": 1,
    "teacher_id_teacher": 8,
    "classroom_id_classroom": 102
}
```

### Groups route
* GET http://localhost:3000/groups/
* GET http://localhost:3000/groups/1
* DELETE http://localhost:3000/groups/
* DELETE http://localhost:3000/groups/1
* POST http://localhost:3000/groups/
```
{
    "group_name": "6B"
}
```
* PUT http://localhost:3000/groups/4
```
{
    "group_name": "6A"
}
```

### Students route
* GET http://localhost:3000/students/
* GET http://localhost:3000/students/1
* DELETE http://localhost:3000/students/
* DELETE http://localhost:3000/students/1
* POST http://localhost:3000/students/
```
{
    "student_first_name": "name",
    "student_last_name": "last name",
    "group_id_group": 5
}
```
* PUT http://localhost:3000/students/4
```
{
    "student_first_name": "name",
    "student_last_name": "last name",
    "group_id_group": 5
}
```

### Teachers route
* GET http://localhost:3000/teachers/
* GET http://localhost:3000/teachers/1
* DELETE http://localhost:3000/teachers/
* DELETE http://localhost:3000/teachers/1
* POST http://localhost:3000/teachers/
```
{
    "teacher_first_name": "Roman",
    "teacher_last_name": "Vozbrannyi",
    "teacher_specialization": "math"
}
```
* PUT http://localhost:3000/teachers/4
```
{
    "teacher_first_name": "Roman",
    "teacher_last_name": "Vozbrannyi",
    "teacher_specialization": "math"
}
```

### Classrooms route
* GET http://localhost:3000/classrooms/
* GET http://localhost:3000/classrooms/1
* DELETE http://localhost:3000/classrooms/
* DELETE http://localhost:3000/classrooms/1
* POST http://localhost:3000/classrooms/
```
{
    "classroom_capacity": 30
}
```
* PUT http://localhost:3000/classrooms/4
```
{
    "classroom_capacity": 30
}
```