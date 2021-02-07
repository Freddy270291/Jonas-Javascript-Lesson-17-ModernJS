/*

We used to write all the code in one script, but today we divide our project into multiple modules.
This modules can share data between them and make our code more organised and maintenable. 
We can use third party modules into our code (Example: React, Jquery,.. all availble through NPM).

NPM (Node Package Manager): it was originally developed together with and for Node.JS.
In order to download, use and share packages we use the NPM software installed in our computer.
NPM is both the repository in which packages live and the program that we use on our computer to install and manage these packages.

Our project needs to go through a big BUILD PROCESS where a big JS Bundle is built (JS file sent to the browser in production).

BUILD PROCESS:
1. BUNDLING: Join all modules into one file (eliminate unused code and compress it)
2. TRANSPILING AND POLYFILLING: Convert modern JS back to ES5 syntax, so that even older browser can read it. This is done through a tool called BABEL.

We use a special tool to implement this build process. The most common are WEBPACK and PARCEL. (called JS Bundlers)


> MODULES: it is a reusable piece of code that encapsulates implementation details.
It is usually a STANDALONE FILE (it doesn't have to be), it has IMPORT and EXPORT (Public API for other code to consume).
This Public API is consumed by importing values into a module (DEPENDENCY).

  . Modules make it easier to compose software - they are small building blocks that we put together to build complex applications.
  . Each of these modules can be developed in complete isolation. ISOLATE COMPONENTS: Modules can be developed in isolation without thinking about the entire codebase.
  . ABSTRACT CODE: Implement low-level code in modules and import these abstractions into other modules.
  . ORGANIZED CODE: Modules naturally lead to a more organized codebase.
  . REUSE CODE: Modules allow us to easily reuse the same code, even across multiple projects.

NATIVE ES6 MODULES: Modules stored in files, exactly one module per file.
a. in ES6 Modules, Top-Level variables are scoped (private to the module), the only wait to access them is by exporting them. In Scropt, all the Top-level variables are global.
b. ES6 Modules are always executed in strict mode, while scripts in "sloppy" mode.
c. in ES6 Modules, the top-level this keyword is always undefined, while in scripts it points to the window object.
d. in ES6 modules, to link an HTML we have to use <script type="module"> instead of simply <script>
e. in ES6 Modules, the download the modules files always happen in async way.

Exported values are not copied, they are just linked to the importing module. When the value changes in the exporting module, it changes also in the importing one.

*/

// import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(quantity, price);

// Import everything from shoppingCart
import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

// To use values from * imported, we have to call it:
ShoppingCart.addToCart('bread', 5);

// Importing export default (we can give a name we want, with export default onlyone thing can be exported)
import add from './shoppingCart.js';
add('milk', 2);
