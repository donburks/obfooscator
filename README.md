# Obfooscator

The purpose of this module is to obfuscate email addresses that you would have in HTML pages, to deter those email addresses from being harvested by page scrapers. 

## Installation

`npm install obfooscator`

## Usage

### Front-end:

```javascript

import {obfooscator} from 'obfooscator';

let email = 'sample@example.com';

console.log(obfooscator(email)); //sa\u006Dpl\u0065&#64;\u0065xa\u006Dpl\u0065.co\u006D (may vary, obfuscation is randomized)
```

### Back-end

```javascript
const obfooscator = require('obfooscator');

let email = 'sample@example.com';

console.log(obfooscator(email)); //sa\u006Dpl\u0065&#64;\u0065xa\u006Dpl\u0065.co\u006D (may vary, again)

```

## Options

You can pass an optional second param to the function in order to change from getting unicode to getting HTML entities. There is a JSX gotcha where it won't (nicely) process HTML entities without the use of hackery, so the default is the Unicode characters. However, if you are using this on the back-end, and the resulting entities don't need to get processed by JSX, then pass `false` as the second param.

### Example:

```javascript
const obfooscator = require('obfooscator');

let email = 'sample@example.com';

console.log(obfooscator(email, false)); 
```



If you have any questions, please contact me at don (at) donburks (dot) com.

