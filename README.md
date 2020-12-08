# Finding and Reporting Information Console
### By Team Cactus Terror :cactus: :ghost: - Fall 2020 

## In order to run FRIC you need: :woman technologist: :man technologist:

- [Node.js](https://nodejs.org/en/) 
- [Git-repo](https://github.com/lagutierrez13/FRIC-React)
- [MongoDB - Windows](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.2-signed.msi)

## After downloading and installing the next steps are:

This is to start the connection to the database. In this case we are using mongodb://127.0.0.1:27017/fricdb as out host connection. 

- To start the database use the following commands on the terminal (Windows)
```
md \data\db
```
```
"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath d:\test\mongodb\data
```
- To start the database 
```
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"
```
- To verify the connection
```
[initandlisten] waiting for connections on port 27017
```

- On the terminal navigate to FRIC-React/backend-fric-app and type the following command:
```
npm install -g nodemon

```
- After installing navigate to FRIC-React/backend-fric-app/src and type the following command:
```
nodemon index
```

- After starting the connection to the database, open a new shell window and navigate to FRIC-React/frontend-fric-app
```
npm install
```
- Then
```
npm start
```
- The previous step should automatically open your default browser and run FRIC and you should be good to go! :shipit:



