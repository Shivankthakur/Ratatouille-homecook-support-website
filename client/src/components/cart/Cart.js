import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from '../profile/ProfileTop';
import ProfileAbout from '../profile/ProfileAbout';
import ProfileExperience from '../profile/ProfileExperience';
import { getProfileById, clearExperience } from '../../actions/profile';
// import { getProfiles } from '../../actions/profile';


const Cart = ({ getProfileById, updateExperience, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  const clearCart = () => {
    console.log(`Clearing isCart`)
    // profile.experience.forEach((exp, i, array) => {
    //   if (exp._id.toString() === id) {
    //     console.log(`${id}.isCart = ${exp.isCart}`)
    //     profile.experience[i].isCart = true;
    //     console.log(`${id}.isCart = ${exp.isCart}`)
    //   }
    // });
    clearExperience();
    console.log(`Cleared!`)
  }

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Menu</h2>
            {profile.experience.length > 0 ? (
              <Fragment>
                {profile.experience.map((experience) => (
                  <>
                    {/* <button onClick={() => dishisCart(experience._id)}>Add</button> */}
                    {
                    experience.isCart === true && 
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />      
                    }
                  </>
                ))}
                <button onClick={() => clearCart()}>Clear Cart</button>
              </Fragment>
            ) : (
              <h4>Cart is Empty</h4>
            )}
          
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Cart.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  clearExperience: PropTypes.func,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById, clearExperience })(Cart);
