(function() {
    'use strict';


    /**
     * Animal contructor function that will create a new animal when given a
     * new name and date of birth.
     * @param {String} name Whatever you want to name the animal
     * @param {Number} age A number that will be given to the animal for its age
     * in years.
     */
    function Animal(name, age) {
        this.name = name || 'joey';
        this.age = age || 3;

    };

    /**
     * Narhwal constructor function, to be applied to the animal object.
     * @param {String} name A string, the name of the Narwhal
     * @param {Number} age  The number that is given to the Narwhal as its age.
     */
    function Narwhal(name, age) {

      Animal.apply( this, [name])
      this.breed = 'Narwhal';
      this.name = name || 'Harry Johnson';

    }

    Narwhal.prototype = Object.create(Animal.prototype);
    Narwhal.prototype.constructor = Narwhal;

    Narwhal.prototype.mate = function mate() {
      console.log('mating narwhals');
    };

      console.log(new Narwhal('guadalupe'));
    Animal.prototype = Object.create(Narwhal.prototype);
    Animal.prototype.constructor = Animal;



}());
