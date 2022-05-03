//Person Contructor
class person {
    //properties
    constructor(name, age, job) {
        this.name=name;
        this.age=age;
        this.job=job;
    }
    //method
    exercise(){
        console.log("I am learning javascript");
    }
    fetchJob(){
        console.log(`${this.name} job is ${this.job}`)
    }

}
let person1= new person("Jalynn", 23, "Apprentice")
person1.exercise();
person1.fetchJob();

//Programmer Constructor

class Programmer {
    //properties
    constructor(name, age, job, language){
        this.name=name;
        this.age=age;
        this.job=job;
        this.language=language;
        this.busy=true;
    }

completeTask(){
    return this.busy = false;
}

acceptNewTask(){
    return this.busy = false;
}

offerNewTask() {
    return (this.busy ? `${this.name} can accept new tasks right now` : `${this.name} can not accept new tasks right now`);

}
//Honestly, I do not know how to do this part. Quite a few of us kept trying to figure it out but can't
listLanguages(){
    return console.log(...this.language)
}

learnLanguage(lang){
    this.language.push(lang)
    return console.log()
}
    }


let programmer1 = new Programmer(person1.name, person1.age, person1.job, "CSS", "JavaScript", "HTML");
console.log(programmer1);
console.log(programmer1.listLanguages());