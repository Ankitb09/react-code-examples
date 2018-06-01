# Phone book App
  

### I have created a Phone Book app.I am using these libraries to achieve this app:-


* Bootstrapped with with [Create React App](https://github.com/facebookincubator/create-react-app)
* [json-server](https://github.com/typicode/json-server) [for making API calls].
* [React-Router](https://github.com/ReactTraining/react-router) for routes creation and SEO purpose.
* [React-Redux](https://github.com/reduxjs/react-redux) for managing app states and for separation of concerns.
* [Redux-form](https://github.com/erikras/redux-form) for better Form management and validations.
* [Redux-promise](https://github.com/redux-utilities/redux-promise) for Middleware.
* I am using [concurrently](https://www.npmjs.com/package/concurrently) to run app and json-server concurrently.
* It uses http://localhost:3000/ for app and http://localhost:4000/db for json-server.
* Although it is an responsive app.But best viewed at viewport of 375px.
 

### Steps to run:-
* Please run following command to update npm:
```sh
npm i -g npm
```
* After that just type:
```sh
npm start
```

## Check List or Stories:-
 * [x] Listing all contacts
 * [x] Creation of new contact and appending it to DB.
 * [x] Deletion of any contact and deletion from DB.
 * [x] Contact Detail page.
 * [x] Form validation.
 * [x] Routing.
 * [x] App State Management with Redux.
 * [ ] Sort order (Due to some bug I need to compromise on sorting order of list)
 * [ ] Unit Test cases.
