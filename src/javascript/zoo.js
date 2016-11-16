(function() {
    'use strict';

    window.zoo = window.zoo || {};

    window.zoo.Animal = Animal;
    window.zoo.Narwhal = Narwhal;
    window.zoo.Echidna = Echidna;

    /**
     * Animal constructor function that will create a new animal when given a
     * new name and date of birth.
     * @param {String} name Whatever you want to name the animal
     * @throws {TypeError} if the name argument is an Array.
     * @param {Number} age A number that will be given to the animal for its age
     * in years.
     */
    function Animal(name, age) {
        if (typeof(name) !== 'string') {
            throw new TypeError('Hey! You must give me a string!');
        }
        this.name = name || 'joey';
        this.age = age || 0;
    }

    /**
     * Narhwal constructor function, to be applied to the animal object.
     * @param {String} name A string, the name of the Narwhal
     * @param {Number} age  The number that is given to the Narwhal as its age.
     */
    function Narwhal(name, age) {
      if (typeof(name) !== 'string') {
          throw new TypeError('Hey! You need to give me a string!');
      }
      Animal.apply(this, [name, age]);

    }

    Narwhal.prototype = Object.create(Animal.prototype);
    Narwhal.prototype.constructor = Narwhal;
    Narwhal.prototype.breed = 'Narwhal';

    Narwhal.prototype.birth = function birth() {
        return new Narwhal('gaddafi');
    };

    Narwhal.prototype.joust = function joust() {
        var NarwhalTusk = Math.ceil(Math.random() * 10);
        if (NarwhalTusk > 6) {
          return 'win';
        } else {
          return 'lose';
        }
    };

    /**
     * Echidna Constructor function, to be applied to the animal object.
     * @param {String} name A string, the name of the Echidna
     * @param {Number} age  The number that is given to the Echidna as it's age.
     */
    function Echidna(name, age) {

        Animal.apply(this, [name, age]);
        this.breed = 'Echidna';
        this.name = name || 'Hugh';

    }

    Echidna.prototype = Object.create(Animal.prototype);
    Echidna.prototype.constructor = Echidna;

    Echidna.prototype.birth = function birth() {
        return new Echidna('carl');
    };

    Echidna.prototype.dig = function dig(burrow) {
      return 'Echidna dug down into the ' + burrow;
    };


}());
