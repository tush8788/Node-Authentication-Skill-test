# Node-Authentication-Skill-test
Creating a complete authentication system which can be used as a starter code for creating any new application

##Functionality
1. Sign up with email
2. Sign in (you can redirect to a blank home page with a sign out and reset password button after sign in)
3. Sign out
4. Reset password after sign in
5. The password stored in the db should be encrypted
6. Google login/signup (Social authentication)
7. Display notifications for
  I. unmatching passwords during sign up
  II. sign up user
  II. incorrect password during sign in
  III. sign in user
  IV. reset password 
  V. old password not match 
  VI. google user not change password
  VII. sucessfully reset password
  VIII. sucessfully signout
  
##Tools 
1. Node Js  v-16.18.0
2. Express Js
3. Mongodb  v-5.0.13
4. Mongoose
5. Ejs 
6. Bootstrap 5
7. bcrypt (for incript and decript password)
8. passport local (for authentication purpose)
9. passport-google-oauth (for google authentication)
10. express-session (for create,incript and store cookie)
11. connect-mongo (for storing cookie inside db)
12. connect-flash and noty (for display notification)


##Setup in Local System

1. git clone https://github.com/tush8788/Node-Authentication-Skill-test.git
2. open command prompt and Type 'npm install' for download all dependencies
3. then just "npm start"/ if npm start is not work just run this command 'node index.js'
4. then go localhost:8000


## This Site is hosted on cyclic.sh
1. Access link "https://teal-handsome-fawn.cyclic.app/"



##Screen Short
1. Sign In Page

![plot](./screenshort/signinpage.png)

2. Sign Up Page

![plot](./screenshort/signuppage.png)

3. Continue with Google

![plot](./screenshort/googleSignInandup.png)

4. Profile page

![plot](./screenshort/profilepage.png)

5. Reset Password

![plot](./screenshort/resetpassword.png)
