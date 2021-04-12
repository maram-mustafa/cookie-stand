'use strict';

// funtion to random number 
function randomValue(min, max) {     
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//console.log(randomValue(23,65));


let hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parent = document.getElementById('salmonCookies');

const seattle = {
    locationNAme:'Seattle',
    min:23,
    max:65,
    avg:6.3,
    customerNumb:0,
    customerNumbArray:[],
    amount:0,
    amountCookiePurchase:[],
    total:0,


     getCustomerNumber:function(){//random number of customer per hour
        for (let i=0 ; i<hours.length ; i++){ 
            this.customerNumb = randomValue(23,65);  
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
           // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase:function(){
        for(let i=0 ; i<hours.length ; i++){
         this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.total= this.total + this.amount

         this.amountCookiePurchase.push(this.amount);
        //console.log(this.amount);    
        //console.log(this.amountCookiePurchase)
        }
    },

     render:function(){

    //    let image = document.createElement('img');
    //     article.appendChild(image);
    //     image.setAttribute('src', 'images/salmon.png');
    //     image.setAttribute('width','300px');


    let h2 = document.createElement('h2');
    parent.appendChild(h2);
    h2.textContent = this.locationNAme;

    let unorderlist= document.createElement('ul');
    parent.appendChild(unorderlist);
    let li=null ;
   
 
        for (let i=0; i<hours.length ; i++){
               li=document.createElement('li');
               unorderlist.appendChild(li);

               li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';

        }
        let totalLiItem = document.createElement('li');
        unorderlist.appendChild(totalLiItem);
        totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
    }

}

//call the functions
seattle.getCustomerNumber(); 
seattle.getCookiePurchase();
seattle.render();
console.log(seattle);


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
      for (let i=0 ; i<hours.length ; i++){ 
        this.customerNumb = randomValue(3,24);  
        //console.log(this.customerNumb);
        this.customerNumbArray.push(this.customerNumb);
       // console.log(this.customerNumbArray);
    }
},

     getCookiePurchase:function(){
      for(let i=0 ; i<hours.length ; i++){
        this.amount = this.customerNumbArray[i] * this.avg ;
       this.amount = Math.ceil(this.amount);
       this.total= this.total + this.amount

     this.amountCookiePurchase.push(this.amount);
    //console.log(this.amount);    
    //console.log(this.amountCookiePurchase)
    }
},

 render:function(){

let h2 = document.createElement('h2');
parent.appendChild(h2);
h2.textContent = this.locationNAme;

let unorderlist= document.createElement('ul');
parent.appendChild(unorderlist);
let li=null ;


    for (let i=0; i<hours.length ; i++){
           li=document.createElement('li');
           unorderlist.appendChild(li);

           li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';

    }
    let totalLiItem = document.createElement('li');
    unorderlist.appendChild(totalLiItem);
    totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
}

}

//call the functions
tokyo.getCustomerNumber(); 
tokyo.getCookiePurchase();
tokyo.render();
console.log(tokyo);




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
        for (let i=0 ; i<hours.length ; i++){ 
          this.customerNumb = randomValue(11,38);  
          //console.log(this.customerNumb);
          this.customerNumbArray.push(this.customerNumb);
         // console.log(this.customerNumbArray);
      }
  },
  
       getCookiePurchase:function(){
        for(let i=0 ; i<hours.length ; i++){
          this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.total= this.total + this.amount
  
       this.amountCookiePurchase.push(this.amount);
      //console.log(this.amount);    
      //console.log(this.amountCookiePurchase)
      }
  },
  
   render:function(){
  
  let h2 = document.createElement('h2');
  parent.appendChild(h2);
  h2.textContent = this.locationNAme;
  
  let unorderlist= document.createElement('ul');
  parent.appendChild(unorderlist);
  let li=null ;
  
  
      for (let i=0; i<hours.length ; i++){
             li=document.createElement('li');
             unorderlist.appendChild(li);
  
             li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';
  
      }
      let totalLiItem = document.createElement('li');
      unorderlist.appendChild(totalLiItem);
      totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
  }
  
  }
  
  //call the functions
  dubai.getCustomerNumber(); 
  dubai.getCookiePurchase();
  dubai.render();
  console.log(dubai);
  


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
        for (let i=0 ; i<hours.length ; i++){ 
          this.customerNumb = randomValue(20,38);  
          //console.log(this.customerNumb);
          this.customerNumbArray.push(this.customerNumb);
         // console.log(this.customerNumbArray);
      }
  },
  
       getCookiePurchase:function(){
        for(let i=0 ; i<hours.length ; i++){
          this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.total= this.total + this.amount
  
       this.amountCookiePurchase.push(this.amount);
      //console.log(this.amount);    
      //console.log(this.amountCookiePurchase)
      }
  },
  
   render:function(){
  
  let h2 = document.createElement('h2');
  parent.appendChild(h2);
  h2.textContent = this.locationNAme;
  
  let unorderlist= document.createElement('ul');
  parent.appendChild(unorderlist);
  let li=null ;
  
  
      for (let i=0; i<hours.length ; i++){
             li=document.createElement('li');
             unorderlist.appendChild(li);
  
             li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';
  
      }
      let totalLiItem = document.createElement('li');
      unorderlist.appendChild(totalLiItem);
      totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
  }
  
  }
  
  //call the functions
  paris.getCustomerNumber(); 
  paris.getCookiePurchase();
  paris.render();
  console.log(paris);
  



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
        for (let i=0 ; i<hours.length ; i++){ 
          this.customerNumb = randomValue(2,16);  
          //console.log(this.customerNumb);
          this.customerNumbArray.push(this.customerNumb);
         // console.log(this.customerNumbArray);
      }
  },
  
       getCookiePurchase:function(){
        for(let i=0 ; i<hours.length ; i++){
          this.amount = this.customerNumbArray[i] * this.avg ;
         this.amount = Math.ceil(this.amount);
         this.total= this.total + this.amount
  
       this.amountCookiePurchase.push(this.amount);
      //console.log(this.amount);    
      //console.log(this.amountCookiePurchase)
      }
  },
  
   render:function(){
  
  let h2 = document.createElement('h2');
  parent.appendChild(h2);
  h2.textContent = this.locationNAme;
  
  let unorderlist= document.createElement('ul');
  parent.appendChild(unorderlist);
  let li=null ;
  
  
      for (let i=0; i<hours.length ; i++){
             li=document.createElement('li');
             unorderlist.appendChild(li);
  
             li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';
  
      }
      let totalLiItem = document.createElement('li');
      unorderlist.appendChild(totalLiItem);
      totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
  }
  
  }
  
  //call the functions
  lima.getCustomerNumber(); 
  lima.getCookiePurchase();
  lima.render();
  console.log(lima);
  

