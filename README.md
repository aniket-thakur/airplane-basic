A Base node js project template. The template is build by keeping some of the most important code principals and project management recommendations.


`src` --> This folder has all the source code. This does not include any sort of tests . (Make separate tests folders).

Inside `src` folder:
`config` --> Any configuration or setup of a library or module will be done.
Eg: setting up `dotenv`  to store environment variab les. Other could be to setup logging library.

`routes` --> Register routes and the corresponding middleware and controllers to it.

`middleware` --> Intercept the incoming requests whre we can write our validators, autheticators.

`controllers` --> Last middleware as post that you will call the business logic layer to execute the business logic. In controllers we just receive the incoming requests, data and then pass it to business layer and once the bussiness layer returns an output, we structure the `API` response in controllers and send the output.

`repositories` -->Contains all the logic using which we interact the `databases` by wiritng queries, all the raw queries or `ORM`
 queries will go here.

 `services` --> It contains the business logic and interacts with repositories for data from the database.

 `utils` --> It contains the helper methods like error classes etc

 TO install the dependencies write the below command in terminal:
 ```
  npm install
 ```  

 `NOTE` --> In root directory add `.env` file and add `PORT` of your choice

 Example:
 ```
    PORT=3000
 ```
  Inside the `src/config`, excute the below command on termainal:
  ```
  npx sequelize init
  ```
  
  OR 


  Inside the `src/config` create a `config.json` and paste the below code in it.

 ```
    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

 ```
If setting up a development environment:
 write the `username`, `password` , `dialect` as the database you are using.

If setting up a test or production environment:
  same as above, but make sure to change the `host` with the hosted db url.

### --------------------------------------------------------------------------------------
To run the server
```
npx run dev

```
