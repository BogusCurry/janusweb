describe("JanusWeb", function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  var client, canvas;
  beforeEach(function(done) {
    done();
  });
  it('succeeds at running at least one test', function(done) {
    expect(true).toBe(true);
    setTimeout(function() {
      done();
    }, 10000);
  });
/*
  it("should initialize client", function(done) {
    try {
      elation.janusweb.init({homepage: 'http://www.janusvr.com/index.html', resolution: '640x480'}).then(function(newclient) { 
        client = newclient;
        expect(client).toBeDefined();
        done();
      });
    } catch (e) {
      console.log('exception happened!', e.stack);
    }
  });
  it("added canvas to document", function(done) {
    var canvases = document.getElementsByTagName('canvas');
    expect(canvases.length).toEqual(1);
    canvas = canvases[0];
    done();
  });
  it("should load a room", function(done) {
    var janusweb = client.janusweb;
    expect(janusweb).toBeDefined();
    elation.events.add(janusweb, 'room_change', function(ev) {
      expect(janusweb.currentroom).toBeDefined();
      done();
    });
  });
  it('takes a screenshot', function(done) {
    setTimeout(function() {
      expect(canvas).toBeDefined();
      var shot = canvas.toDataURL('image/png');
      //console.log(shot);
      done();
    }, 5000);
  });
*/

});
