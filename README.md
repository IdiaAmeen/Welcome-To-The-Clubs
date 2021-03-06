# Welcome-To-The-Clubs

welcome-tothe-clubs.surge.sh
<br>

## Overview

_**Welcome To The Clubs** is a website for people to create accounts and join virtual clubs of their interest. The prototype will include a book club with an instructor. It will have the user sign up/sign in , with the ability to add, delete and edit books in the reading list._
### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
    - 1 user table
    - 2 other tables, of your choosing
    - There must be at least 1 association between your tables. (1:m _or_ m:m)
  - Utilize **Rails** to define models for interacting with the database.
  - Implement Authentication using **JWT**.
  - Implement working generic controller actions for full-CRUD (`index`, `show`, `create`, `update`, `delete`) between the 2 non-user tables AND partial-CRUD (`create`, at least) for the user table.

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.^
  - Perform `create`, `update`, and `delete` actions **when logged in**.

_^ Unless it makes sense for that information to be restricted to particular users._

### Styling <!-- omit in toc -->

- Be styled with CSS (or SCSS, if you'd prefer).
- Use flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` convention.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Surge or netlify.
- Deploy the back-end via Heroku.

### Procedural <!-- omit in toc -->

- Initialize a **git repo on Github**, with a link to your hosted project.
- Have **frequent commits**, making a _robust_ commit history at least every day. (75 commits minimum)
- Use effective and safe **branching and merging** processes.

<br>

<br>


### Goals

- _Have clean code,_
- _Work well within schedule._
- _Create a front-end with great user experience._
- _Improve back-end skills._
- _Hit MVP by 6/12/20_

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Use for front-end components._ |
|   React Router   | _Use for creating routes._ |
|    Ruby on Rails | _Back end development._ |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.
- Desktop View
![Desktop View](https://user-images.githubusercontent.com/64420070/84152375-8c784380-aa32-11ea-9ce4-19bb8b159b52.png)


- Tablet View 
![Tablet View](https://user-images.githubusercontent.com/64420070/84152397-91d58e00-aa32-11ea-91c2-e6fb6e54397b.png)


- Phone View
![Phone View](https://user-images.githubusercontent.com/64420070/84152383-8eda9d80-aa32-11ea-9583-51bc9edce0d7.png)

- Add Book

![Add Book](https://user-images.githubusercontent.com/64420070/84152430-9dc15000-aa32-11ea-85fb-87ee687be590.png)

- Edit Book

![Edit Book](https://user-images.githubusercontent.com/64420070/84152423-9bf78c80-aa32-11ea-8630-80edce5868b8.png)

- View Book
![View Book](https://user-images.githubusercontent.com/64420070/84152420-9a2dc900-aa32-11ea-8513-c26876798738.png)

-View Books
![View books](https://user-images.githubusercontent.com/64420070/84152413-98640580-aa32-11ea-8705-00ec8c66aea1.png)

-Sign In
![Sign In](https://user-images.githubusercontent.com/64420070/84152409-969a4200-aa32-11ea-98ab-d082fbcf70e3.png)

-Sign Up
![SignUp](https://user-images.githubusercontent.com/64420070/84152435-a023aa00-aa32-11ea-8152-8eb7609a20c8.png)

-Delete
![DeleteBook](https://user-images.githubusercontent.com/64420070/84154834-951e4900-aa35-11ea-9e11-11dbb14a48be.png)

#### Component Tree

![Component Tree](https://user-images.githubusercontent.com/64420070/84156371-6903c780-aa37-11ea-8be9-fed07d298d47.png)

#### Component Hierarchy

  

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Main.jsx/
      |__ SignUp.jsx
      |__ SignIn.jsx 
      |__ ReadingList.jsx 
      |__ ShowBook.jsx 
      |__ EditBook.jsx
      |__ AddBook.jsx 
      |__ DeleteBook.jsx 
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|  Clubs Icon   |   class    |   y   |   n   | _The club icons will render the clubs using cards in flexbox._   |
| Clubs Card | functional |   n   |   y   | _The cards will render the club info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set Up Seed With Data   |    H    |     5 hrs      |     TBD    | .25       |
| Create CRUD Actions |    H     |     5 hrs      |    TBD     |  8      |
| Authentication    |   H     |     5 hrs      |   TBD     |   3   |
| Controllers  |    H     |     3 hrs      |     TBD     |      1   |
| Verify Back End works  |    H     |     3 hrs      |     TBD     |    .25    |
| Front End Services |    H     |     5 hrs      |    TBD     |   3     |
| Front End Auth    |   H    |     5 hrs      |  TBD     | 4      |
| Components|    H     |     16 hrs      |     TBD     |   8      |
| CSS    |    H    |     5 hrs      |    TBD     |   8    |
| Media Quieres |    H     |     3 hrs      |     TBD     |  8       |
| Debug    |    H     |     3 hrs      |    TBD     |  1      |
| Deploy |    H     |     3 hrs      |     TBD    |    .25   |
| TOTAL               |          |     56 hrs      |         |   44.75     |



<br>

### Server (Back End)

#### ERD Model

![Erd](https://user-images.githubusercontent.com/64420070/84152404-9437e800-aa32-11ea-920e-5507921b52ae.png)

<br>

***

## Post-MVP

- Have use of second & third club
- Create instructor(for club) table
- User has many clubs
- Have use of posts for club (For example, book reviews)


***

## Code Showcase
```
<div className="outer-modal">
          <div className="inner-modal">
            <h3 id="sure">Are you sure you want to delete {bookView.title}?</h3>
            <img src={bookView.image} alt={bookView.title} id="image" />
            <div className="options">
              <button
                className="deletebuttons"
                onClick={() => {
                  removeBook(bookViewId);
                  history.push(`/club/${clubId}/books`);
                }}
              >
                Delete
              </button>
              <button className="deletebuttons" onClick={handleClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
```
## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
