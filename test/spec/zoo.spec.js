(function() {
  'use strict';
  window.zoo = window.zoo || {};

  var expect = chai.expect;

  describe('Testing namespace of Zoo', function (){
    it('should confirm that window.zoo is a namespace', function (){
      expect(window.zoo).to.be.a('object');
    });
  });

  describe('testing Animal constructor function', function(){
    it('should create a new animal whenever a name and age are passed', function(){
      expect(new window.zoo.Animal('poncho', 4)).to.be.an('object');
    });
  });

}());
