//1, Person class to hold all details.

class Person{
    constructor(name,age,gender,qualification){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
    }
    
}
var person1=new Person("ajay",23,"male","BE");
console.log(person1.gender);
console.log(person1);

//2, Create a class for a movie

class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    get PG(){
        return Movie.filter(Movie.rating=="PG")

    }

}
let movie1=new Movie("LEO","AGS");
let movie2=new Movie("Casino royale","EON productions","PG13")
console.log(movie1.rating);
console.log(movie2);
console.log(movie2.title);
console.log(Movie.rating);

//3, Create a class to calculate UBER price

class UBER{
    constructor(kilometer,fare=50){
        this.kilometer=kilometer;
        this.fare=fare;
    }
    get price(){
        return this.kilometer*this.fare;
    }
}
var uber1=new UBER(10,15);
var uber2=new UBER(12);
console.log(uber1.price);
console.log(uber2.price);

//4, UML diagram to typescript class

class Circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    get radiusCircle(){
        return this.radius;

    };
    get colourCircle(){
        return this.colour

    };
    set radiusCircle(radius){
        this.radius=radius;

    };
    set colourCircle(colour){
        this.colour=colour;

    };
    toString(){
        return `Circle[radius=${this.radius},colour=${this.colour}]`;
    };
    get area(){
       return Math.PI*Math.pow(this.radius,2);
    };
    get cicumference(){
        return 2*Math.PI*this.radius;
    }
}
var obj1=new Circle(5,"blue");
console.log(obj1.radius);
console.log(obj1.colour);
console.log(obj1.area.toFixed(2));
console.log(obj1.cicumference.toFixed(2));
console.log(obj1.radiusCircle);
console.log(obj1.colourCircle);
console.log(obj1.toString());