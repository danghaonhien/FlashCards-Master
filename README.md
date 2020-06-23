# FlashCard Master

This is a MERN stack application which creates a platform for users to study languages through flash cards and quizzes. Users can also have a playground that they can interact with each other to exchange knowledge.

# Technologies

1. MongoDB as database
2. ExpressJs as server framework
3. Reactjs as main library
4. Nodejs
5. Redux for state management
6. Semantic Ui as frontend library

# Authentication

We use **passport js** for authentication middleware with **passport-jwt** as strategy.
There are pages that will require authentication in order to access such as Dashboard, Classroom, Flashcards, or Quizz.
If you are authenticated, you will be stayed logged in until you log out.

# Application breakdown

**Navigation Bar UI** is deisgned to be updated when you are authenticated.

**Dashboard** is a main profile page which will allow to create profile. You can also have the ability to update.

**Flashcard** page allows users to create as many flashcards as they want. A post request will be sent to the MongoDb database when creating a flashcard. the user can only view the flashcards which belong to them. By using Pagination from semantic-ui-react, the flashcard is showed one at a time and it can be deleted by using built in function(findByIdAndDelete) from moongose.

**Quiz** , authenticated users can take quizz after creating profiles. Using Redux form to connect the correct answer from database. Scores will be updated accordingly ( 1 correct answer = 20 points). The score will be rendered by Semantic Ui modal.

**Classroom** allows authenticated users to get to know with other classmates. You can also check other profile to see where they study and where they are from. If it is your profile, you are able to edit.

**Playground** is a forum for users to interact. Authenticated users can create posts and comment on each others.
