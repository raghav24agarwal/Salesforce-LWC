import { LightningElement , track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateContact extends LightningElement {

    @track contactName;
    @track contactPhone;
    @track contactEmail;

    contactNameHandler(event) {
        this.contactName = event.target.value;
    }

    contactPhoneHandler(event) {
        this.contactPhone = event.target.value;
    }

    contactEmailHandler(event) {
        this.contactEmail = event.target.value;
    }

    createContact() {
        //LastName, Phone and Email are api names of contact object
        const fields = { 'LastName':this.contactName , 'Phone':this.contactPhone , 'Email':this.contactEmail };
        const recordInput = { apiName:'Contact' , fields };
        createRecord(recordInput).then(response => {
            console.log("Contact has been created succesfully : " , response.id);
        }).catch(error => {
            console.log("Error in creating Contact : ", error.body.message);
        });
    }

}