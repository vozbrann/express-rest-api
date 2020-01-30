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

###DB EER Diagram
![EER Diagram](https://raw.githubusercontent.com/vozbrann/express-rest-api/master/src/mysqlModel/eerDiagram.png)

## Project setup
```
npm install
```
```
npm start
```

## API
### Lessons route
* GET all lessons http://localhost:3000/lessons/
* GET one lesson http://localhost:3000/lessons/1
* DELETE all lessons http://localhost:3000/lessons/
* DELETE one lesson http://localhost:3000/lessons/1
* POST (add) lesson http://localhost:3000/lessons/
```
{
	"lesson_title":"math1",
	"group_id_group": "1",
	"teacher_id_teacher": "8",
	"classroom_id_classroom": "102"
}
```
* PUT (edit) lesson http://localhost:3000/lessons/4
```
{
    "lesson_title": "math1111",
    "group_id_group": 1,
    "teacher_id_teacher": 8,
    "classroom_id_classroom": 102
}
```

### Groups route
* GET all groups http://localhost:3000/groups/
* GET one group http://localhost:3000/groups/1
* DELETE all groups http://localhost:3000/groups/
* DELETE one group http://localhost:3000/groups/1
* POST (add) groups http://localhost:3000/groups/
```
{
    "group_name": "6B"
}
```
* PUT (edit) group http://localhost:3000/groups/4
```
{
    "group_name": "6A"
}
```

### Students route
* GET all students http://localhost:3000/students/
* GET one student http://localhost:3000/students/1
* DELETE all students http://localhost:3000/students/
* DELETE one student http://localhost:3000/students/1
* POST (add) student http://localhost:3000/students/
```
{
    "student_first_name": "name",
    "student_last_name": "last name",
    "group_id_group": 5
}
```
* PUT (edit) student http://localhost:3000/students/4
```
{
    "student_first_name": "name",
    "student_last_name": "last name",
    "group_id_group": 5
}
```

### Teachers route
* GET all teachers http://localhost:3000/teachers/
* GET one teachers http://localhost:3000/teachers/1
* DELETE all teachers http://localhost:3000/teachers/
* DELETE one teacher http://localhost:3000/teachers/1
* POST (add) teacher http://localhost:3000/teachers/
```
{
    "teacher_first_name": "Roman",
    "teacher_last_name": "Vozbrannyi",
    "teacher_specialization": "math"
}
```
* PUT (edit) teacher http://localhost:3000/teachers/4
```
{
    "teacher_first_name": "Roman",
    "teacher_last_name": "Vozbrannyi",
    "teacher_specialization": "math"
}
```

### Classrooms route
* GET all classrooms http://localhost:3000/classrooms/
* GET one classroom http://localhost:3000/classrooms/1
* DELETE all classrooms http://localhost:3000/classrooms/
* DELETE one classroom http://localhost:3000/classrooms/1
* POST (add) classroom http://localhost:3000/classrooms/
```
{
    "classroom_capacity": 30
}
```
* PUT (edit) classroom http://localhost:3000/classrooms/4
```
{
    "classroom_capacity": 30
}
```