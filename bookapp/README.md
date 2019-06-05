# Welcome to Book Reading SPA APP

I have created an App in which you can change your book reading experince.
There is a listing page which contains all the listed books with option to filter them on basis of categories, from there you can select, read any book and access whole content if you are a premium user.


# Steps to Run the App

 1. Clone or download the repository.
 2. Run `npm install`.
 3. Run `npm start`
 4. Your browser will open [http://localhost:3000/](http://localhost:3000/) automatically. If not enter URL manually. 
 5. Enjoy your Books.


# Steps to Run the Test Cases

 1. After `npm install`.
 2. Run `npm run test`.
 3. Press `a` to run all tests.


## Tasks Done:-

 - [x] Implemented Protected routes using a HOC which redirects un-authenticated user to Login page.
 - [x] Different routes are implemented.
 - [x] Book Listing (Discovery) page implemented for Auth Users.
 - [x] Book Detail page implemented for Auth Users.
 - [x] Subscription feature Added. Only premium user can access full content on Detail page.
 - [x] Unit tested Actions, Async actions, Reducers and components.Using Jest and Enzyme.
 - [x] CSS-in-JS is used for styling purpose. Using [styled-components](https://www.styled-components.com/) for styling.
 - [x] App is responsive (No external CSS/UI framework is used).
 - [x] App is deployed on https://hellofresh.ankitb09.now.sh
 
 
## Some Technical Details:-

- I am creating a session for user on click of login, which is stored in session storage. I have created a custom middleware for this.

- For Discovery page, I am considering that JSON at "/Books" end point will only have that details which is required on discovery page. So I am storing whole book list retured by "/Books" in store and filtering on basis of categories on Front-End itself. 

- On Book Detail page, I have performed some check which will not make request for already requested book.

## For Bonus Answers:-
PLease have a look at the PDF for question asked in bonus section like adding search and payment features.

 **Screenshot of Redux state:-**
You can find the screenshot of Redux state in the images folder just for reference.