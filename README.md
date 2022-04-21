Yearly App

Description

    Each New Years Holiday my friends’ family has a Sunday dinner where everyone shares how their annual goals went and what their new ones are. The matriarch, Stephanie, writes down each person’s goals on a piece of paper that she holds onto until the end of the year.

    Yearly digitally tracks your annual goals all in one place and shares how the people who matter in your life are doing on theirs. 

MVP

    To create an account, the User can submit their first name, username, and password. Users can post goals through the GoalForm where they will be asked to write a Title and any Notes. All goals will be posted on a feed called Public Goal List. A Users’ goal will have a button that says Completed and upon being clicked, will change the goals completed value to true. Users Goals will be available to view on their Profile under a Profile Goal List. All goals are editable and deletable.

User Stories

    As a User I can create a password protected account.

    As a User I can post a goal with a title and notes.

    As a User I can see other Users goals.

    As a User I can see what goals I have completed.

    As a User I can edit and delete any of my goals.



Mind Map

    Front-end

    Components
    Auth.js
    GoalForm.js
    EditGoalForm.js
    Navbar.js
    Goal.js
    GoalList.js
    Profile.js
    ProfileGoalList.js
    ProtectedRoute.js
    Public.js
    PublicGoalList.js
    UserGoal.js

    Context
    UserProvider.js

    Back-end

    Routes
    authRouter.js
    userRouter.js
    goalRouter.js

    Models
    user.js
    goal.js
















Schemas

User Schema

{
        username: {
        type: String,
        required: True,
        unique: True,
        lowercase: True
    },
        password: {
        type: String,
        required: True,
    },
        firstName: {
        type: String,
        required: True
    },
    isAdmin: {
        type: Boolean, 
        default: false
    }
}


Goal Schema

{
        title: {
        type: String,
        required: True
    },
        notes: {
        type: String
    }
        isCompleted: {
        type: Boolean,
        default: false
    }
}
# Yearly-App
