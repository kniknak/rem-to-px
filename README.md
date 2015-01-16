# rem-to-px

Replace rem units with px

## Usage

```js
var remtopx = require("rem-to-px");
console.log(remtopx("div { width:2rem }"));
// -> "div { width:32px }"
```

## API

### `remtopx(css, options)`

Replace *rem* units found in the css string with *px*.

 * `options.size`: The size of *1 rem* in *px* (default: `16`)

## Installation

```
npm install rem-to-px
```
