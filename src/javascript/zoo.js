(function() {
    'use strict';

    function Animal(name, DOB) {
        console.log('inside Animal');
        this.name = name || 'joey';
        this.DOB = DOB || 3;
    }
    console.log(new Animal('guadalupe', 10));

    function Narwhal(name, sex, birth) {

    }
    Narwhal();


    var guadalupe = new Narwhal('guadalupe', 'male', false);
    var maria = new Narwhal('maria', 'female', true);
    console.log('guadalupe: ', guadalupe);
}());
