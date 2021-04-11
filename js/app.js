'use strict';

const seattle = {
    min:23,
    max:65,
    avg:6.3,
    customerNumb:0,
    customerNumbArray:[],


    getCustomerNumber:function(){
        for (let i=0 ; i<=15 ; i++){ 
        this.customerNumb = randomValue(23,65);    //random number of customer per hour
            this.customerNumbArray.push(i);
            console.log(this.customerNumbArray);
        }
    }

    };




seattle.getCustomerNumber(); //call the function





function randomValue(min, max) { // funtion to random number     
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomValue(23,65));