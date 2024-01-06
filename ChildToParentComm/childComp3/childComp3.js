import { LightningElement } from 'lwc';

export default class ChildComp2 extends LightningElement {

    handleChange(event) {
        const name = event.target.value;
        const newevent = new CustomEvent('mycustomevent',{detail:name, bubbles:true});
        this.dispatchEvent(newevent);
    }

}