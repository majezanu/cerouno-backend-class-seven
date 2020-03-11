import users from '../model/users';
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

const authorize = (username, password) => {

}

export default { getUsers, getUsersWithoutPass, authorize };