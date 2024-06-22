const sampleUser = require("../data/sampleUser");
const users = require("../data/index")


const list = (req, res) => {
  res.json(users)
}

const show = (req, res) => {
  const id = req.params.id
  if (users[id - 1] == undefined) {
    console.log("ERROR 400 NO USER FOUND")
  } else {
    res.json(users[id - 1])
  }
}

const create = (req, res) => {
  users.push(req.query)
  users[users.length-1] = {"_id":users.length, ...users[users.length-1]}
  console.log(users[users.length-1])
  return res.json(users[users.length-1])
}

const change = (req, res) => {
  const id = req.params.id
  if (users[id - 1] == undefined) {
    console.log("ERROR 400 NO USER FOUND")
  } else {
    for (key in req.query) {
      console.log(key)
      users[id - 1][key] = req.query[key]
    }
  }
  res.json(users[id - 1])
}

const remove = (req, res) => {
  let id = req.params.id
  let toBeRemoved = users.find(obj => obj.id == id);
  if (toBeRemoved != undefined) {
    id = users.indexOf(toBeRemoved)
    users.splice(id, 1)
  } else {
    console.log("ERROR 404 NO USER FOUND")
  }
  return res.json(users)
}


module.exports = { list, show, create, change, remove }



// * listUsers
//   * Should retrieve the entire array from _data/index_

// * showUser
//   * Should retrieve just the user that matches the passed-in id

// * createUser
//   * Should add a user to the array

// * updateUser
//   * Should update one user in the array based on its id

// * deleteUser
//   * Should delete one user from the array based on its id