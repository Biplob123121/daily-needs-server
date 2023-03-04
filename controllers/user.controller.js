const Users = require('../models/user.model');

const createUser = async (req, res) => {
    try {
        const newUser = new Users({
            name: req.body.name,
            email: req.body.email
        })
        await newUser.save();
        res.status(201).json({ acknowledged: true, newUser });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getAllUser = async (req, res) => {
    try {
        const allUser = await Users.find();
        res.status(200).json(allUser);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await Users.findOne({ _id: req.params.id });
        user.role = 'admin';
        await user.save()
        res.status(200).json({ modified: true, user })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports = { createUser, getAllUser, updateUser }