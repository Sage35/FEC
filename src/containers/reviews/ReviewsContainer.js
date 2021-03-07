import { connect, dispatch } from 'react-redux';
import fetchReviews from '../../actions/reviews/fetchReviews';
import fetchReviewMeta from '../../actions/reviews/fetchReviewMeta';
import Reviews from '../../components/reviews'


var mapStoreToProps = (state) => ({
  reviews: state.reviews,
  reviewMeta: state.reviewMeta
});

var mapDispatchToProps = (dispatch) => ({
  handleGetReviews: (productId, count, sort) => {
    dispatch(fetchReviews(productId, count, sort))
  },
  handleGetReviewMeta: () => {
    dispatch(fetchReviewMeta)
  }
});

var ReviewsContainer = connect(mapStoreToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;