var express = require('express');
var router = express.Router();

 // All actual paths start with "/skills"

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

 // GET /skills
 router.get('/', skillsCtrl.index);
 //GET /skills/new
 router.get('/new', skillsCtrl.new)
 // GET /skills/:id
 router.get('/:id', skillsCtrl.show);
 //POST /
 router.post('/', skillsCtrl.create);
 //DELETE
 router.delete('/:id', skillsCtrl.delete);
 module.exports = router;