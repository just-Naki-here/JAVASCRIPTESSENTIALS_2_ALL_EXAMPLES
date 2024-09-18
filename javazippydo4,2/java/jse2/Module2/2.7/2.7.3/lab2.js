class ExtendedUser extends User{
    constructor({name, surname, email, role}) {
        super({name, surname, email, role});
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    set fullName(fullName) {
        let names = fullName.split(' ') ;
        if(names[0] && names[1]) {
            this.name = names[0];
            this.surname = names[1];
        }
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'});
    }
}

class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'});
    }
}