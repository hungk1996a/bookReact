const SearchId = require('../Search/SearchId');
const SearchAdvance = require('../Search/SearchAdvance');
const SearchBasic = require('../Search/SearchBasic');

module.exports = (req, res, next) => {
  req.condition = makeCondition(req);
  next();
};
function makeCondition(req) {
    if(req.path === '/search-advance') {
        return new SearchAdvance(req.query.title, req.query.name, req.query.phone)
    }else if (req.path === '/search-basic') {
        return new SearchBasic(req.query.keyword)
    }else if (req.path.toString().startsWith('/book')) {
        return new SearchId(req.params.id)
    }
}