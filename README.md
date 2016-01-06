SayMyName let you split human name (into firstname and name) and aims to return the correct letter case.

## Installation

With npm

```bash
npm install saymyname
```

In a browser
```html
<script type="text/javascript" src="saymyname.js"></script>
```

## Usage
```javascript

// full name constructor
var myName = new SayMyName("jean de la fontaine");

console.log(myName.humanize()); // return "Jean de La Fontaine"
console.log(myName.firstname);  // return "Jean"
console.log(myName.name);      // return "de La Fontaine"

// firstname + name constructor
var myName = new SayMyName("JEAN BAPTISE","POQUELIN");

console.log(myName.humanize()); // return "Jean-Baptiste Poquelin"
console.log(myName.firstname);  // return "Jean-Baptise"
console.log(myName.name);      // return "Poquelin"


```

## Limitations

I tried to catch as many case as possible (specially with nobiliary particle) but human naming is not (read: not at all) a science. Many thanks to you, Wikipedia.

## Contributions

Feel free to contribute
