/* 1. Simple Object Context

myBrand called laptop.getBrand which have "this" specifying the brand:"Dell"

*/
console.log("1. Simple Object Context:")
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand); // Dell

