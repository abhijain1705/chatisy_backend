const express = require("express");
const routes = express.Router();
const { AddUser, LoginUser, UpdateUser, getUsers } = require("../controllers/userContoller");

routes.post("/login", LoginUser);
routes.post("/signup", AddUser);
routes.post("/update", UpdateUser);
routes.get("/users/:name", getUsers);

module.exports = routes;
