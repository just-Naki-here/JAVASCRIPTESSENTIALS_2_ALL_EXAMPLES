class ExtendedUser extends User{
    constructor({name, surname, email, role}) {
        super({name, surname, email, role});
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    set fullName(fullName) {
        let names = fullName||''.split(' ') ;
        if(names[0] && names[1]) {
            this.name = names[0];
            this.surname = names[1];
        }
    }

    static match(teacher, student, course) {
        let matched = [];
        for(let scourse of student.courses) {
            for(let tcourse of teacher.courses) {
                if(scourse.course === tcourse.course && scourse.level <= tcourse.level) {
                    matched.push(scourse);
                }
            }
        }
        if(course) {
            for(let mcourse of matched) {
                if(mcourse.course === course) {
                    return mcourse;
                }
            }
            return null;
        } else
            return matched;
    }

}