const express = require('express');
const router = express.Router();
const {
  ctrlWrapper,
  userValidation,
  validateBody,
} = require('../../middlewares');
const { petJoiSchema } = require('../../models');
const { addPet } = require('../../controllers/pets');
const { upload } = require('../../services');
const { getUserInformation, updateUser } = require('../../controllers/users');
const { userJoiEditSchema } = require('../../models');

router.get('/', userValidation, ctrlWrapper(getUserInformation));
router.post(
  '/pets',
  userValidation,
  upload.single('photo'),
  validateBody(petJoiSchema),
  ctrlWrapper(addPet)
);

router.patch(
  '/',
  userValidation,
  validateBody(userJoiEditSchema),
  ctrlWrapper(updateUser)
);

module.exports = { usersRouter: router };
