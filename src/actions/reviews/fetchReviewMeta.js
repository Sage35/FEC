import TOKEN from '../../../config.js';
import axios from 'axios';
import showReviewMeta from './showReviewMeta.js';
import store from '../../store/store.js';

var fetchReviewMeta = (productId) => {
  return (dispatch) => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/?product_id=${productId}`, {
      headers: {
        'AUTHORIZATION': TOKEN
      }
    })
      .then(({data}) => {
        dispatch(showReviewMeta(data))
      })
      .catch((err) => {
        console.log(err)
      });
  }
}


  export default fetchReviewMeta