'use strict';

const seattle = {
    locationNAme: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    customerNumb: 0,
    customerNumbArray: [],
    amount: 0,
    amountCookiePurchase: [],


    getCustomerNumber: function () {//random number of customer per hour
        for (let i = 0; i < 14; i++) {
            this.customerNumb = randomValue(23, 65);
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
            // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase: function () {
        for (let i = 0; i < this.customerNumbArray.length; i++) {
            this.amount = this.customerNumbArray[i] * this.avg;
            this.amount = Math.ceil(this.amount);
            this.amountCookiePurchase.push(this.amount);
            //console.log(this.amount);
        }
        console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies: function () {
      
// funtion to random number 
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
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

        let image = document.createElement('img');
        article.appendChild(image);
        image.setAttribute('src', 'images/salmon.png');
        image.setAttribute('width', '300px');

 seattle.getCustomerNumber();
seattle.getCustomerNumber();
tokyo.getCustomerNumber();
paris.getCustomerNumber();
dubai.getCustomerNumber();
lima.getCustomerNumber();


      

        let unorderlist = document.createElement('ul');
        article.appendChild(unorderlist);
        let li = null;
        let time = 5;
        let clock = false;
        let total = 0;

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



SalmonCookies.prototype.renderhed = function () {


        for (let i = 0; i <= this.amountCookiePurchase.length; i++) {
            li = document.createElement('li');
            unorderlist.appendChild(li);

            if (time < 12 || i < 6) {
                time++;
                clock = 'AM';
                li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
            } else {
                time = 1;
            }


        }
    },
}
//call the functions
seattle.getCustomerNumber();
seattle.getCookiePurchase();
seattle.creatingSalmonCookies();


const tokyo = {
    locationNAme: 'tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    customerNumb: 0,
    customerNumbArray: [],
    amount: 0,
    amountCookiePurchase: [],


    getCustomerNumber: function () {//random number of customer per hour
        for (let i = 0; i < 14; i++) {
            this.customerNumb = randomValue(3, 24);
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
            // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase: function () {
        for (let i = 0; i < this.customerNumbArray.length; i++) {
            this.amount = this.customerNumbArray[i] * this.avg;
            this.amount = Math.ceil(this.amount);
            this.amountCookiePurchase.push(this.amount);
            //console.log(this.amount);
        }
        console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies: function () {

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;


        let unorderlist = document.createElement('ul');
        article.appendChild(unorderlist);
        let li = null;
        let time = 5;
        let clock = false;
        let total = 0;


        for (let i = 0; i <= this.amountCookiePurchase.length; i++) {
            li = document.createElement('li');
            unorderlist.appendChild(li);

            if (time < 12 || i < 6) {
                time++;
                clock = 'AM';
                li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
            } else {
                time = 1;
            }

            if (i >= 6) {
                clock = 'PM';
            }
            if (i < 14) {
                li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
                total = total + this.amountCookiePurchase[i];
            }

        }
        li.textContent = `TOTAL : ${total} Cookies`;
    },

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


SalmonCookies.prototype.render = function () {

    //for seattel
    let dataRow1 = document.createElement('tr');
    table.appendChild(dataRow1);


//call the functions
tokyo.getCustomerNumber();
tokyo.getCookiePurchase();
tokyo.creatingSalmonCookies();


const dubai = {
    locationNAme: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    customerNumb: 0,
    customerNumbArray: [],
    amount: 0,
    amountCookiePurchase: [],


    getCustomerNumber: function () {//random number of customer per hour
        for (let i = 0; i < 14; i++) {
            this.customerNumb = randomValue(11, 38);
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
            // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase: function () {
        for (let i = 0; i < this.customerNumbArray.length; i++) {
            this.amount = this.customerNumbArray[i] * this.avg;
            this.amount = Math.ceil(this.amount);
            this.amountCookiePurchase.push(this.amount);
            //console.log(this.amount);
        }
        console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies: function () {

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;


        let unorderlist = document.createElement('ul');
        article.appendChild(unorderlist);
        let li = null;
        let time = 5;
        let clock = false;
        let total = 0;


        for (let i = 0; i <= this.amountCookiePurchase.length; i++) {
            li = document.createElement('li');
            unorderlist.appendChild(li);

            if (time < 12 || i < 6) {
                time++;
                clock = 'AM';
                li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
            } else {
                time = 1;
            }

            if (i >= 6) {
                clock = 'PM';
            }
            if (i < 14) {
                li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
                total = total + this.amountCookiePurchase[i];
            }

        }
        li.textContent = `TOTAL : ${total} Cookies`;
    },

}

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
    td0.textContent = seattle.total;


//call the functions
dubai.getCustomerNumber();
dubai.getCookiePurchase();
dubai.creatingSalmonCookies();


const paris = {
    locationNAme: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    customerNumb: 0,
    customerNumbArray: [],
    amount: 0,
    amountCookiePurchase: [],


    getCustomerNumber: function () {//random number of customer per hour
        for (let i = 0; i < 14; i++) {
            this.customerNumb = randomValue(20, 38);
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
            // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase: function () {
        for (let i = 0; i < this.customerNumbArray.length; i++) {
            this.amount = this.customerNumbArray[i] * this.avg;
            this.amount = Math.ceil(this.amount);
            this.amountCookiePurchase.push(this.amount);
            //console.log(this.amount);
        }
        console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies: function () {

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;


        let unorderlist = document.createElement('ul');
        article.appendChild(unorderlist);
        let li = null;
        let time = 5;
        let clock = false;
        let total = 0;


        for (let i = 0; i <= this.amountCookiePurchase.length; i++) {
            li = document.createElement('li');
            unorderlist.appendChild(li);

            if (time < 12 || i < 6) {
                time++;
                clock = 'AM';
                li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
            } else {
                time = 1;
            }
            li.textContent = `TOTAL : ${total} Cookies`;
        }




        if (i >= 6) {
            clock = 'PM';
        }
        if (i < 14) {
            li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
            total = total + this.amountCookiePurchase[i];
        }


        li.textContent = `TOTAL : ${total} Cookies`;

    },
}

//call the functions
paris.getCustomerNumber();
paris.getCookiePurchase();
paris.creatingSalmonCookies();



const lima = {
    locationNAme: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    customerNumb: 0,
    customerNumbArray: [],
    amount: 0,
    amountCookiePurchase: [],

    getCustomerNumber: function () {//random number of customer per hour
        for (let i = 0; i < 14; i++) {
            this.customerNumb = randomValue(23, 65);
            //console.log(this.customerNumb);
            this.customerNumbArray.push(this.customerNumb);
            // console.log(this.customerNumbArray);
        }
    },

    getCookiePurchase: function () {
        for (let i = 0; i < this.customerNumbArray.length; i++) {
            this.amount = this.customerNumbArray[i] * this.avg;
            this.amount = Math.ceil(this.amount);
            this.amountCookiePurchase.push(this.amount);
            //console.log(this.amount);
        }
        console.log(this.amountCookiePurchase)
    },

    creatingSalmonCookies: function () {

        let container = document.getElementById('salmonCookies');

        let article = document.createElement('article');
        container.appendChild(article);

        let h2 = document.createElement('h2');
        article.appendChild(h2);
        h2.textContent = this.locationNAme;


        let unorderlist = document.createElement('ul');
        article.appendChild(unorderlist);
        let li = null;
        let time = 5;
        let clock = false;
        let total = 0;


        for (let i = 0; i <= this.amountCookiePurchase.length; i++) {
            li = document.createElement('li');
            unorderlist.appendChild(li);

            if (time < 12 || i < 6) {
                time++;
                clock = 'AM';
                li.textContent = `${time} ${clock} : ${this.amountCookiePurchase[i]} Cookies`;
            } else {
                time = 1;
            }

            if (i >= 6) {
                clock = 'PM';
            }
            li.textContent = `TOTAL : ${total} Cookies`;
        }
    },
}

    //for tokyo
    let dataRow2 = document.createElement('tr');
    table.appendChild(dataRow2);

    let td1 = document.createElement('td');
    dataRow2.appendChild(td1);
    td1.textContent = 'tokyo';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow2.appendChild(td);
        td.textContent = tokyo.customerNumbArray[i];
    }

    let td2 = document.createElement('td');
    dataRow2.appendChild(td2);
    td2.textContent = tokyo.total;

    //for paris
    let dataRow3 = document.createElement('tr');
    table.appendChild(dataRow3);

    let td3 = document.createElement('td');
    dataRow3.appendChild(td3);
    td3.textContent = 'paris';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow3.appendChild(td);
        td.textContent = paris.customerNumbArray[i];
    }

    let td4 = document.createElement('td');
    dataRow3.appendChild(td4);
    td4.textContent = paris.total;


    //for dubai
    let dataRow4 = document.createElement('tr');
    table.appendChild(dataRow4);

//call the functions
lima.getCustomerNumber();
lima.getCookiePurchase();
lima.creatingSalmonCookies();

    let td5 = document.createElement('td');
    dataRow4.appendChild(td5);
    td5.textContent = 'dubai';

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow4.appendChild(td);
        td.textContent = dubai.customerNumbArray[i];
    }

    let td6 = document.createElement('td');
    dataRow4.appendChild(td6);
    td6.textContent = dubai.total;

// funtion to random number 
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomValue(23, 65));


    //for lima
    let dataRow5 = document.createElement('tr');
    table.appendChild(dataRow5);


    let td7 = document.createElement('td');
    dataRow5.appendChild(td7);
    td7.textContent = 'lima';


console.log(randomValue(23, 65));

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('td');
        dataRow5.appendChild(td);
        td.textContent = lima.customerNumbArray[i];
    }
    let td8 = document.createElement('td');
    dataRow5.appendChild(td8);
    td8.textContent = lima.total;


    SalmonCookies.prototype.renderfooter = function () {
        let footRow = document.createElement('tr')
        table.appendChild(footRow);

        let tablefoot = document.createElement('td');
        footRow.appendChild(tablefoot);
        tablefoot.textContent = 'Total'


        let footRow = document.createElement('tr')
        table.appendChild(footRow);

        let tablefoot = document.createElement('td');
        footRow.appendChild(tablefoot);
        tablefoot.textContent = 'Total'


        let Totalsum = 0;
        for (let i = 0; i < hours.length; i++) {
            let td = document.createElement('td');
            footRow.appendChild(td);
            var sum = 0;

            for (let j = 0; j < arrOfobjects.length; j++) {
                sum += arrOfobjects[j].amountCookiePurchase[i];
            }
            td.textContent = sum;
            Totalsum += sum;
        }

        let tablefoot1 = document.createElement('td');
        footRow.appendChild(tablefoot1);

        tablefoot1.textContent = Totalsum;
        }
        let tablefoot1 = document.createElement('td');
        footRow.appendChild(tablefoot1);

        tablefoot1.textContent = Totalsum;
    }
}
seattle.renderhed();
seattle.render();
seattle.renderfooter();
console.log(arrOfobjects);




const form = document.getElementById('SalmonCookieForm');
form.addEventListener('submit', handleSubmitting);


function handleSubmitting(event) {
    event.preventDefault();
    console.log(event);

    table.removeChild(table.lastChild); //to remove last Row

    let newMinNum = parseInt(event.target.minNumField.value);
    console.log(newMinNum);
    let newMaxNum = parseInt(event.target.maxNumField.value);
    console.log(newMaxNum);
    let newAvg = parseFloat(event.target.avgNumField.value);
    console.log(newAvg);

    let newlocation = event.target.newlocation.value;
    console.log(newlocation)


    let locations = new SalmonCookies( newlocation,newMinNum, newMaxNum, newAvg); //new object
    
    locations.getCustomerNumber(); //call for new object
    locations.getCookiePurchase(); //call for new object

    console.log(locations);
    let dataRow7 = document.createElement('tr');
    table.appendChild(dataRow7);

    let td = document.createElement('td');
    dataRow7.appendChild(td);
    td.textContent = newlocation;

    for (let i = 0; i < hours.length; i++) {

        let td9 = document.createElement('td');
        dataRow7.appendChild(td9);
        td9.textContent = locations.customerNumbArray[i];
    }

    let td10 = document.createElement('td');
    dataRow7.appendChild(td10);
    td10.textContent = locations.total;


    locations.renderfooter();

}




