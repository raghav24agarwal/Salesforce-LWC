import { LightningComponent } from 'lwc';

export default class EmployeeInfo extends LightningComponent { 

    @track name;
    @track age;
    @track salary;
    @track show = true;

    nameHandler(event) {
        this.name = event.target.value;
    }

    ageHandler(event) {
        this.age = event.target.value;
    }

    salaryHandler(event) {
        this.salary = event.target.value;
    }

    saveButtonHandler() {
        this.show = false;
    }

}