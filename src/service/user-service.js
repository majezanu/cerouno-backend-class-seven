import users from '../model/users';
import utils from '../utils/utils';
const getUsers = () => {
    return users;
};

const getUsersWithoutPass = () => {
    const usersCopy = users.map(item => {
        const currentItem = {
            ...item
        };
        delete currentItem.password;
        return currentItem;
        
    });
    return usersCopy;
}

const canEnter = (username, password) => {
    let user = getUsers().find(user => user.username === username);
    return user && utils.matchHash(password, user.password) && user.active;
}

const getUSer = (username) => {
    return getUsers().find(user => user.username === username);
}

export default { getUsers, getUsersWithoutPass, canEnter, getUSer };