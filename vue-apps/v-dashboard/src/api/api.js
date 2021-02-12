import axios from 'axios';

const csrftokenElement = document.getElementsByName('csrfmiddlewaretoken')[0];
let csrftoken = null;
if (csrftokenElement !== undefined) {
  csrftoken = csrftokenElement.value;
}
axios.defaults.headers.post['X-CSRFToken'] = csrftoken;
axios.defaults.headers.delete['X-CSRFToken'] = csrftoken;

const API = {
  get() {
    return axios.get('api/osi-token');
  },
};

export default API;
