// dependancies
const { User } = require('../models');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get user by id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // update existing user
    async updateUser(req, res) {
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'User not found' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'User not found'});
            }

            res.json({ message: "User deleted!"})
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // add friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body.friend_id } },
                { runValidators: true, new: true }
                );

            if (!user) {
                res.status(404).json({ message: 'User not found'});
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete friend
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pullAll: { friends: [ { _id: req.params.friendId } ] } },
                { runValidators: true, new: true }
                );

            if (!user) {
                res.status(404).json({ message: 'User not found'});
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    }
};