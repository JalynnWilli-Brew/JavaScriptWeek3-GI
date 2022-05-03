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
        this.language=[language];
        this.busy=true;
    }

completeTask(){
    return this.busy = false;
}

acceptNewTask(){
    return this.busy = false;
}

offerNewTask() {
    if (this.busy) {
        console.log(`${this.name} can not accept more tasks right now`);
    }
    else {
        console.log(`${this.name} would like to take on a new responsibility`);
    }

}

learnLanguage(language){
    this.language.push(language);
    console.log(`${this.name} has finally learned a new language ${language}`);

}
//Very confused on the number 7, quite a few of us are stuck on this.
listLanguages(){
    console.log(`${this.name} knows these languages ${this.language.toString()}`);
}
    }


let programmer1 = new Programmer(person1.name, person1.age, person1.job, "CSS");
console.log(programmer1);

programmer1.learnLanguage("JavaScript");
programmer1.learnLanguage("HTML");
programmer1.listLanguages();