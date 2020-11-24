# Todo-App

![TodoApp Demo](./assets/todoapp-demo.gif)

## To Start:

#### Install the required packages by the following command:

```
npm run dependencies
```

#### In the `server` folder, create `nodemon.json` file to store the `environment variables` of the backend that contains the following syntax:

```
{
  "env": {
    "MONGO_URI": "<mongodb database uri>",
    "JWT_SECRET": "<jsonwebtoken secret>"
  }
}
```
#### In the `client` folder, create `.env` file to store the `environment variables` of the frontend that contains the following syntax:

```
REACT_APP_BACKEND_URL=<your backend server url>/api
```

#### Run the following command to start the app in the development mode:

```
npm run dev
```

#### Combined deployment of both frontend and backend on one server of `Heroku`:

https://todo-app2020.herokuapp.com/
