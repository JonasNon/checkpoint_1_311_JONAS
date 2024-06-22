const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')


router.get('/users', usersController.list)

router.get('/users/:id', usersController.show)

router.post('/users', usersController.create)

router.put('/users/:id', usersController.change)

router.delete('/users/:id', usersController.remove)



module.exports = router


// * GET /users
//   * Return all users

// * GET /users/:id
//   * Return just the user that matches the path param (id)

// * POST /users
//   * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11

// * PUT /users/:id
//   * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

// * DELETE /users/:id
//   * Delete one user by its id