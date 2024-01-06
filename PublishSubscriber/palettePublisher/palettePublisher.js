import { LightningElement , track , wire} from 'lwc';
import { fireEvent } from 'c/pubsub';
import { currentPageReference } from 'lightning/navigation';

export default class PalettePublisher extends LightningElement {

    @track color;
    @wire(currentPageReference) pageRef;

    colorCodeOptions = [
        { label : "Green" , value : "green" },
        { label : "Blue" , value : "blue" },
        { label : "Red" , value : "red" },
        { label : "Yellow" , value : "yellow" }
    ]

    changeColor(event) {
        this.color = event.target.value;
    }

    handleChangeColor() {
        console.log("Color : " + this.color);
        fireEvent(this.pageRef , "changedColorEvent" , this.color);
        //changedColorEvent is the event name given by us here. It is being fired from here.
    }

}