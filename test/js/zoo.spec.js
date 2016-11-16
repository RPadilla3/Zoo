(function() {
  'use strict';
  window.zoo = window.zoo || {};

  var expect = chai.expect;

  describe('testing functions of Zoo', function (){
    it('should confirm that window.zoo is a namespace', function (){
      expect(window.zoo).to.be.a('object');
    });
  });

}());
