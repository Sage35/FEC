import axios from 'axios';
import showReviewMeta from './showReviewMeta.js';
import store from '../../store/store.js';
const server = process.env.SERVER_IP || 'localhost:3000';

var fetchReviewMeta = (productId) => {
  return (dispatch) => {
    axios.get(`http://${server}/reviews/meta/?product_id=${productId}`)
      .then(({data}) => {
        dispatch(showReviewMeta(data))
      })
      .catch((err) => {
        console.log(err)
      });
  }
}

export default fetchReviewMeta;