'use strict';

var locations = ['1st and Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];
var oppHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(name,minimumCustomers, maximumCustomers, CookiesPerCustomer) {
    this.storeName = name;
    this.minCustomers = minimumCustomers;
    this.maxCustomers = maximumCustomers;
    this.cookiesPerCustomer = CookiesPerCustomer;
    this.cookiesSoldPerHour = [];
    this.customerCount = function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    };
    this.cookiesSold = function(){
        for(var i = 0; i < oppHours.length; i++) {
            return this.cookiesSoldPerHour.push(Math.ceil(this.customerCount() * this.cookiesPerCustomer));
    };
}
}
Store.prototype.render = function() {
   for(var i = 0; i < oppHours.length; i++)
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.textContent = this.storeName;
    tr.append(tdName);


}
var store1 = new Store('1st and Pike', 23, 65, 6.3);
alert("customer count = "+store1.customerCount());
alert("cookies sold per hour = "+store1.cookiesSoldPerHour);
// var seatacStore = new Store('SeaTac Airport', 3, 24, 1.2);
// var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
// var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
// var alkiStore = new Store('Alki', 2, 16, 4.6);

