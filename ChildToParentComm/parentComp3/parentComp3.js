import { LightningElement , track } from 'lwc';

export default class ParentComp2 extends LightningElement {

    @track msg;

    //doing it programmatically using JS addEventListener method
    constructor() {
        super();
        this.template.addEventListener('mycustomevent',this.handleCustomEvent.bind(this));
    }

    handleCustomEvent(event) {
        this.msg = event.detail;
    }

}