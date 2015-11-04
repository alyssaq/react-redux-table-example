import keymirror from 'keymirror'

export default {
  // nutrient ids from SR28 docs
  // http://www.ars.usda.gov/sp2UserFiles/Place/80400525/Data/SR/SR28/sr28_doc.pdf
  NUTRIENTS: [208, 205, 203, 204, 269, 291, 303],
  USDA_NUTRIENTS_URL_WITH_APIKEY: 'http://api.nal.usda.gov/ndb/nutrients?' +
    'api_key=uFKMsZENr1ZUZEIDu5CYzA8UeVERm57BEZj2jBK1',

  ACTIONS: keymirror({
    REQUEST_NUTRIENTS_DATA: null,
    RECEIVE_NUTRIENTS_DATA: null,
    FILTER_NUTRIENTS_DATA: null,
    SORT_NUTRIENTS_DATA: null,

    SET_ERROR_MESSAGE: null,
    RESET_ERROR_MESSAGE: null
  })
}
