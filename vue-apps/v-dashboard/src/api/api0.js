import axios from 'axios';

const csrftokenElement = document.getElementsByName('csrfmiddlewaretoken')[0];
let csrftoken = null;
if (csrftokenElement !== undefined) {
  csrftoken = csrftokenElement.value;
}
axios.defaults.headers.post['X-CSRFToken'] = csrftoken;
axios.defaults.headers.delete['X-CSRFToken'] = csrftoken;

const API = {
  getOSIMapToken() {
    return axios.get('api/osi-token');
  },
  getAddressPointTotals(payload) {
    return axios.post('api/address-point-totals', payload);
  },
  getAddressPointTotalsPerDataAddition(payload) {
    return axios.post('api/address-point-totals-per-data-addition', payload);
  },
  getUserDataset() {
    return axios.get('datasets-api/list');
  },
  downloadDataset(datasetId) {
    axios.responseType = 'blob';
    return axios
      .post(
        'datasets-api/download-dataset',
        {
          datasetId,
          extension: 'xlsx', // To allow user to select which file type [csv, xlsx]
          asZip: false, // To allow user to zip
        },
        { responseType: 'blob' },
      )
      .then((response) => {
        const blob = new Blob([response.data], {
          type: `${response.headers.mime_type};charset=utf-8`,
        });
        // XXX check compatability with IE!
        FileSaver.saveAs(blob, response.headers.filename);
      });
  },
  getInvoiceDetails(datasetId) {
    return axios.post('datasets-api/get-invoice-details', {
      datasetId,
    });
  },
  changeDatasetTitle(payload) {
    return axios.post('/datasets-api/change-dataset-title', payload);
  },
  getWhereNext(payload) {
    return axios.post('/api/where-next', payload);
  },
  processPayment(payload) {
    return axios.post('api/credit-payment-details', payload);
  },
  getSessionData() {
    return axios.post('/api/get-session-data');
  },
  getLogin() {
    return axios.get('/accounts/login/');
  },
  getEcommerceUser() {
    return axios.get('/api/ecommerce-user');
  },
  getTowns() {
    return axios.get('/api/towns');
  },
  getTownlands() {
    return axios.get('/api/townlands');
  },
  getCities() {
    return axios.get('/api/cities');
  },
  getCounties() {
    return axios.get('/api/counties');
  },
  getDistricts() {
    return axios.get('/api/dublin-districts');
  },
  getResidentialFilters() {
    return axios.get('/api/residential-filters');
  },
  getBusinessFilters() {
    return axios.get('/api/business-filters');
  },
  getActivePricingPlan() {
    return axios.get('/api/get-active-pricing-plan');
  },
  redirectHome(payload) {
    return axios.post('api/redirect-to-homepage', payload);
  },
  redirectToDatasets(payload) {
    const JSONpayload = JSON.stringify(payload);
    return axios.post('api/redirect-to-datasets', JSONpayload);
  },
  redirectToCreditConfirmation(payload) {
    const JSONpayload = JSON.stringify(payload);
    return axios.post('api/redirect-to-credit-confirmation', JSONpayload);
  },
  redirectToEnhancements(payload) {
    return axios.post('api/redirect-to-enhancements', payload);
  },
  isPaymentAccurateForQuery(payload) {
    return axios.post('api/is-payment-accurate-for-query', payload);
  },
};

export default API;
