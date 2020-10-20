[![Build Status](https://travis-ci.org/poupougnac/saymyname.svg?branch=master)](https://travis-ci.org/poupougnac/saymyname)

SayMyName is a small library that do its best to let you split human name (into firstname and name) and aims to return the correct letter case.

## Installation

With npm

```bash
npm install saymyname
```

In a browser
```html
<script type="text/javascript" src="saymyname.js"></script>
```

## Demo
You can play with the library [here](https://runkit.com/5f8ef73f7e694f001a39189a/5f8ef73fd36e2f001320264d).

## Usage
```javascript

// full name constructor
const myName = new SayMyName("jean de la fontaine");

console.log(myName.humanize()); // return "Jean de La Fontaine"
console.log(myName.firstname);  // return "Jean"
console.log(myName.name);      // return "de La Fontaine"

// firstname + name constructor
const myName = new SayMyName("JEAN BAPTISTE","POQUELIN");

console.log(myName.humanize()); // return "Jean-Baptiste Poquelin"
console.log(myName.firstname);  // return "Jean-Baptise"
console.log(myName.name);      // return "Poquelin"


```

## Limitations

I tried to catch as many case as possible (specially with nobiliary particle) but human naming is not (read: not at all) a science. Many thanks to you, Wikipedia.

## Contributions

Feel free to contribute
