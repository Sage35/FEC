// import other actions you want to take place after the product has been changed
import TOKEN from '../../config.js';
import setProduct from './overview/setProduct.js';
import fetchStyles from './overview/fetchStyles.js';
import fetchRelated from './outfits/fetchRelated.js';
import store from '../store/store.js'
import thunk from 'redux-thunk';
import axios from 'axios';

var handleProductSelect = (productId) => {
  return (dispatch) => {

    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${productId}`, {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
    // add any dispatches that will re render your component out here. Make sure you chain it with a then if it is doing async request!
    .then(({data}) => {
      dispatch(setProduct(data));
    })
    .then(() => {
      dispatch(fetchStyles(productId));
    })
    .then(() => {
      dispatch(fetchRelated(dispatch));
    })
    .catch((err) => {
      console.log(err);
    })
  }

};


export default handleProductSelect;
