'use strict';

// funtion to random number 
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let locations = ['seattle', 'tokyo', 'dubai', 'paris', 'lima', 'Total'];
let arrOfobjects = [];

function SalmonCookies(locationName, minn, maxx, avg) {

    this.locationNAme = locationName;
    this.min = minn;
    this.max = maxx;
    this.avg = avg;
    this.customerNumb = 0;
    this.customerNumbArray = [];
    this.amount = 0;
    this.amountCookiePurchase = [];
    this.total = 0;
    arrOfobjects.push(this);

}

let seattle = new SalmonCookies('seattle', 23, 65, 6.3);
let tokyo = new SalmonCookies('tokyo', 3, 24, 1.2);
let dubai = new SalmonCookies('dubai', 11, 38, 3.7);
let paris = new SalmonCookies('paris', 20, 38, 2.3);
let lima = new SalmonCookies('lima', 2, 16, 4.6);

SalmonCookies.prototype.getCustomerNumber = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customerNumbArray.push(randomValue(this.min, this.max));

    }
}

seattle.getCustomerNumber();
tokyo.getCustomerNumber();
paris.getCustomerNumber();
dubai.getCustomerNumber();
lima.getCustomerNumber();



SalmonCookies.prototype.getCookiePurchase = function () {
    for (let i = 0; i < hours.length; i++) {
        this.amount = this.customerNumbArray[i] * this.avg;
        this.amount = Math.ceil(this.amount);
        this.amountCookiePurchase.push(this.amount);
        this.total = this.total + this.amount
        //console.log(total);
    }
}

seattle.getCookiePurchase();
tokyo.getCookiePurchase();
paris.getCookiePurchase();
dubai.getCookiePurchase();
lima.getCookiePurchase();


let parent = document.getElementById('salmonCookies');
let table = document.createElement('table')
parent.appendChild(table);
table.setAttribute('border', '1px');


SalmonCookies.prototype.render = function () {

    let headRow = document.createElement('tr')
    table.appendChild(headRow);

    let tableHead0 = document.createElement('th');
    headRow.appendChild(tableHead0);
    tableHead0.textContent = 'Location'

    for (let i = 0; i < hours.length; i++) {
        let tableHead = document.createElement('th');
        headRow.appendChild(tableHead);
        tableHead.textContent = hours[i];
    }
    let tableHead = document.createElement('th');
    headRow.appendChild(tableHead);
    tableHead.textContent = 'Daily Location Total'

}

SalmonCookies.prototype.renderSeattel = function () {
    let dataRow1 = document.createElement('tr');
    table.appendChild(dataRow1);

    let td = document.createElement('td');
    dataRow1.appendChild(td);
    td.textContent = 'seattel';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow1.appendChild(td);
        td.textContent = seattle.customerNumbArray[i];
    }
    
        let td0 = document.createElement('td');
        dataRow1.appendChild(td0);
        td0.textContent= seattle.total;
}


SalmonCookies.prototype.renderTokyo = function () {
    let dataRow2 = document.createElement('tr');
    table.appendChild(dataRow2);

    let td = document.createElement('td');
    dataRow2.appendChild(td);
    td.textContent = 'tokyo';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow2.appendChild(td);
        td.textContent = tokyo.customerNumbArray[i];

    }
    let td1 = document.createElement('td');
    dataRow2.appendChild(td1);
    td1.textContent = tokyo.total;
}

SalmonCookies.prototype.renderParis = function () {
    let dataRow3 = document.createElement('tr');
    table.appendChild(dataRow3);

    let td = document.createElement('td');
    dataRow3.appendChild(td);
    td.textContent = 'paris';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow3.appendChild(td);
        td.textContent = paris.customerNumbArray[i];

    }
    let td1 = document.createElement('td');
    dataRow3.appendChild(td1);
    td1.textContent = paris.total;
}

SalmonCookies.prototype.renderDubai = function () {
    let dataRow4 = document.createElement('tr');
    table.appendChild(dataRow4);

    let td = document.createElement('td');
    dataRow4.appendChild(td);
    td.textContent = 'dubai';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow4.appendChild(td);
        td.textContent = dubai.customerNumbArray[i];
    }
    let td1 = document.createElement('td');
    dataRow4.appendChild(td1);
    td1.textContent = dubai.total;
}

SalmonCookies.prototype.renderlima = function () {

    let dataRow5 = document.createElement('tr');
    table.appendChild(dataRow5);

    let td = document.createElement('td');
    dataRow5.appendChild(td);
    td.textContent = 'lima';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow5.appendChild(td);
        td.textContent = lima.customerNumbArray[i];
   }
   let td1 = document.createElement('td');
   dataRow5.appendChild(td1);
   td1.textContent = lima.total;
}
SalmonCookies.prototype.renderfooter = function () {

    let footRow = document.createElement('tr')
    table.appendChild(footRow);

    let tablefoot = document.createElement('td');
    table.appendChild(tablefoot);
    tablefoot.textContent = 'Total'
}


seattle.render();
seattle.renderSeattel();
tokyo.renderTokyo();
paris.renderParis();
dubai.renderDubai();
lima.renderlima();
seattle.renderfooter();
console.log(arrOfobjects);















//     let h2 = document.createElement('h2');
//     parent.appendChild(h2);
//     h2.textContent = this.locationNAme;

//     let unorderlist = document.createElement('ul');
//     parent.appendChild(unorderlist);
//     let li = null;


//     for (let i = 0; i < hours.length; i++) {
//         li = document.createElement('li');
//         unorderlist.appendChild(li);

//         li.textContent = hours[i] + ': ' + this.amountCookiePurchase[i] + ' Coookies';

//     }
//     let totalLiItem = document.createElement('li');
//     unorderlist.appendChild(totalLiItem);
//     totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
// }

//      getCustomerNumber:function(){//random number of customer per hour
//         for (let i=0 ; i<hours.length ; i++){ 
//             this.customerNumb = randomValue(23,65);  
//             //console.log(this.customerNumb);
//             this.customerNumbArray.push(this.customerNumb);
//            // console.log(this.customerNumbArray);
//         }
//     },

//     getCookiePurchase:function(){
//         for(let i=0 ; i<hours.length ; i++){
//          this.amount = this.customerNumbArray[i] * this.avg ;
//          this.amount = Math.ceil(this.amount);
//          this.total= this.total + this.amount

//          this.amountCookiePurchase.push(this.amount);
//         //console.log(this.amount);    
//         //console.log(this.amountCookiePurchase)
//         }
//     },

//      render:function(){

//     //    let image = document.createElement('img');
//     //     article.appendChild(image);
//     //     image.setAttribute('src', 'images/salmon.png');
//     //     image.setAttribute('width','300px');


//     let h2 = document.createElement('h2');
//     parent.appendChild(h2);
//     h2.textContent = this.locationNAme;

//     let unorderlist= document.createElement('ul');
//     parent.appendChild(unorderlist);
//     let li=null ;


//         for (let i=0; i<hours.length ; i++){
//                li=document.createElement('li');
//                unorderlist.appendChild(li);

//                li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';

//         }
//         let totalLiItem = document.createElement('li');
//         unorderlist.appendChild(totalLiItem);
//         totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//     }

// }

// //call the functions
// seattle.getCustomerNumber(); 
// seattle.getCookiePurchase();
// seattle.render();
// console.log(seattle);


//      const tokyo = {
//      locationNAme:'tokyo',
//      min:3,
//      max:24,
//      avg:1.2,
//      customerNumb:0,
//      customerNumbArray:[],
//      amount:0,
//      amountCookiePurchase:[],
//      total:0,

//      getCustomerNumber:function(){//random number of customer per hour
//       for (let i=0 ; i<hours.length ; i++){ 
//         this.customerNumb = randomValue(3,24);  
//         //console.log(this.customerNumb);
//         this.customerNumbArray.push(this.customerNumb);
//        // console.log(this.customerNumbArray);
//     }
// },

//      getCookiePurchase:function(){
//       for(let i=0 ; i<hours.length ; i++){
//         this.amount = this.customerNumbArray[i] * this.avg ;
//        this.amount = Math.ceil(this.amount);
//        this.total= this.total + this.amount

//      this.amountCookiePurchase.push(this.amount);
//     //console.log(this.amount);    
//     //console.log(this.amountCookiePurchase)
//     }
// },

//  render:function(){

// let h2 = document.createElement('h2');
// parent.appendChild(h2);
// h2.textContent = this.locationNAme;

// let unorderlist= document.createElement('ul');
// parent.appendChild(unorderlist);
// let li=null ;


//     for (let i=0; i<hours.length ; i++){
//            li=document.createElement('li');
//            unorderlist.appendChild(li);

//            li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';

//     }
//     let totalLiItem = document.createElement('li');
//     unorderlist.appendChild(totalLiItem);
//     totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
// }

// }

// //call the functions
// tokyo.getCustomerNumber(); 
// tokyo.getCookiePurchase();
// tokyo.render();
// console.log(tokyo);




// const dubai = {
//     locationNAme:'Dubai',
//     min:11,
//     max:38,
//     avg:3.7,
//     customerNumb:0,
//     customerNumbArray:[],
//     amount:0,
//     amountCookiePurchase:[],
//     total:0,

//     getCustomerNumber:function(){//random number of customer per hour
//         for (let i=0 ; i<hours.length ; i++){ 
//           this.customerNumb = randomValue(11,38);  
//           //console.log(this.customerNumb);
//           this.customerNumbArray.push(this.customerNumb);
//          // console.log(this.customerNumbArray);
//       }
//   },

//        getCookiePurchase:function(){
//         for(let i=0 ; i<hours.length ; i++){
//           this.amount = this.customerNumbArray[i] * this.avg ;
//          this.amount = Math.ceil(this.amount);
//          this.total= this.total + this.amount

//        this.amountCookiePurchase.push(this.amount);
//       //console.log(this.amount);    
//       //console.log(this.amountCookiePurchase)
//       }
//   },

//    render:function(){

//   let h2 = document.createElement('h2');
//   parent.appendChild(h2);
//   h2.textContent = this.locationNAme;

//   let unorderlist= document.createElement('ul');
//   parent.appendChild(unorderlist);
//   let li=null ;


//       for (let i=0; i<hours.length ; i++){
//              li=document.createElement('li');
//              unorderlist.appendChild(li);

//              li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';

//       }
//       let totalLiItem = document.createElement('li');
//       unorderlist.appendChild(totalLiItem);
//       totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//   }

//   }

//   //call the functions
//   dubai.getCustomerNumber(); 
//   dubai.getCookiePurchase();
//   dubai.render();
//   console.log(dubai);



//     const paris = {
//      locationNAme:'Paris',
//      min:20,
//      max:38,
//      avg:2.3,
//      customerNumb:0,
//      customerNumbArray:[],
//      amount:0,
//      amountCookiePurchase:[],
//      total:0,

//      getCustomerNumber:function(){//random number of customer per hour
//         for (let i=0 ; i<hours.length ; i++){ 
//           this.customerNumb = randomValue(20,38);  
//           //console.log(this.customerNumb);
//           this.customerNumbArray.push(this.customerNumb);
//          // console.log(this.customerNumbArray);
//       }
//   },

//        getCookiePurchase:function(){
//         for(let i=0 ; i<hours.length ; i++){
//           this.amount = this.customerNumbArray[i] * this.avg ;
//          this.amount = Math.ceil(this.amount);
//          this.total= this.total + this.amount

//        this.amountCookiePurchase.push(this.amount);
//       //console.log(this.amount);    
//       //console.log(this.amountCookiePurchase)
//       }
//   },

//    render:function(){

//   let h2 = document.createElement('h2');
//   parent.appendChild(h2);
//   h2.textContent = this.locationNAme;

//   let unorderlist= document.createElement('ul');
//   parent.appendChild(unorderlist);
//   let li=null ;


//       for (let i=0; i<hours.length ; i++){
//              li=document.createElement('li');
//              unorderlist.appendChild(li);

//              li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';

//       }
//       let totalLiItem = document.createElement('li');
//       unorderlist.appendChild(totalLiItem);
//       totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//   }

//   }

//   //call the functions
//   paris.getCustomerNumber(); 
//   paris.getCookiePurchase();
//   paris.render();
//   console.log(paris);




// const lima = {
//     locationNAme:'Lima',
//     min:2,
//     max:16,
//     avg:4.6,
//     customerNumb:0,
//     customerNumbArray:[],
//     amount:0,
//     amountCookiePurchase:[],
//     total:0,


//     getCustomerNumber:function(){//random number of customer per hour
//         for (let i=0 ; i<hours.length ; i++){ 
//           this.customerNumb = randomValue(2,16);  
//           //console.log(this.customerNumb);
//           this.customerNumbArray.push(this.customerNumb);
//          // console.log(this.customerNumbArray);
//       }
//   },

//        getCookiePurchase:function(){
//         for(let i=0 ; i<hours.length ; i++){
//           this.amount = this.customerNumbArray[i] * this.avg ;
//          this.amount = Math.ceil(this.amount);
//          this.total= this.total + this.amount

//        this.amountCookiePurchase.push(this.amount);
//       //console.log(this.amount);    
//       //console.log(this.amountCookiePurchase)
//       }
//   },

//    render:function(){

//   let h2 = document.createElement('h2');
//   parent.appendChild(h2);
//   h2.textContent = this.locationNAme;

//   let unorderlist= document.createElement('ul');
//   parent.appendChild(unorderlist);
//   let li=null ;


//       for (let i=0; i<hours.length ; i++){
//              li=document.createElement('li');
//              unorderlist.appendChild(li);

//              li.textContent = hours[i]+ ': ' +this.amountCookiePurchase[i] + ' Coookies';

//       }
//       let totalLiItem = document.createElement('li');
//       unorderlist.appendChild(totalLiItem);
//       totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
//   }

//   }

//   //call the functions
//   lima.getCustomerNumber(); 
//   lima.getCookiePurchase();
//   lima.render();
//   console.log(lima);


