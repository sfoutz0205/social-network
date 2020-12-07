const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controllers');

// get all thoughts - '/'
router.route('/').get(getAllThoughts);

// add thought -  /thoughts/<userId>
router
.route('/:userId')
.post(addThought);

// remove thought || add reaction - /thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .get(getThoughtById)
  .put(addReaction)
  .delete(removeThought)

  // remove reaction - /thoughts/<userId>/<thoughtId>/<reactionId>
  router.route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;