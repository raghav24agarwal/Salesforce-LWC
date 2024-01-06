import { LightningElement , api } from 'lwc';

export default class LoadRecord2 extends LightningElement {

    //property needs to be defined with api decorator
    @api recordId;

}