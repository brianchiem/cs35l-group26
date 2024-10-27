# cs35l-group26

### Built with the MERN stack: MongoDB, Express.js, React, Node.js
Images are being hosted with **Cloudinary**

## Mapping between members and commits
Username  Student Name

brianchiem  Brian Chiem 

slsww   Yinwei Sun

em568  Emilia Yuja Matute

tam-agotchi Tam Nguyen

## Render
App is now available online, hosted on Render. Due to the nature of the free plan, a login/signup attempt may take a few seconds as Render sleeps after some inactivity.

https://cs35l-group26-1.onrender.com

## How to run the App

### Get code

Clone repository.

First, let's setup the front-end:

`cd` into `wordle-clone` and install requirements (Node.js needs to be installed)

You will also need to install some packages that are used in our webstite

```shell
cd ./wordle-clone
npm install
npm i -D react-router-dom
npm install --save react-toastify
npm install react-icons --save
```

Next, let's setup the back-end

`cd` into `backend` and install requirements:

```shell
cd ..
cd backend
npm install express
npm install mongoose validator bcrypt jsonwebtoken multer cloudinary
```

# Running the Application 

### Running Front-end Server

Verify you are in the project directory `wordle-clone`. Run:

```shell
npm run dev
```

This will give you a link to a locally hosted server on `http://localhost:####` you can access from your browser.

### Back-end

In a different terminal, verify you are in the `backend` directory. Run:

```shell
npm run dev
```

## Notes
The backend database is hosted on MongoDB, and images are on Cloudinary. Currently just for this project, the "secret stuff" is still connected within this code for ease of use. Will replace with environment variables later.




