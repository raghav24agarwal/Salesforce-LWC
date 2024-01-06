import { LightningElement , api } from 'lwc';

export default class EditRecord1 extends LightningElement {

    //property needs to be defined with api decorator
    @api recordId;

}