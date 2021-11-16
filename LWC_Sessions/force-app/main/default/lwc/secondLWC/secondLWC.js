import { LightningElement, track } from 'lwc';

export default class SecondLWC extends LightningElement {
    @track result;
    first;
    second;
    @track perviousResult = [];
    @track showResult = false;
    getNumber(event) {
        const inputbox = event.target.name;
        if (inputbox === 'FirstNumber') {
            this.first = event.target.value;
            
        }
        else if (inputbox === 'SecondNumber') {
            this.second = event.target.value;
        }
    }
    addHandler() {
        const firstN = parseInt(this.first);
        const secondN = parseInt(this.second);
        this.result = `Result of ${firstN}+${secondN} is ${firstN + secondN}`;
        this.perviousResult.push(this.result);

    }
    subHandler() {
        const firstN = parseInt(this.first);
        const secondN = parseInt(this.second);
        this.result = `${firstN - secondN}`;
        this.perviousResult.push(this.result);

    }
    multHandler() {
        const firstN = parseInt(this.first);
        const secondN = parseInt(this.second);
        this.result = `${firstN * secondN}`;
        this.perviousResult.push(this.result);

    }
    divHandler() {
        const firstN = parseInt(this.first);
        const secondN = parseInt(this.second);
        this.result = `${firstN / secondN}`;
        this.perviousResult.push(this.result);

    }
    showPerviousResultHandler(event) {
        this.showResult = event.target.checked; 
    }

}