(function() {
    'use strict';


    /**
     * Animal contructor function that will create a new animal when given a
     * new name and date of birth.
     * @param {String} name Whatever you want to name the animal
     * @param {Number} DOB A number that will be given to the animal for its age
     * in years.
     */
    function Animal(name, DOB) {
        this.name = name || 'joey';
        this.DOB = DOB || 3;
    }

    Animal.prototype.getAge = function getAge(){
      return 5;

    };

      var Narwhal = new Animal('guadalupe', 3346372934730)

      console.log(Narwhal, Narwhal.getAge());

      var Okapi = new Animal('esperanza', 56828364239462)

      console.log(Okapi, Okapi.getAge());

}());
