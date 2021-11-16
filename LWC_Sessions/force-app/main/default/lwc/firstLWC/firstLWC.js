import { LightningElement, track } from 'lwc';

export default class FirstLWC extends LightningElement {
    @track dynamicVar = false;
    @track cityList = ['Malkapur', 'Akola', 'Shegaon'];
    greetingChangeHandler(event) {
        this.dynamicVar = event.target.value;
    }
}