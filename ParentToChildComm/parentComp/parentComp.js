import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {

    //calling child component
    handleChangeEvent(event) {
        this.template.querySelector('c-child-comp').changeMessage(event.target.value);
    }

}