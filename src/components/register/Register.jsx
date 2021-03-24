import React, { useState } from 'react';

import AuthFields from './authfields/AuthFields';
import ProfileFields from './profilefields/ProfileFields';
import SubmissionSuccessModal from './submission-success-modal/sumission-success-mobile';

import { MobileStepper } from '@material-ui/core';
import { styles } from './Register.styles';
import { cardStyles } from '../../styles';
import AuthHeader from '../shared/AuthHeader';

import { Icon } from '@iconify/react';
import chefIcon from '@iconify/icons-whh/chef';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import ReactMapGL, { Marker } from 'react-map-gl';

import useForm from '../../hooks/useForm';
import * as yup from 'yup';

import axios from 'axios';

const Register = () => {
  const cardClass = cardStyles();

  const mapStyle = {
    width: '100vw',
    height: '96vh',
  };

  const [stepper, setStepper] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { values, setValues, validate, errors } = useForm(
    { email: '', address: '', longitude: null, latitude: null, gender: '', firstName: '', lastName: '' },
    yup.object().shape({
      email: yup.string().email().required(),
      address: yup.string().required(),
      longitude: yup.number().required(),
      latitude: yup.number().required(),
      gender: yup.string(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const userValues = {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      latitude: values.latitude,
      longitude: values.longitude,
      gender: values.gender,
      address: values.address,
      photo: values.photo,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, userValues)
      .then((res) => {
        setSubmitted(true);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        console.dir({
          err,
          message: err.message,
          stack: err.stack,
        });
      });
  };

  const classnames = styles();

  return (
    <div>
      <AuthHeader />
      <div className={classnames.container}>
        <div>
          <Card className={`${cardClass.root} register-card`}>
            <CardContent class={'card-header'}>
              <Typography variant="h1">Create a new account with us</Typography>
              <Typography variant="h6" color="textSecondary">
                Start eating well while making friends!
              </Typography>
            </CardContent>
            {submitted && <SubmissionSuccessModal />}
            <form>
              {stepper === 1 && (
                <AuthFields
                  setStepper={setStepper}
                  setValues={setValues}
                  validate={validate}
                  errors={errors}
                />
              )}
              {stepper === 2 && (
                <ProfileFields
                  setValues={setValues}
                  errors={errors}
                  values={values}
                  validate={validate}
                  handleSubmit={handleSubmit}
                  setStepper={setStepper}
                  errorMessage={errorMessage}
                />
              )}
            </form>
            <CardActions>
              <MobileStepper variant="dots" steps={2} position="static" activeStep={stepper - 1} />
            </CardActions>
          </Card>
        </div>
        {true && (
          <ReactMapGL
            id="register-map"
            className={'register-map'}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            latitude={0}
            longitude={-30}
            zoom={3}
            {...mapStyle}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker longitude={-30} latitude={0} offsetLeft={-15} offsetTop={-15}>
              <span style={{ color: '#58D473' }}>
                <Icon width="2em" icon={chefIcon} />
              </span>
            </Marker>
          </ReactMapGL>
        )}
      </div>
    </div>
  );
};

export default Register;