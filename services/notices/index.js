const getNoticeById = require('./getNoticeById');
const getNoticesByCategoryAndSearchQuery = require('./getNoticesByCategoryAndSearchQuery');
const getOwnNotices = require('./getOwnNotices');
const getUserNoticesBySearchQuery = require('./getUserNoticesBySearchQuery');
const getFavoriteNotices = require('./getFavoriteNotices');
const addNoticeToFavorites = require('./addNoticeToFavorites');
const addNotice = require('./addNotice');
const deleteOwnNotice = require('./deleteOwnNotice');
const deleteNoticeFromFavorites = require('./deleteNoticeFromFavorites');

module.exports = {
  getNoticeById,
  getNoticesByCategoryAndSearchQuery,
  getOwnNotices,
  getUserNoticesBySearchQuery,
  getFavoriteNotices,
  addNoticeToFavorites,
  addNotice,
  deleteOwnNotice,
  deleteNoticeFromFavorites,
};
