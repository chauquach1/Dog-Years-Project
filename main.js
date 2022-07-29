var myAge = 26;
// the variable myAge has the value of 26 human years, which is my actual age

var earlyYears = 2;
//the variable earlyYears refers to the first two human years

var earlyYears = 2*10.5;
//the first two human years of a dog's life is equal to 10.5 dog years

var laterYears = myAge-2;
//since the first two human years of a dog's life were already accounted for in earlyYears, laterYears is equal to the remaining human years unaccounted for

var laterYears = (myAge-2)*4;
//since the first two years of dog's life is accounted for by the variable earlyYears, the remaining human years is then converted into dog years


//console.log(earlyYears);
//console.log(laterYears);
// Yes, the values are what I expected

var myAgeInDogYears = earlyYears+laterYears;
//the variable earlyYears is equal to the first two human years of a dog's life but in terms of dog years
//the variable laterYears is equal to the unaccounted human years of a dog after it's first two human years but in terms of dog years
//adding these two together would give the total number of dog years that my human age is equal to

const Name = "Chau";
var myName = Name.toLowerCase();
//console.log(myName); shows 'chau', which is correct

console.log(`My name is ${myName} I am myAge years old in human years which is  years old in dog years.`)
// To allow for string interpolation, the literal are delimited back ticks
// Placeholders are then inserted by using a dollarsign and curly braces
// console.log invokes, in order, all the lines of code preceding it and displays it in our console
