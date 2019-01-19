const express = require('express');
const person = require('../controllers/person');
const router = express.Router();


/**
 * @api {post} /person Create person
 * @apiName Create
 * @apiGroup Person
 *
 * @apiParam {Object} body Form data.
 *
 * @apiSuccess {ObjectId}  -.id The ID.
 * @apiSuccess {String}  -.name The name.
 * @apiSuccess {Date}  -.createdDate The date of person creation.
 * @apiSuccess {String}  -.surname The surname.
 * @apiSuccess {String}  -.city The city.
 * @apiSuccess {String}  -.address The address.
 * @apiSuccess {String}  -.phone The phone number.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "5c41c92a223ca0335cf74161",
 *       "name": "John",
 *       "surname": "Doe",
 *       "createdDate": "2019-01-19T01:49:09.875Z",
 *       "city": "Montana",
 *       "address": "814 Matthews Court",
 *       "phone": "+1 (838) 555-777"
 *     }
 *
 * @apiError InternalServerError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "message": "Error message"
 *     }
 */

router.post('', async (req, res) => {
  try {
    const data = req.body;
    const result = await person.create(data);
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error}); 
  }
});




/**
 * @api {get} /person Get all persons
 * @apiName GetAll
 * @apiGroup Person
 *
 * @apiSuccess {[Object]}  -.response  Array of person documents.
 * @apiSuccess {ObjectId}  -.id The ID.
 * @apiSuccess {String}  -.name The name.
 * @apiSuccess {Date}  -.createdDate The date of person creation.
 * @apiSuccess {String}  -.surname The surname.
 * @apiSuccess {String}  -.city The city.
 * @apiSuccess {String}  -.address The address.
 * @apiSuccess {String}  -.phone The phone number.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": "5c41c92a223ca0335cf74161",
 *       "name": "John",
 *       "surname": "Doe",
 *       "createdDate": "2019-01-19T01:49:09.875Z",
 *       "city": "Montana",
 *       "address": "814 Matthews Court",
 *       "phone": "+1 (838) 555-777"
 *     }]
 *
 * @apiError InternalServerError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "message": "Error message."
 *     }
 */
router.get('', async (req, res) => {
  try {
    const result = await person.getAll();
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error});
  }
});




/**
 * @api {get} /person/:id Get one person
 * @apiName GetOne
 * @apiGroup Person
 *
 * @apiParam {String} id Person unique id.
 *
 * @apiSuccess {ObjectId}  -.id The ID.
 * @apiSuccess {String}  -.name The name.
 * @apiSuccess {Date}  -.createdDate The date of person creation.
 * @apiSuccess {String}  -.surname The surname.
 * @apiSuccess {String}  -.city The city.
 * @apiSuccess {String}  -.address The address.
 * @apiSuccess {String}  -.phone The phone number.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "5c41c92a223ca0335cf74161",
 *       "name": "John",
 *       "surname": "Doe",
 *       "createdDate": "2019-01-19T01:49:09.875Z",
 *       "city": "Montana",
 *       "address": "814 Matthews Court",
 *       "phone": "+1 (838) 555-777"
 *     }
 *
 * @apiError InternalServerError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "message": "Error message."
 *     }
 */
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await person.getOne(id);
    res.send(result)
  } catch(error) {
    res.status(500).send({message: error});
  }
});




/**
 * @api {delete} /person/:id Delete person
 * @apiName Remove
 * @apiGroup Person
 *
 * @apiParam {String} id Person unique id.
 *
 * @apiSuccess {Boolean}  -.true true.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     true
 *
 * @apiError InternalServerError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "message": "Error message."
 *     }
 */
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await person.remove(id);
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error});
  }
});






/**
 * @api {patch} /person/:id Update person
 * @apiName Update
 * @apiGroup Person
 *
 * @apiParam {String} id Person unique id.
 * @apiParam {Object} body Form data.
 *
 * @apiSuccess {ObjectId}  -.id The ID.
 * @apiSuccess {String}  -.name The name.
 * @apiSuccess {Date}  -.createdDate The date of person creation.
 * @apiSuccess {String}  -.surname The surname.
 * @apiSuccess {String}  -.city The city.
 * @apiSuccess {String}  -.address The address.
 * @apiSuccess {String}  -.phone The phone number.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "5c41c92a223ca0335cf74161",
 *       "name": "John",
 *       "surname": "Doe",
 *       "createdDate": "2019-01-19T01:49:09.875Z",
 *       "city": "Montana",
 *       "address": "814 Matthews Court",
 *       "phone": "+1 (838) 555-777"
 *     }
 *
 * @apiError InternalServerError Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "message": "Error message."
 *     }
 */
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await person.update({id, data});
    res.send(result);
  } catch(error) {
    res.status(500).send({message: error});
  }
});


module.exports = router;