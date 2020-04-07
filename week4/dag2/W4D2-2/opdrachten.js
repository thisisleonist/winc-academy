// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       console.log(this.brand);
//     }
//   };
//   const getCarBrand = car.getBrand;
//   getCarBrand();
//   A: undefined omdat getBrand een method is en geen property

//
// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       console.log(this.brand);
//     }
//   };

//   const getCarBrand = car.getBrand;

//   B1: console.log(getCarBrand); // function getBrand

// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//         console.log(this.brand);
//     }
// };
// const getCarBrand = car.getBrand.bind(car);
// getCarBrand();   // output: Nissan

// B2: bind maakt dat de method getBrand wordt uitgevoerd

// <button id="btn" type="button">Get the car's brand</button>

// const car = {
//     brand: "Nissan",
//     getBrand: function () {
//         console.log(this.brand);
//     },
// };

// const el = document.getElementById("btn");
// el.addEventListener("click", car.getBrand);

// console.log(car.getBrand.bind(car));

// [Function: bound getBrand]

// geeft de functie zelf terug (method van car)
// this wijst niet naar de method, maar naar 'el'

// Samenvattend in het Nederlands: het this keyword refereert
// dus altijd naar de plek waarop de functie aangeroepen wordt
// en niet naar de plek waar de functie gedefinieerd is.

// D

// const car = {
//     brand: "Nissan",
//     getBrand: function(){
//       const printBrandName = function(){
//         console.log(this.brand);
//       };
//       return printBrandName();
//     }
//   };
   
// console.log(car.getBrand());

// undefined omdat getBrand() de method de functie
// printBrandName() uitvoert, waarbij this beperkt is
// tot printBrandName

// *Here, the output we get is **undefined**, because
// closure functions (inner functions) don’t have access
// to the **this** variable of outer functions.
// The net result is that this.brand is equal to
// window.brand, because this in inner functions is bound
// to the **global object.***

// D: this verwijst nu naar car en brand is een prop van car

// E

// var car = {
//     brand: "Nissan",
//     getBrand: function(){
//       const printBrandName = () => {   
//         console.log(this.brand);
//       };
//       return printBrandName();
//     }
//   };
   
//   car.getBrand();

  var car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = () => {   
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();
