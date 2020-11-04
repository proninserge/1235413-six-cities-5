import {MAX_REVIEWS_NUMBER} from '@constants';

const getSortedReviews = (reviews) => reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, MAX_REVIEWS_NUMBER);

export {getSortedReviews};
