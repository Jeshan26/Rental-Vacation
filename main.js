// Javascript document 

//registering buttons for event handling purpose

let btn = document.getElementById("desc");
let btn1 = document.getElementById("avail");
let btn2 = document.getElementById("desc1");
let btn3 = document.getElementById("avail1");
let btn4 = document.getElementById("desc2");
let btn5 = document.getElementById("avail2");
let PriceBtn = document.getElementById("price");
let btn6 = document.getElementById("desc3");
let btn7 = document.getElementById("avail3");
let Host = document.getElementById("host-rating");

// class vacation template
class Vacation {
    constructor(name, price, rating, location, rooms, availability, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }
}

//class vacation description method
Vacation.prototype.description = function() {
    propertyName = "Property Name is: " + this.name;
    propertyRating = "Rating for this property is: " + this.rating;
    let main = document.getElementById('main');
    let p = document.createElement('p');
    let h3 = document.createElement('h3');
    h3.innerHTML = propertyName;
    p.innerHTML = propertyRating;
    main.appendChild(h3);
    main.appendChild(p);

};
//class vacation availability method
Vacation.prototype.available = function() {
    name = this.name;
    propertyAvailability = "Currently "+ name+" property is: " + this.availability;
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.innerHTML = propertyAvailability;
    main.appendChild(p);
};
// 2 object being instantiated
let winter = new Vacation('Tiny Winter Getaway', 234, 4, 'Collingwood', 2, 'Not Available', 'Near Beach');

let quiet = new Vacation('Quiet Getaway', 270, 5, 'Collingwood', 2, 'Available', 'Quiet');

//class superproperty being inherited from vacation
class SpecialProperty extends Vacation {
    constructor(name, price, rating, location, rooms, availability, features, discount) {
        super(name, price, rating, location, rooms, availability, features);
        this.discount = discount;
    }
}
// another method being implemented
SpecialProperty.prototype.newPrice = function() {
    name = this.name;
    discountPercent = this.discount / 100;
    newPrice = "Grab the oppurtunity to to visit "+name+" this place at our discounted price which is :" + ((this.price) - (this.price * discountPercent));
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.innerHTML = newPrice;
    main.appendChild(p);
};
// instantiating object for inherited class
let special = new SpecialProperty('High Floor', 500, 5, 'Toronto', 2, 'Available', '28th Floor', 20);


// another class being inherited from vacation class
class SuperHost extends Vacation {
    constructor(name, price, rating, location, rooms, availability, features, host) {
        super(name, price, rating, location, rooms, availability, features);
        this.host = host;
    }
}

// function added to inherited class to increase its functionality

SuperHost.prototype.hostratings = function() {
    name = this.name;
    guider = name + "'s host rating is:  " + this.host;
    let main = document.getElementById('main');
    let p = document.createElement('p');
    p.innerHTML = guider;
    main.appendChild(p);
}
//object being instantiated

let superhost = new SuperHost('Blackberry-Valley', 550, 5, 'Caledon', 5, 'Available', '28th Floor', 4.5);

// below events are being registered

btn.addEventListener("click", function() {
    quiet.description();
})
btn1.addEventListener("click", function() {
    quiet.available();
})

btn2.addEventListener("click", function() {
    winter.description();
})

btn3.addEventListener("click", function() {
    winter.available();
})

btn4.addEventListener("click", function() {
    special.description();
})
btn5.addEventListener("click", function() {
    special.available();
})

PriceBtn.addEventListener("click", function() {
    special.newPrice();
})

btn6.addEventListener("click", function() {
    superhost.description();
})
btn7.addEventListener("click", function() {
    superhost.available();
})

Host.addEventListener("click", function() {
    superhost.hostratings();
})