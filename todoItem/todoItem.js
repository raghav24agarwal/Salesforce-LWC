import { LightningElement , api } from 'lwc';

export default class todoItem extends LightningElement {

    //we can only set the default value of public property in child component
    @api itemName = 'New Item';

}