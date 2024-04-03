const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");

exports.createUser = async (username, email, password, role) => {
  const user = await Users.create({
    username,
    email,
    password,
    role,
  });
  return user;
};

exports.login = async (username, password) => {
  const user = await Users.findOne({ where: { username } });

  if (!user) {
    throw new AppError(`Authentication failed`, 401);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError(`Authentication failed`, 401);
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  const refreshToken = jwt.sign(
    { userId: user.id, username: user.username, role: user.role },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "2h" }
  );

  return { token, refreshToken };
};

exports.getUsers = async () => {
  const users = await Users.findAll();
  return users;
};

exports.getUserById = async (id) => {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new AppError(`User not found`, 404);
  }
  user.password = undefined;
  return user;
};

exports.updateUser = async (id, username, email, role, password) => {
  // try {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new AppError(`User with id ${id} not found`, 404);
    // return { errorCode: 404, errorMessage: `User with id ${id} not found` };
  }
  user.username = username;
  user.email = email;
  user.password = password;
  user.role = role;
  return await user.save();
  // } catch (error) {
  //   return { errorCode: 400, errorMessage: error.message };
  // }
};

exports.deleteUser = async (id) => {
  // try {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new AppError(`User with id ${id} not found`, 404);
    // return { errorCode: 404, errorMessage: `User with id ${id} not found` };
  }
  return await user.destroy();
  // } catch (error) {
  //   return { errorCode: 400, errorMessage: error.message };
  // }
};

exports.refreshAuthToken = async (refreshToken) => {
  const decodedToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  const user = await Users.findByPk(decodedToken.userId);

  if (!user) {
    return res.status(401).json({
      message: "Authentication failed",
    });
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  return token;
};
