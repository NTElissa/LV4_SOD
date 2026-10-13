import user from '../module/userModule.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new user({ name, email, password });
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { getAllUsers, addUser };