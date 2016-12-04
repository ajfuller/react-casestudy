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
    <div style={{ color: 'red' }}>{props.overallRating}</div>
    <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{props.title}</div>
    <div style={{ fontSize: '12px' }}>{props.review}</div>
    <span style={{ fontSize: '15px', marginRight: '10px' }}>{props.screenName}</span>
    <span style={{ fontSize: '15px' }}>{formatDate(props.datePosted)}</span>
  </div>
);

ReviewItem.propTypes = {
  overallRating: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  title: React.PropTypes.string,
  review: React.PropTypes.string,
  screenName: React.PropTypes.string,
  datePosted: React.PropTypes.string,
};

export default ReviewItem;
