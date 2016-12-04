
import React from 'react';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
  })
}

const ReviewItem = (props) => (
  <div>
    <div>{props.overallRating}</div>
    <div>{props.title}</div>
    <div>{props.review}</div>
    <div>{props.screenName}</div>
    <div>{formatDate(props.datePosted)}</div>
  </div>
)

const ProductReviews = ({ rating, totalReviews, pro = [], con = []}) => (
  <div>
    <div>
      <span style={{float: 'left'}}>{rating} overall rating</span>
      <span style={{float: 'right'}}>{totalReviews} total reviews</span>
    </div>
    <div style={{clear: 'both'}}>
      <h3>Pro</h3>
      <p>most helpful 4-5 star review</p>
      {
        pro.map((item, index) => {
          return (
            <ReviewItem
              key={index}
              overallRating={item.overallRating}
              title={item.title}
              review={item.review}
              screenName={item.screenName}
              datePosted={item.datePosted}
            />
          )
        })
      }
      <h3>Con</h3>
      <p>most helpful 1-2 star reviews</p>
      {
        con.map((item, index) => {
          return (
            <ReviewItem
              key={index}
              overallRating={item.overallRating}
              title={item.title}
              review={item.review}
              screenName={item.screenName}
              datePosted={item.datePosted}
            />
          )
        })
      }
    </div>
  </div>
)

export default ProductReviews;
