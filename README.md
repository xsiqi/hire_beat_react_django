# hire_beat_react_django

This README is intended for programmers who already have experience with React or Django.

### To run the website locally:

1. Set up your environment. install python3, pip3, virtualenv. Then in your virtualenv, install django, node, postgresql.
2. Git clone the repo in your virtualenv.
3. Cd into the project(where there is a requirement.txt file) and run "pip3 install -r requirements.txt" to install all django related packages.
4. Then in the same folder(where there is a package.json file), run "npm install" to install all react related packages.
5. Replace the modified package. Cd into node_modules and remove the folder "react-s3-uploader", this is the official version. Cd into hirebeat/hirebeat and find a folder called "react-s3-uploader", this is the modified version which is used by our app. Run "cp react-s3-uploader ../node_modules/" to copy the folder.
6. Make sure postgresql is running and create a user. Put the username and password in database session of the django settings file.
7. Migrate database changes using "python3 manage.py migrate".
8. Run the app using "python3 manage.py runserver --insecure". (This --insecure flag is required as django debug mode is turned off)



### To enable console messages:

Comment out 

```
console.log = function () {};
console.error = function () {};
console.exception = function () {};
console.warn = function () {};
```

in hirebeat/frontend/src/index.js


Author:
dankleying
06/29/2020

