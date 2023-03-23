const { noticesServices } = require('../../services');
const { utils } = require('../../services');

const getFavoriteNotices = async (req, res) => {
  const { page, limit, searchQuery } = req.query;
  const userId = req.user;

  const paginationData = utils.parsePagination(page, limit);

  const notices = await noticesServices.getUserNoticesBySearchQuery(
    false,
    searchQuery,
    userId,
    paginationData
  );

  res.json(notices);
};

module.exports = getFavoriteNotices;
