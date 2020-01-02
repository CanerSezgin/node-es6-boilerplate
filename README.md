# Node ES6 REST API Boilerplate

Boilerplate for ES6 Node.JS web APIs, structured by self-contained components.

### Features

- **_ES6_** <br>
  With [Babel](https://babeljs.io/), you can use ES6 syntaxes in your code. Ready to use development/production. <br>
  (Package.json Script details are below)

- **_Self Contained Components_** <br>
  Most of the projects use **MVC like** design pattern, but within microservice architecture getting started having a corner on the market, this pattern becomes insufficient in some points. This is why this boilerplate includes **self-contained components** structure.
  <br> [More](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)

- **_DB Integration_** <br>
  MongoDB with mongoose is waiting you to use it. However if you are not a fan of MongoDB, any DB can be easily integrated. Boilerplate includes separated file for DB integration&start.

- **_Linter_** <br>
  It includes also [ESLint](https://www.npmjs.com/package/eslint) for ensuring code style. ESLint can find problems and automatically fix most of them. You can easily customize your lint rules by updating **.eslintrc**

- **_Configurations_** <br>
  [Config](https://www.npmjs.com/package/config) is used for hierarchical configurations for your app deployments.

### Best Practices

#### Project Structure

- Don't use MVC design pattern. Use Components !
  The main idea behind this, we should keep all related files to one component (such as: controller, model, service) under same folder. This approach perfectly fits microservice patterns. <br>
  [Read More](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md)

- Don't put everything inside **app.js**
  Use modular approach for default initializations such as express, routes, db
  `expressLib(app); routes(app);`

#### Error Handling

* The project contains custom ErrorHandler which's inherited from built-in Error class. You can easily update this custom ErrorHandler according your needs.
For your controller you don't need to add anything, just use the same structure.

```
catch (error) {
  next(error);
}
```

And in your services, you will just throw error.
`throw new ErrorHandler(400, "couldn't fetch data", true);`

* Distinguishing operational vs programmer errors will minimize your app downtime and helps avoid crazy bugs. <br>
[Read More](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/operationalvsprogrammererror.md)

### Scripts

##### Remove dist folder
`npm run clean`

##### Babel Production ready compilation.
`npm run build`

##### Sets NODE_ENV=development, with nodemon all files changes are watched and automatically rebuild during development.
`npm run dev`

##### NODE_ENV=production, it is used under production mode.
`npm run start`

##### Run eslint with all files
`npm run lint`

##### Eslint tries to fix some errors & warnings
`npm run lint:fix`

### Install & Run

##### Install Modules

`npm install`

##### run your db & update config/default.json

If you want to use mongoDB with docker: <br>
`docker run --rm --name mymongo -d -p 27017:27017 -v ~/docker/volumes/mongo:/data/db mongo`

##### Run Development Mode

`npm run dev`

##### Run Production Mode

`npm run start`
