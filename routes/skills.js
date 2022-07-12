var express = require('express');
var router = express.Router();

 // All actual paths start with "/skills"

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

 // GET /skills
 router.get('/', skillsCtrl.index);
module.exports = router;
// GET /skills/:id
router.get('/:id', skillsCtrl.show);