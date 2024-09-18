function sendEmail(from, to, message) {}

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.messages = [];
        this.courses = [];
    }

    addCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                return;
            }
        }
        this.courses.push({course, level});
    }

    removeCourse(course) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses.splice(i,1);
                break;
            }
        }
    }

    editCourse(course, level) {
        for(let i=0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            }
        }
    }

    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        sendEmail(from.email, this.email, message);
    }

    showMessagesHistory() {
        for(let message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`)
        }
    }
};