"use strict"

function queryCourses(db) {
  return function(req, res, next) {
    const courses = req.body.courses;
    console.log(courses);
    res.status(200).json({msg: 'ok'})
  }
}

module.exports = [queryCourses]