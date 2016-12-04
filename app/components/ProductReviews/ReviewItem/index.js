import React from 'react';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

const ReviewItem = (props) => (
  <div>
    <div>{props.overallRating}</div>
    <div>{props.title}</div>
    <div>{props.review}</div>
    <div>{props.screenName}</div>
    <div>{formatDate(props.datePosted)}</div>
  </div>
);

ReviewItem.propTypes = {
  overallRating: React.PropTypes.num,
  title: React.PropTypes.string,
  review: React.PropTypes.string,
  screenName: React.PropTypes.string,
  datePosted: React.PropTypes.string,
};

export default ReviewItem;
