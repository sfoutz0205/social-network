const { User } = require('../models');

const userController = {

  // get all Users
  getAllUsers(req, res) {
    User.find({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // get single user
  getUserById({ params }, res) {
    User.findOne({ _id: params.id})
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  // create user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },

  // update user
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {new: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
  },

 // add friend
 addFriend({ params }, res) {
  User.findOneAndUpdate(
    {_id: params.userId },
    { $push: { friends: { friendId: params.friendId } } },
    { new: true }
  )
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found with this id!'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => res.json(err));
},

// remove friend
removeFriend({ params }, res) {
  User.findOneAndUpdate(
    { _id: params.userId },
    { $pull: { friends: { friendId: params.friendId } } },
    { new: true }
  )
  .then(dbUserData => res.json(dbUserData))
  .catch(err => res.json(err));
},
  // delete user
  removeUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!'});
          return;
        }
        res.json(dbUserData)
      })
      .catch(err => res.status(400).json(err));
  }
}

module.exports = userController;