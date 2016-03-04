var SayMyName = require('../saymyname');


QUnit.test("Names", function( assert ) {
  var names = [
    {
      "fullname" : "jean de la fontaine",
      "shouldBe" : "Jean de La Fontaine"
    },
    {
      "firstname" : "Jean baptise",
      "name"      : "poquelin",
      "shouldBe"    : "Jean-Baptise Poquelin"
    },
    {
      "fullname" : "pedro suárez-llanos",
      "shouldBe" : "Pedro Suárez-Llanos"
    },
    {
      "firstname" : "Charles",
      "name"      : "des lombrières",
      "shouldBe"  : "Charles des Lombrières"
    }
  ];


  for (var i=0; i < names.length; i++) {
    name = names[i];
    if (typeof name.fullname != "undefined") {
      var smn = new SayMyName(name.fullname);
    }
    else {
      var smn = new SayMyName(name.firstname,name.name);
    }
    var humanized = smn.humanize(); 
    assert.equal( humanized, name.shouldBe, "We expect "+ humanized+" to be " + name.shouldBe );
  }

});
