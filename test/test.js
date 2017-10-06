var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('/GET USERS', function() {
    it('it should GET all the USERS', function (done) {
        chai.request(server)
            .get('/users/all')
            .end(function (err, res) {
                res.should.have.status(200);
                var body=JSON.parse(res.body);
                console.log("Response body "+body);
                console.log("Response body "+body.userid);
               /* assert.equals(1,body.userid);
                assert.equals('barath',body.username);*/
               body.userid.should.equal(1);
                body.username.should.equal('barath');
                   done();
            });
    });
});
