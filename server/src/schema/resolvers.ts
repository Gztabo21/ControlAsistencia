
import userController from '../controller/user-Controller';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import {user} from '../entity/user';


export const resolvers = {
    Query: {
        Users: () => userController.getUsers,
      },
}


// const users =  ;
// console.log(users)
  
  