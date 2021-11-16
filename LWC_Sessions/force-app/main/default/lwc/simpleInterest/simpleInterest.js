import { LightningElement, track } from 'lwc';

export default class SimpleInterest extends LightningElement {
    principle;
    rate;
    time;
    @track result;
    getPrinciple(event) {
        this.principle = parseFloat(event.target.value);
    }
    getRateofInterest(event) {
        this.rate = parseFloat(event.target.value);
    }
    getTime(event) {
        this.time = parseFloat(event.target.value);
    }
    getCalculation() {
        this.result = (this.principle * this.rate * this.time) / 100;
        console.log(this.result);
    }
}