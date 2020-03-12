import userService from '../service/user-service';
import utils from '../utils/utils';

const getUsersList = (req, res) => {
    let users = userService.getUsers();
    res.send(users);
}

const getUsersWithoutPass = (req, res) => {
    let users = userService.getUsersWithoutPass();
    res.send(users);
}

const authorize = (req, res) => {
    const {username, password} = req.body;
    let canEnter = userService.canEnter(username, password);
    if(!canEnter) {
        res.status(401).send({error: 'Unauthorized'});
    } 
    const user = userService.getUSer(username);
    const token = utils.createToken(user);
    res.send({
        token
    });
}

export default { getUsersList, getUsersWithoutPass, authorize };