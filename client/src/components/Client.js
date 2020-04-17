import axios from "axios";

const getURL = require("../keys").restGetURL;

/* eslint-disable no-undef */
function search(filterer, query, cb) {
  return axios
    .get(getURL)
    .then(checkStatus)
    .then((res) => {
      let result = [];
      res.data.forEach((req) => {
        if (req[filterer].toLowerCase().includes(query.toLowerCase())) {
          result.push(req);
        }
      });
      return result;
    })
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

const Client = { search };
export default Client;
