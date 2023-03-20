const express = require("express");
const router = express.Router();
const {  ctrlWrapper, validateQueryParams, userValidation } = require('../../middlewares');
const ctrl = require('../../controllers/notices');
const { noticesQueryParam} = require("../../models");


router.get('/category/:category', validateQueryParams(noticesQueryParam), ctrlWrapper(ctrl.getNoticesByCategory));
// створити ендпоінт для отримання оголошень по категоріям 
router.get('/favorites', userValidation,validateQueryParams(noticesQueryParam), ctrlWrapper(ctrl.getFavoriteNotices));
// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
router.get('/own', userValidation,validateQueryParams(noticesQueryParam), ctrlWrapper(ctrl.getOwnNotices));
// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
router.get('/notice/:id', ctrlWrapper(ctrl.getNoticeById));
// створити ендпоінт для отримання одного оголошення


// router.get('/search', ctrlWrapper(getNoticeByTitleCtrl));
// створити ендпоінт для пошуку оголошеннь по заголовку
router.post('/new', userValidation, ctrlWrapper(ctrl.addNotice));
// створити ендпоінт для додавання оголошень відповідно до обраної категорії
// router.delete('/own/:id', authMdw, ctrlWrapper(deleteOwnNoticeCtrl));
// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем 

 router.patch('/favorite/:id', userValidation, ctrlWrapper(ctrl.addNoticeToFavorites)); 
// створити ендпоінт для додавання оголошення до обраних
// router.delete('/favorite/:id', authMdw, ctrlWrapper(deleteNoticeFromFavoriteCtrl));
// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних

module.exports = router;
