# pollingSystemAPI
 This is a basic polling api and this the Readme file for this Web Application.It's a Web App built with Node.js,MongoDB,ExpressJs.It allows user to create questions with options and also add votes to it.
 
# Contributed By:- Pranav

#Folder Structure:-
```
pollingSystemAPI
├── config
│   └── mongoose.js
├── controller
│   ├── options_controller.js
│   └── questions_controller.js
├── generateTree.js
├── index.js
├── models
│   ├── options.js
│   └── questions.js
├── package-lock.json
├── package.json
├── README.md
└── routes
    ├── index.js
    ├── options.js
    └── questions.js
```
# Features of this App:-
  1. Create a question (you can add as many questions as you want)
  2. Add options to a question
  3. Add a vote to an option of question
  4. Delete a question
  5. Delete an option 
  6. View a question with it’s options and all the votes given to it
# Getting Started:-
# Prerequisites:-
```
Node.js
MongoDB
Express
Mongoose
```
# Installation Steps:-
1. Clone the repository:-
```
git clone https://github.com/vijaysaipranav/pollingSystemAPI.git
```
2. Install the dependencies:
```
cd pollingSystemAPI
npm install
```
3. Configure the database connection:
In server.js use your own mongoDB username and Password from connection string of MongoDB Campus or Cloud MongoDB to configure the DB connection.
4. Start the application:
```
npm start
```
5. Open your web browser and visit [https://pollingsystem-qdyc.onrender.com](url) to access the pollingSystemAPI
6. you can use these following routes (to test the api you can use postman website):-
   I) /questions/create - to create question
   II) /questions/question_id/options/create - to create option
   III) /questions/question_id/delete - to delete the question
   IV) /options/options_id/delete - to delete the option
   V) /options/options_id/add_vote - to add vote to a option
   VI) /questions/question_id - to display the qusetion and its options
   VII) / - to display all the questions and options and votes

# Contributing:
Contributions are most easily and thankfully welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Make the necessary changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request explaining the changes you've made.

# Acknowledgements:
The libraries and resources that you used in the development of this project are Visual Studio Code and MongoDB Cloud database finally with render for deployment.
# Contact:

1. Email - [vijaysaipranavt@gmail.com](url)
2. Project Link - [ https://github.com/vijaysaipranav/pollingSystemAPI.git](url)
