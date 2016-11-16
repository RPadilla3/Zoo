(function() {
    'use strict';
    window.zoo = window.zoo || {};

    var expect = chai.expect;

    describe('Testing namespace of Zoo', function() {
        it('Should confirm that window.zoo is a namespace', function() {
            expect(window.zoo).to.be.a('object');
        });
    });

    describe('Testing Animal constructor function', function() {
        it('Should create a new animal whenever a name and age are passed', function() {
            expect(new window.zoo.Animal('poncho', 4)).to.be.an('object');
        })
        it('Should create the default animal if no input is given', function() {
            expect(new window.zoo.Animal('')).to.be.an('object');
        })
        it('Should return a TypeError message if anything other than a string is typed in the input', function() {
            // var fn = function(){
            //   new window.zoo.Animal(4);
            // }
            //   // expect(fn).to.throw(Error);
            try {
                new window.zoo.Animal(420);
                expect(true).to.equal(false);
            } catch (err) {
                expect(err).to.be.an.instanceof(TypeError);
            }

        });

    });

    describe('Testing Narwhal Constructor function', function() {
      it('Should create a new Narwhal whenever a name and age are passed', function() {
          expect(new window.zoo.Narwhal('Jill Stein', 53)).to.be.an('object');
      })
      it('Should create the default animal if no input is given', function() {
          expect(new window.zoo.Narwhal('')).to.be.an('object');
      })
      it('Should return a TypeError message if anythin other than a string is typed in the input', function() {
        try {
          new window.zoo.Narwhal(['243']);
          expect(true).to.equal(false);
        } catch(err) {
          expect(err).to.be.an.instanceof(TypeError);
        }
      });

  });



}());
