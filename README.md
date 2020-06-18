# Todo-App

## To Start:

### Install the required packages by the following command:

```
npm run dependencies
```

### In the `server` folder, create `nodemon.json` file to store the `environment variables` of the backend that contains the following syntax:

```
{
  "env": {
    "MONGO_URI": "<mongodb database uri>",
    "JWT_SECRET": "<jsonwebtoken secret>"
  }
}
```

### Run the following command to start the app in the development mode:

```
npm run dev
```

### Combined deployment of both frontend and backend on one server of `Heroku`:

https://todo-app2020.herokuapp.com/
