import { LightningElement , api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationService extends NavigationMixin(LightningElement) {
    
    @api recordId;

    //opens a window to add a new account
    navigateToNewRecordPage() {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                "recordId":this.recordId,
                "objectApiName":"Account",
                "actionName":"new"
            }
        });
    }

    //opens a window to edit current account
    navigateToEditRecordPage() {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                "recordId":this.recordId,
                "objectApiName":"Account",
                "actionName":"edit"
            }
        });
    }

    //takes to account page in view mode (basically refreshes the current account page)
    navigateToViewRecordPage() {
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                "recordId":this.recordId,
                "objectApiName":"Account",
                "actionName":"view"
            }
        });
    }

    //takes to recently viewed accounts page
    navigateAccRecentView() {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                "objectApiName":"Account",
                "actionName":"list"
            },
            state:{
                "filterName":"Recent"
            }
        });
    }

    //takes to contacts which are related to current account
    navigateRelatedListView() {
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                "recordId":this.recordId,
                "objectApiName":"Account",
                "relationshipApiname":"Contacts",
                "actionName":"view"
            }
        });
    }

    //takes to home page of defined object
    navigateAccObject() {
        this[NavigationMixin.Navigate]({
            type:"standard__objectPage",
            attributes:{
                "objectApiName":"Account",
                "actionName":"home"     //it will still work even we dont include the actionName
            }
        });
    }

    //takes to home page of defined object
    navigateConObject() {
        this[NavigationMixin.Navigate]({
            type:"standard__objectPage",
            attributes:{
                "objectApiName":"Contact",
                "actionName":"home"     //it will still work even we dont include the actionName
            }
        });
    }

    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
            attributes:{
                "url":"https://www.google.com/"
            }
        });
    }

    //takes to home page of current app
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type:"standard__namedPage",
            attributes:{
                pageName:"home"
            }
        });
    }

    //takes to chatter page of current app
    navigateToChatterHome() {
        this[NavigationMixin.Navigate]({
            type:"standard__namedPage",
            attributes:{
                pageName:"chatter"
            }
        });
    }

}