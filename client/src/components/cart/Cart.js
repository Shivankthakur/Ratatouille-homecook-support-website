import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
// import ProfileTop from '../profile/ProfileTop';
// import ProfileAbout from '../profile/ProfileAbout';
import ProfileExperience from '../profile/ProfileExperience';
import { getProfileById, clearExperience } from '../../actions/profile';
// import { getProfiles } from '../../actions/profile';


const Cart = ({ getProfileById, clearExperience, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, clearExperience, match.params.id]);

  const clearCart = () => {
    console.log(`Clearing isCart`)
    // profile.experience.forEach((exp, i, array) => {
    //   if (exp._id.toString() === id) {
    //     console.log(`${id}.isCart = ${exp.isCart}`)
    //     profile.experience[i].isCart = true;
    //     console.log(`${id}.isCart = ${exp.isCart}`)
    //   }
    // });
    // console.log("BEFORE");
    // console.log(profile.experience);
    // profile.experience.forEach(
    //   (exp, i, array) => {
    //     exp.isCart = true;
    //   }
    // );
    // console.log("AFTER");
    // console.log(profile.experience);
    clearExperience();
    console.log(`Cleared!`)
  }

  let flag = false;
  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profile-exp bg-white p-2">
            <h2 className="text-primary">Cart</h2>
            {
              profile.experience.forEach((exp, i, array) => {
                if (array[i].isCart===true) {
                  flag = true;
                }
              })
            }
            {flag === true ? (  
              <Fragment>
                {profile.experience.map((experience) => (
                  <>
                    {
                    experience.isCart === true && 
                    <ProfileExperience
                      key={experience._id}
                      experience={experience}
                    />      
                    }
                  </>
                ))}
                <button onClick={clearCart}>Clear Cart</button>
              </Fragment>
            ) : (
              <>
              <h4>Cart is Empty</h4>
              <br />
              <Link to="/profiles" className="btn btn-primary">
                Back To Shops
              </Link>
              </>
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
