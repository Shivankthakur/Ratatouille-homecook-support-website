import React from 'react';
import PropTypes from 'prop-types';
// import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { category, name, price, description }
}) => (
  <div>
    <p>
      <strong>Dish Name: </strong> {name}
    </p>
    <p>
      <strong>Cuisine: </strong> {category}
    </p>
    <p>
      <strong>Price: </strong> {price}
    </p>
    <p>
      <strong>About Dish: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
