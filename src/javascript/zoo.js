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
        this.age = age || 0;

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

    Narwhal.prototype.birth = function birth() {
      return new Narwhal('qaddafi');
    }
      // console.log(birth());



    console.log(new Narwhal('guadalupe'));
    var pedro = new Narwhal('pedro', 2);
    console.log(pedro.birth());


    /**
     * Echidna Constructor function, to be applied to the animal object.
     * @param {String} name A string, the name of the Echidna
     * @param {Number} age  The number that is given to the Echidna as it's age.
     */
    function Echidna(name, age) {

      Animal.apply( this, [name])
      this.breed = 'Echidna';
      this.name = name || 'Hugh Janus';

    }

    Echidna.prototype = Object.create(Animal.prototype);
    Echidna.prototype.constructor = Echidna;

    console.log(new Echidna('rosario'));

}());
