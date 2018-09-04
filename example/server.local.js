"use strict"

require('dotenv').config()

const db = require('database-test-helper')
const coursedb = require('coursedb-test-helper')

db.start().add({coursedb}).init(() => {
  const app = require('./app.local')
  const PORT = process.env.PORT_LOCAL_COURSE || 3212;
  const httpServer = require('http').createServer(app);
  httpServer.listen(PORT)
  console.log(`\n# COURSE-SERVICES is running at http://localhost:${PORT}\n`);
});