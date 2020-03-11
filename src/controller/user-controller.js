import userService from '../service/user-service';

const getUsersList = (req, res) => {
    let users = userService.getUsers();
    res.send(users);
}

const getUsersWithoutPass = (req, res) => {
    let users = userService.getUsersWithoutPass();
    res.send(users);
}

export default { getUsersList, getUsersWithoutPass };