import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';
import { getProfileById, updateExperience } from '../../actions/profile';

const Profile = ({ getProfileById, updateExperience, profile: { profile }, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  const dishisCart = (pid, eid) => {
    console.log(`${pid}.${eid} changing isCart`)
    // profile.experience.forEach((exp, i, array) => {
    //   if (exp._id.toString() === id) {
    //     console.log(`${id}.isCart = ${exp.isCart}`)
    //     profile.experience[i].isCart = true;
    //     console.log(`${id}.isCart = ${exp.isCart}`)
    //   }
    // });
    updateExperience(pid, eid);
    console.log(`${pid}.${eid} changed!`)
  }

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Shops
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Shop
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary">Menu</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {profile.experience.map((experience) => (
                    <>
                      <button onClick={() => dishisCart(match.params.id, experience._id)}>Add</button>
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                      />      
                    </>
                  ))}
                  <Link to={`/cart/${match.params.id}`} className="btn btn-primary">
                    Go to Cart
                  </Link>
                </Fragment>
              ) : (
                <h4>No Menu Items</h4>
              )}
            
            </div>

            {/* <div className="profile-edu bg-white p-2">
              <h2 className="text-primary">Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {profile.education.map((education) => (
                    <ProfileEducation
                      key={education._id}
                      education={education}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No education credentials</h4>
              )}
            </div> */}

            {/* {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )} */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  updateExperience: PropTypes.func,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById, updateExperience })(Profile);
