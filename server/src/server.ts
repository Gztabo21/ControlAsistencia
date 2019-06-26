import "reflect-metadata";
import {createConnection} from "typeorm";
//import
import schema from "./schema/schema" ;
import * as express from 'express';
import * as graqhlHttp from 'express-graphql';
//entity
import {user} from "./entity/user";
import { Server } from "tls";


const { ApolloServer, gql } = require('apollo-server');
const port = 4000;

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "124578",
    database: "attendanceControls",
    entities: [
        user
    ],
    synchronize: true,
    logging: false
}).then(connection => {

  
  const server = new ApolloServer({
    schema
  }); 
server.listen(port,"0.0.0.0").then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

    // here you can start to work with your entities
}).catch(error => console.log(error));
