"use strict";

class SayMyName {

  constructor(fullname, name) {
    if (name == null) {
      this.firstname = parseFirstName(fullname.split(' ')[0]);
      this.name      = parseName(fullname.slice(this.firstname.length));
    }
    else {
      this.firstname = parseFirstName(fullname);
      this.name      = parseName(name);
    }
  }

  humanize() {
    return this.firstname + ' ' + this.name;
  }

}

/* parts of the name that will stay in lowercase */
var elts = [
  "de",
  "le",
  "d'",
  "l'",
  "du",
  "Van", // if "Van" let the uppercase (note: VAN will still go through toLowerCase)
  "van",
  "of",
  "des"
];

var uppercase = function(name) {
  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
}

/* Firstname should not contains space, only union */
var parseFirstName = function(firstname) {
  var ftab = firstname.split(/ |-/)
  for (var i=0; i < ftab.length; i++){
    ftab[i] = uppercase(ftab[i]);
  }
  return ftab.join('-');
}

var parseName = function(name,parts) {

  if (parts == null) {
    parts = [];
  }

  if (name == '') {
    return parts.join(' ').split("' ").join("'");
  }

  name  = name.trim();
  var s = name.split(' ');

  for (var i = 0; i < elts.length; i++) {

    var e        = elts[i];

    var withCase = e.match(/[A-Z]/) != null;

    if ((withCase ? name : name.toLowerCase()).indexOf(e) == 0) {
      return parseName( name.slice(e.length), parts.concat(withCase ? uppercase(e) : e) );
    }

  }

  return parseName( name.slice(s[0].length), parts.concat(uppercase(s[0])) );

}

console.log(new SayMyName("jean le vilain DU CONLAJOIX").firstname)
