import { LightningElement , track , wire } from 'lwc';
import { createRecord , getRecord } from 'lightning/uiRecordApi';
const fieldArray = [ 'Contact.LastName' , 'Contact.Phone' , 'Contact.Email' ];

export default class CreateContact2 extends LightningElement {

    @track contactName;
    @track contactPhone;
    @track contactEmail;

    @track recordId;

    @wire(getRecord , { recordId:'$recordId' , fields:fieldArray }) contactRecord;

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
            this.recordId = response.id;
        }).catch(error => {
            console.log("Error in creating Contact : ", error.body.message);
        });
    }

    get retContactName {
        if(this.contactRecord.data) {
            return this.contactRecord.data.fields.LastName.value;
        }
        return undefined;
    }

    get retContactPhone {
        if(this.contactRecord.data) {
            return this.contactRecord.data.fields.Phone.value;
        }
        return undefined;
    }

    get retContactEmail {
        if(this.contactRecord.data) {
            return this.contactRecord.data.fields.Email.value;
        }
        return undefined;
    }

}