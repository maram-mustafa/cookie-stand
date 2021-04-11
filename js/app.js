'use strict';

const seattle = {
    locationNAme:'Seattle',
    min:23,
    max:65,
    avg:6.3,
    customerNumb:0,
    customerNumbArray:[],
    amount:0,
    amountCookiePurchase:[],


    getCustomerNumber:function(){//random number of customer per hour
        for (let i=0 ; i<14 ; i++){ 
            this.customerNumb = randomValue(23,65);  
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
           // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase:function(){
        for(let i=0 ; i<this.customerNumbArray.length ; i++){
         this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.amountCookiePurchase.push(this.amount);
        //console.log(this.amount);
        }
    console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies:function(){

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;

        
         let unorderlist= document.createElement('ul');
         article.appendChild(unorderlist);
         let li=null ;
         let time=5;
         let clock=false;
         let total=0;


            for (let i=0; i<= this.amountCookiePurchase.length ; i++){
               li=document.createElement('li');
               unorderlist.appendChild(li);

               if (time < 12 || i < 6){
                   time++;
                   clock='AM';
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
               }else{
                   time=1;
               }
               
               if(i>=6){
                   clock='PM';
               }
               if(i<14){
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
                   total=total+this.amountCookiePurchase[i];
               }

            }
             li.textContent=`TOTAL : ${total} Cookies`;   
    },
}


//call the functions
seattle.getCustomerNumber(); 
seattle.getCookiePurchase();
seattle.creatingSalmonCookies();


const tokyo = {
    locationNAme:'tokyo',
    min:3,
    max:24,
    avg:1.2,
    customerNumb:0,
    customerNumbArray:[],
    amount:0,
    amountCookiePurchase:[],


    getCustomerNumber:function(){//random number of customer per hour
        for (let i=0 ; i<14 ; i++){ 
            this.customerNumb = randomValue(3,24);  
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
           // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase:function(){
        for(let i=0 ; i<this.customerNumbArray.length ; i++){
         this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.amountCookiePurchase.push(this.amount);
        //console.log(this.amount);
        }
    console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies:function(){

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;

        
         let unorderlist= document.createElement('ul');
         article.appendChild(unorderlist);
         let li=null ;
         let time=5;
         let clock=false;
         let total=0;


            for (let i=0; i<= this.amountCookiePurchase.length ; i++){
               li=document.createElement('li');
               unorderlist.appendChild(li);

               if (time < 12 || i < 6){
                   time++;
                   clock='AM';
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
               }else{
                   time=1;
               }
               
               if(i>=6){
                   clock='PM';
               }
               if(i<14){
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
                   total=total+this.amountCookiePurchase[i];
               }

            }
             li.textContent=`TOTAL : ${total} Cookies`;   
    },
}


//call the functions
tokyo.getCustomerNumber(); 
tokyo.getCookiePurchase();
tokyo.creatingSalmonCookies();


const dubai = {
    locationNAme:'Dubai',
    min:11,
    max:38,
    avg:3.7,
    customerNumb:0,
    customerNumbArray:[],
    amount:0,
    amountCookiePurchase:[],


    getCustomerNumber:function(){//random number of customer per hour
        for (let i=0 ; i<14 ; i++){ 
            this.customerNumb = randomValue(11,38);  
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
           // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase:function(){
        for(let i=0 ; i<this.customerNumbArray.length ; i++){
         this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.amountCookiePurchase.push(this.amount);
        //console.log(this.amount);
        }
    console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies:function(){

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;

        
         let unorderlist= document.createElement('ul');
         article.appendChild(unorderlist);
         let li=null ;
         let time=5;
         let clock=false;
         let total=0;


            for (let i=0; i<= this.amountCookiePurchase.length ; i++){
               li=document.createElement('li');
               unorderlist.appendChild(li);

               if (time < 12 || i < 6){
                   time++;
                   clock='AM';
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
               }else{
                   time=1;
               }
               
               if(i>=6){
                   clock='PM';
               }
               if(i<14){
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
                   total=total+this.amountCookiePurchase[i];
               }

            }
             li.textContent=`TOTAL : ${total} Cookies`;   
    },
}


//call the functions
dubai.getCustomerNumber(); 
dubai.getCookiePurchase();
dubai.creatingSalmonCookies();


const paris = {
    locationNAme:'Paris',
    min:20,
    max:38,
    avg:2.3,
    customerNumb:0,
    customerNumbArray:[],
    amount:0,
    amountCookiePurchase:[],


    getCustomerNumber:function(){//random number of customer per hour
        for (let i=0 ; i<14 ; i++){ 
            this.customerNumb = randomValue(20,38);  
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
           // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase:function(){
        for(let i=0 ; i<this.customerNumbArray.length ; i++){
         this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.amountCookiePurchase.push(this.amount);
        //console.log(this.amount);
        }
    console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies:function(){

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;

        
         let unorderlist= document.createElement('ul');
         article.appendChild(unorderlist);
         let li=null ;
         let time=5;
         let clock=false;
         let total=0;


            for (let i=0; i<= this.amountCookiePurchase.length ; i++){
               li=document.createElement('li');
               unorderlist.appendChild(li);

               if (time < 12 || i < 6){
                   time++;
                   clock='AM';
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
               }else{
                   time=1;
               }
               
               if(i>=6){
                   clock='PM';
               }
               if(i<14){
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
                   total=total+this.amountCookiePurchase[i];
               }

            }
             li.textContent=`TOTAL : ${total} Cookies`;   
    },
}


//call the functions
paris.getCustomerNumber(); 
paris.getCookiePurchase();
paris.creatingSalmonCookies();



const lima = {
    locationNAme:'Lima',
    min:2,
    max:16,
    avg:4.6,
    customerNumb:0,
    customerNumbArray:[],
    amount:0,
    amountCookiePurchase:[],
    
    getCustomerNumber:function(){//random number of customer per hour
        for (let i=0 ; i<14 ; i++){ 
            this.customerNumb = randomValue(23,65);  
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
           // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase:function(){
        for(let i=0 ; i<this.customerNumbArray.length ; i++){
         this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.amountCookiePurchase.push(this.amount);
        //console.log(this.amount);
        }
    console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies:function(){

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;

        
         let unorderlist= document.createElement('ul');
         article.appendChild(unorderlist);
         let li=null ;
         let time=5;
         let clock=false;
         let total=0;


            for (let i=0; i<= this.amountCookiePurchase.length ; i++){
               li=document.createElement('li');
               unorderlist.appendChild(li);

               if (time < 12 || i < 6){
                   time++;
                   clock='AM';
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
               }else{
                   time=1;
               }
               
               if(i>=6){
                   clock='PM';
               }
               if(i<14){
                   li.textContent=`${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
                   total=total+this.amountCookiePurchase[i];
               }

            }
             li.textContent=`TOTAL : ${total} Cookies`;   
    },
}


//call the functions
lima.getCustomerNumber(); 
lima.getCookiePurchase();
lima.creatingSalmonCookies();



// funtion to random number 
function randomValue(min, max) {     
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomValue(23,65));

