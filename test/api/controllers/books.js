var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {
  describe('books', function() {
    describe('GET /books', function() {
      it('Должны получить массив всех книг', function(done) {
        request(server)
          .get('/api/books')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.length.should.eql(3);
            done();
          });
      });

      it('Должны получить массив книг, отсортированных по жанру', function(done) {
        request(server)
          .get('/api/books')
          .query({ genre: 'фантастика'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.length.should.eql(1);
            done();
          });
      });

    });

  });

});
