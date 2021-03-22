import axios from 'axios';
import fetchReviews from './fetchReviews.js';
import store from '../../store/store.js';

var addReview = (productId, count = 2, sort = 'relevant', rating, summary, body, recommend, name, email, photos, characteristics) => {
  console.log(productId, count, 'addReviews')
  return (dispatch) => {

    axios({
      method: 'post',
      url: `http://${process.env.SERVER_IP}:3000/reviews/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        product_id: productId,
        rating: rating,
        summary: summary,
        body: body,
        recommend: recommend,
        name: name,
        email: email,
        photos: photos,
        characteristics: characteristics
      }

    }).then((res) => {
      console.log(res, 'res');
      if (res.status === 201) {
        alert('Review Submitted', res.status);
      } else {
        alert ('Review Submission Error', res.status);
      }

       fetchReviews(productId, count, sort);
      })
      .catch((err) => {
        console.log(err, 'err')
        alert ('Review Submission Error');
      });
  }
}

export default addReview;