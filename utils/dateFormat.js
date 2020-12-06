const moment = require('moment');

module.exports = (date) => {
  let formattedDate = moment(date).format('MM/DD/YYYY');
  return formattedDate;
};

