
import userController from '../controller/user-Controller';

export const resolvers = {
    Query: {
        Users: () => users,
      },
}

const users = userController.getUsers ;
console.log(users)
  
  