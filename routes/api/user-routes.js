const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  removeFriend, 
  removeUser
} = require('../../controllers/user-controllers');

const { create, update } = require('../../models/User');

//  /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// friends
router
.route('/:userId/friends/:friendId')
.put(addFriend)
.delete(removeFriend);

// /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(removeUser);

module.exports = router;