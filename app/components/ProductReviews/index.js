import React from 'react';
import ReviewItem from './ReviewItem';

/* TODO: Extract some of these into more subcompnents */
const ProductReviews = ({ rating, totalReviews, pro = [], con = [] }) => (
  <div>
    <div>
      <span style={{ float: 'left' }}>{rating} overall rating</span>
      <span style={{ float: 'right' }}>{totalReviews} total reviews</span>
    </div>
    <div style={{ clear: 'both' }}>
      <h3>Pro</h3>
      <p>most helpful 4-5 star review</p>
      {
        pro.map((item, index) =>
           (
             <ReviewItem
               key={index}
               overallRating={item.overallRating}
               title={item.title}
               review={item.review}
               screenName={item.screenName}
               datePosted={item.datePosted}
             />
          )
        )
      }
      <h3>Con</h3>
      <p>most helpful 1-2 star reviews</p>
      {
        con.map((item, index) =>
           (
             <ReviewItem
               key={index}
               overallRating={item.overallRating}
               title={item.title}
               review={item.review}
               screenName={item.screenName}
               datePosted={item.datePosted}
             />
          )
        )
      }
    </div>
  </div>
);

const reviewShape = {
  overallRating: React.PropTypes.num,
  title: React.PropTypes.string,
  review: React.PropTypes.string,
  screenName: React.PropTypes.string,
  datePosted: React.PropTypes.string,
};

ProductReviews.propTypes = {
  rating: React.PropTypes.string,
  totalReviews: React.PropTypes.num,
  pro: React.PropTypes.arrayOf(reviewShape),
  con: React.PropTypes.arrayof(reviewShape),
};

export default ProductReviews;
