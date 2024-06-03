# cs35l-group26

## How to run the App

### Get code

Clone repository. You can do this easily through Github Desktop.

First, let's setup the front-end:

`cd` into `wordle-clone` and install requirements (npm needs to be installed)

```shell
cd ./wordle-clone
npm install
npm i -D react-router-dom
```

Next, let's setup the back-end

`cd` into `backend` and install requirements:

```shell
cd backend
npm install express
npm install mongoose validator bcrypt jsonwebtoken multer
```

### Running Front-end Server

Verify you are in the project directory `wordle-clone`. Run:

```shell
npm run dev
```

This will give you a link to a locally hosted server you can access from your browser.

### Back-end

Verify you are in the `backend`. Run:

```shell
npm run dev
```




