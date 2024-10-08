class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    getStudentByName(name, surname) {
        let retVal;
        for(let student of this.students) {
            if(student.name === name && student.surname === surname) {
                retVal = student;
            }
        }
        return retVal;
    }

    getTeacherByName(name, surname) {
        let retVal;
        for(let teacher of this.teachers) {
            if(teacher.name === name && teacher.surname === surname) {
                retVal = teacher;
            }
        }
        return retVal;
    }

    getStudentsForTeacher(teacher) {
        let retVal = [];
        for(let student of this.students) {
            if(ExtendedUser.match(teacher, student).length) {
                retVal.push(student);
            }
        }
        return retVal;
    }

    getTeacherForStudent(student) {
        let retVal = [];
        for(let teacher of this.teachers) {
            if(ExtendedUser.match(teacher, student).length) {
                retVal.push(teacher);
            }
        }
        return retVal;
    }

    addStudent(name, surname, email) {
        this.students.push(new Student({name, surname, email}));
    }

    addTeacher(name, surname, email) {
        this.teachers.push(new Teacher({name, surname, email}));
    }
}