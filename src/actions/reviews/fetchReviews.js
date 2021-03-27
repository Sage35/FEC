import axios from 'axios';
import showReviews from './showReviews.js';
import store from '../../store/store.js';
const server = process.env.SERVER_IP || 'localhost:3000';

var fetchReviews = (productId, count = 2, sort = 'relevant', filter = []) => {
  return (dispatch) => {
    axios.get(`http://${server}/reviews/?product_id=${productId}&count=${count}&sort=${sort}`)
      .then(({data}) => {
        if (filter.length > 0) {
          data.results = data.results.filter(element => filter.indexOf(element.rating) >= 0)
        }
        dispatch(showReviews(data, count, sort, filter))
      })
      .catch((err) => {
        console.log(err, 'err')
      });
  }
}

export default fetchReviews;