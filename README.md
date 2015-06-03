# babel-library-register

Overrides [babel](https://github.com/babel/babel)'s `shouldIgnore` check so that any package with a dependency on babel
is transpiled. Useful for making packages with ES6+ dependencies.

## Installation

`npm install babel-library-register`

## Usage

```
require('babel-library-register');
require('my-module-which-needs-transpiling');
```

## Author

Andreas Brekken

## License

ICS
