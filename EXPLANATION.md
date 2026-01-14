## Backend
On the backend side I've updated the required user column in the database (roles and status) so roles user json array (using simple-json by the doc) to set roles of the user and status uses and enum set in typescript.

I've implemented also a RolesGuard that is chained to the AuthGuard that I am using in the UserController. So you can have separation of concerns.

I've used the official command of typeorm to generate automatically the migrations to update the database as required by the doc.

I've also moved the root .env.example file to the backend folder since it is related to the backend. It means that you have to set a .env file in order to make it work properly.

I've also added in the main.ts file the cors rule to let the frontend use the backend since it's not the same domain.

## Frontend
I've created a services folder where you usually add different kind of api points or websockets instances etc...

So I've created an axios instance to have a singleton to use it everywhere in the app.

I've used it in the vuex module I have created to separate correctly parts of the state for a the future of the project. It helps having only related actions, mutations, getters etc... specifically for a "feature" of the app which makes it easy to search for code issues if there is any.

I've implemented a guard in the router to make it easy to see what page needs what kind of roles and to checlk is the user needs to be authenticated to access pages using the
router beforeEach function which help acting like a middleware.

I've also created a .env.example file to have the easiest possibility to change the backend URL and other variables if needed in the future. Note that env vars per the documentation of vite needs to start with VITE_<name of your var> in order to work properly.

Finally I've updated as required per the doc the pages to show the username everywhere.