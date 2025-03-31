const User = require('../model/UserModel');
const mongoose = require('mongoose');

const getUser = async (id) => {

    if (!mongoose.Types.ObjectId.isValid(id))
        return { error: 'Invalid User ID' };

    try {
        const user = await User.find({ _id: id, age: { $gt: 21 } });

        if (!user) {
            return { error: 'User not found or under 21' };
        }

        return user;
    } catch (error) {
        console.error('Error retrieving user:', error);
        return { error: 'Internal Server Error' };
    }
};

module.exports = { getUser };