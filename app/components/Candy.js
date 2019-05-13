import React from 'react';

const Candy = props => (
  <div className="candy container">
    <div className="candy image">
      <img src={props.imageUrl} />
    </div>
    <div className="candy all info">
      <div className="candy basic info">
        <div className="candy title">{props.name}</div>
        <div className="candy quantity">{props.quantity}</div>
      </div>
      <div className="candy more info">
        <div className="candy desc">{props.description}</div>
      </div>
    </div>
  </div>
)
export default Candy;
