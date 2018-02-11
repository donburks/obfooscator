# Obfooscator

The purpose of this module is to obfuscate email addresses that you would have in HTML pages, to deter those email addresses from being harvested by page scrapers. 

## Installation

`npm install obfooscator`

## Usage

```javascript

const obfooscator = require('obfooscator');

let email = 'sample@example.com';

console.log(obfooscator(email)); //s&#97;mple&#64;ex&#97;mple.&#99;om (may vary, obfuscation is randomized)
```

If you have any questions, please contact me at don (at) donburks (dot) com.

