const userService = require('../service/user.service');

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userService.getUser(id);
        if (user.error) {
            return res.status(404).json({ error: user.error });
        }
        res.json(user);
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getUser };