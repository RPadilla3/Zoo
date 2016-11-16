(function() {
  'use strict';
  window.zoo = window.zoo || {};

  var expect = chai.expect;

  describe('Testing namespace of Zoo', function (){
    it('Should confirm that window.zoo is a namespace', function (){
      expect(window.zoo).to.be.a('object');
    });
  });

  describe('Testing Animal constructor function', function(){
    it('Should create a new animal whenever a name and age are passed', function(){
      expect(new window.zoo.Animal('poncho', 4)).to.be.an('object');
    })
    it('Should create the default animal if no input is given', function(){
      expect(new window.zoo.Animal()).to.be.an('object');
    })

  });

}());
