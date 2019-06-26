import {getManager} from "typeorm";
import { user } from "../entity/user"

class UserController{
    public async addUser(req, res) {       
        let User = req.body;
        let manager = getManager();
        await manager.save(user,User);
        res.status(200).json(user);
    }
    public async getUsers(req, res) {
        let manager = getManager();
        let Users = await manager.find(user);
        // console.log(Users);
        // res.status(200).json({ results: { comapny } });
         res.status(200).json(Users);

    }

    public async getUser(req, res) {
        let UserId=req.params.id;
        let manager = getManager();
        let countries = await manager.find(user,UserId);
        res.status(200).json(user);
    }


     public async deleteUser(req, res) {
        let UserId = req.params.id;
        let manager = getManager();
        let resp = await manager.delete(user, UserId);
        let User = { CountryId: 0 };
        res.status(200).json('ok');
        }

    public async updateUser(req, res) {        
        let UserId=req.params.id;
        let User= req.body;
        User.CountryId=parseInt(UserId);
        let manager = getManager();
        await manager.save(user,User);
        res.status(200).json('ok');
     }


}
export default new UserController();