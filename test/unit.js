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
    },
    {
      "firstname" : "Jean",
      "name"      : "despointes",
      "shouldBe"  : "Jean Despointes"
    },
    {
      "firstname" : "Paolo",
      "name"      : "d'alcino",
      "shouldBe"  : "Paolo d'Alcino"
    },
    {
      "firstname" : "Test1",
      "name"      : "test1",
      "shouldBe"  : "Test1 Test1"
    },
    {
      "fullname" : "test",
      "shouldBe" : "Test"
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
