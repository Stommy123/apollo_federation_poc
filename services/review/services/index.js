import { reviews } from '../../../data';

class ReviewService {
  findById = id => {
    const review = reviews.find(u => u.id === id);

    return review || null;
  };

  listAll = _ => ({ count: reviews.length, reviews });

  listByUser = userId => {
    const userReviews = reviews.filter(r => r.userId === userId);

    return userReviews;
  };

  listByProduct = productId => {
    const productReviews = reviews.filter(r => r.productId === productId);

    return productReviews;
  };
}

export default ReviewService;
