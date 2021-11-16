/* import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';
    bmi;
    weight;
    height;

    enterWeight(event) {
        this.weight = parseFloat(event.target.value);
        
    }
    enterHeight(event) {
        this.height = parseFloat(event.target.value);
        
    }
    addReactiveProperty() {
        try{
            this.bmi = this.weight/(this.height*this.height);
            } catch(error){
            this.bmi = undefined;
        }
        console.log(this.weight);
        console.log(this.height);
        console.log(this.bmi);
    }
} */

import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';
    @track bmi = {
        weight:0,
        height:0,
        result :0
    };
    onWeightChange(event){
        this.bmi.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.bmi.height = parseFloat(event.target.value);
    }

    calculateBMI(){
        try{
        this.bmi.result = this.bmi.weight/(this.bmi.height*this.bmi.height);
        } catch(error){
            this.bmi.result = undefined;
        }
    }
    get bmiValue() {
        if (this.bmi.result === undefined) {
            return '';
        }
        else {
            return `Your bmi = ${this.bmi.result}`;
        }
        
    }
}