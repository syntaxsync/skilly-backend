const fs = require("fs");

const path = require("path");

const AppError = require("./appError");

module.exports = async (pathOfFile) => {
  await fs.unlink(path.resolve(pathOfFile), (err) => {
    if (err) {
      next(new AppError(err.message), 500);
    }
  });
};