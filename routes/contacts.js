const express = require('express');
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contacts');

router.get('/', getAllContacts);
router.get('/:id', getContactById);

router.post('/', (req, res) => {
    /* #swagger.parameters['body'] = 
    { in: 'body',
      required: true,
      schema: { 
      firstName: 'Jesus', 
      lastName: 'Figueroa', 
      email: 'jesus@email.com', 
      favoriteColor: 'blue', 
      birthday: '01/01/2000' 
      } 
    }*/

    createContact(req, res)
});

router.put('/:id', updateContact);

router.delete('/:id', deleteContact);

module.exports = router;