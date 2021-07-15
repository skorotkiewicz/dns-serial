# dns-serial

> Generating a new DNS Serial Number and editing the current one with last change in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format

## Install

```sh
$ npm install dns-serial
// or
$ yarn add dns-serial
```

## Import

```javascript
const serial = require("dns-serial");
```

## Usage

```javascript
// Get new serial
serial(); // number: 2021071500

// Edit an existing serial
serial(2021071500); // number: 2021071501
serial(2021071502); // number: 2021071503

// Invalid serial
serial(123); // number: 2021071501
```
