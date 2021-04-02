import React, { useState } from 'react';

import makeStyles from '@material-ui/styles/makeStyles';
import { buttonStyles } from '../../styles';

export const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    '& textarea': {
      fontFamily: 'poppins, sans-serif',
      borderRadius: '6px',
      width: '80%',
      height: '180px',
      outline: 'none',
      border: '2px solid #f0f0f0',
    },
    '& button': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '2rem',
      width: '20%',

      '&:hover': {
        opacity: '.7',
      },
    },
  },
}));

const UserBioForm = ({ setUser }) => {
  const [bio, setBio] = useState('');
  const btnStyles = buttonStyles();
  const classes = styles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setBio('');
  };
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <textarea
        name="bio"
        type="text"
        placeholder="Add a biography to your profile"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button
        style={{ opacity: !bio ? '.7' : '1' }}
        disabled={!bio}
        className={`${btnStyles.root} ${btnStyles.active}`}
      >
        Submit
      </button>
    </form>
  );
};

export default UserBioForm;
