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
    console.log(new Animal('guadalupe', 10));

  



    // var guadalupe = new Narwhal('guadalupe', 'male', false);
    // var maria = new Narwhal('maria', 'female', true);
}());
