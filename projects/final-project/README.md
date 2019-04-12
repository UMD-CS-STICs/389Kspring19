# Final Project
#### Out: 4/12/19 | Deadline: 5/10/19 11:00 PM

### Overview

In this project, you will work with up to 2 other students (max group size of 3) to tie together everything you have learned up to now in the semester.

### Objectives

The purpose of this project is to create a fully functioning **"real-time application"** within a group of up to 3 students.

First, you must select a topic for your project to be on. Example topics could be (you cannot use any of these for your project):

- Local Dogs for Adoption
- Movie Reviews
- UMD Clubs and Activities
- Rock Climbing Gyms

This project is largely open ended. The only requirement is to satisfy all parts of the `Specifications` section below, which are broad and flexible. Outside of that, you are free to be creative and make something you are proud of.

### Grading

You fill submit both the application source as well as a `documentation.md` file that documents how you implemented each part of the project.

Grading will be done using the `documentation.md` file to test your application.

Each specificiation has two types of requirements:
- (REQ): These are requirements **must** be followed. Failue to do so can result in up to 50% point deductions for the entire project.
- (X pt): These specifications are worth X points.


### Specifications


1. **Fulfillment of Midterm Project Requirements**

    - (REQ) (50 pt) Data should be stored using MongoDB, instead of similar to how the Pokemon API and the blog engine was set up
    - Have at least 3 different schemas


2. **Live Updates**

    Users will need to be able to add data to your local storage, and have live updates and a notification system.

    - (10 pt) Incorporate sockets.

3. **View Data**

    Users should be able to view all data in two ways:

    - (REQ) The HTML pages should be generated using Handlebars
    - (10 pt) Handlebars.js should be used to generate at least 5 pages,
              including a form submission page for your respective entity
    - (5 pt) Have a (6th) description about page, which includes the names
             of the group members and description of the application

4. **API**

    Use express.js to have at least 10 different endpoints

    - (10 pt) At least 2 post endpoints
    - (10 pt) At least 2 delete endpoints

4. **Modules**

    Create at least 2 modules (to separate functionality from backend API functionality)

    - (15 pt) Create at least 2 modules

5. **NPM Packages**

    - (15 pt) Use 2 new npm packages that we have not used before

6. **User Interface**

    - (10 pt) Make it look nice

7. **Deployment**

    - (5 pt) Deploy to the web (either Heroku or Now)

8. **README**

    - (5 pt) Create a README with all the specifications

### Submission

We will be Heroku [Heroku](http://heroku.com) to submit one link per project.

At the top of your project, include the **Heroku link** (ex: https://myapp.herokuapp.com) at the top of your `documentation.md` file, like so:

Submit just the `documentation.md` file to the submit server.
