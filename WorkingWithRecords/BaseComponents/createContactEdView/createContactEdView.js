import { LightningElement , track } from 'lwc';

export default class CreateContactEdView extends LightningElement {

    //we can only set the default value of public property in child component
    @track recordId;


    createContact(event) {
        this.recordId = event.detail.id;
    }

}