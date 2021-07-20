const axios = require('axios');

module.exports = async() => {
  const { data } = await axios.get(
    'https://app.fakejson.com/q/QT2xlEoD?token=9M6e6vtngpF3WJJt2GWw4Q'
  );

  return data;
};
 
