import { LightningElement , track , wire} from 'lwc';
import { registerListener , unregisterAllListeners } from 'c/pubsub';
import { currentPageReference } from 'lightning/navigation';

export default class CanvasSubscriber extends LightningElement {

    @track color;
    @wire(currentPageReference) pageRef;

    connectedCallback() {
        registerListener("changedColorEvent" , this.colorChangeHandler , this);
        //here it uses the event fired by publisher
        //here we also give name of our handler by ourseleves.
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    //colorCode parameter is coming from publisher where we passed this.color in fireEvent
    colorChangeHandler(colorCode) {
        console.log("Color : " + colorCode);
        this.color = colorCode;
    }

    get colorStyle() {
        return `background-color:${this.color}`;
    }

}