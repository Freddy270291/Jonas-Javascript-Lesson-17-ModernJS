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

// COMMAND LINE
// dir: to check what is in the folder
// cd .. : to go up one folder
// cd ../..  : to go up two folders
// cd starter : to go to the folder starter (TAB to autofil the name)
// mkdir TEST : to createa folder "TEST"
// echo.> index.html : to create a file named index.html
// del index.html : to delete the file index.hmtl
// mv index.html ../  : to move the file one folder up
// rmdir : to delete a folder (for empty directory)
// rm -R TEST: to delete a folder that is not empty

// NPM (Node Package Manager):
// npm -v : to check if we have NPM installed. If there is any number it should be good (>6)
// In each project in which we want to run npm, we need to initialize it
// npm init --> it will ask some questions to create the JSON file
// If we don't need special stuff, we can press enter many times and after the confirmation it creates a special file called package.json
// PACKAGE.JSON: It's the file that stores the entire configuration of the project
// npm install leaflet : to install the packet of leaflet.It creates a new dependency in the package.json file
// It creates also the node_modules folder with the library

// Install Lodash
// npm i lodash-es
// There is a file for each of the methods. We import the file/method we want to include:

// cloneDeep to copy a nested object
//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'; // Imports everything without specifying the path

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);

// Change the loggedIn to false:
state.user.loggedIn = false;
console.log(stateClone); // Here it is false because we changed it
console.log(stateCloneDeep); // Here is true because we changed the original one

// DO NOT INCLUDE THESE NPM FOLDERS IN GIT - Create a file .gitignore. and add the folder to ignore (node_modules/)
// To install all the dependency files we need, we have to enter in the terminal:  npm i

////// PARCEL
// It's a built tool in NPM - npm install parcel --save-dev
// A dev dependency is a tool that we need to build our application, but it's not included in our code

// To use parcel, we can use NPX or Parcel scripts.
// PNX: it is an application built into NPM
// Terminal:  npx parcel index.html
// The entry point is index.html because it is where we include the script, the file that we want to bundle up.
// We have the error in the console "parcelRequire is not define" because in the script of the html we have the type="module" that we don't need anymore, it is a normal script

// PARCEL created the DIST (Distribution) folder, that we will send to production.
// In this folder there is the code that we will send to the user
// The index.html links to another script.js file, that contains the conversion to ES5 Javascript

// HOT MODULE REPLACEMENT: whenever we change one of the modules, it will rebuild the parcel, but the new modified bundle will be charged in the page without reloading the page
if (module.hot) {
  module.hot.accept();
}

// NPM SCRIPTS
// It's another way of running locally installed packagesin the cmd and allow us to avoid repetitive tasks
// STEP 1: si va in package.json e dentro "scripts" (in Debug) si cancella quello che c'è e si mette "start": "parcel index.html"
// STEP 2: Nel terminal si digita npm run start

// BUILT THE FINAL BUNDLE: we insert in the JSON, sempre tra gli scripts, "build": "parcel build index.html"
/*
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
*/
// poi si lancia nel terminal,  npm run build

// We can install packages GLOBALLY (we can use the global tools in the cmd)
// npm i parcel -g

////// BABEL
// To convert our code to previous JS Version (ES5) so it can be run by everyone
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const Jonas = new Person('Jonas');
