"use strict"

function queryCourses(db) {
  return function(req, res, next) {
    const courses = req.body.courses;
    if (courses && courses.length > 0) {
      db.course.batchGetCourses(courses, (err, data) => {
        if (err) {
          res.status(500).send()
        } else {
          res.status(200).json({data})
        }
      })
    } else {
      res.status(200).json({data: []})
    }
  }
}

module.exports = [queryCourses]