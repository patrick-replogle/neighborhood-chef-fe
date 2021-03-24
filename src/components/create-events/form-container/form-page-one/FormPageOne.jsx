import React from 'react';
import { useHistory } from 'react-router-dom';

import TitleInput from './title-input/title-input';
import DescriptionInput from './description-input/description-input';
import DateInput from './date-input/date-input';
import TimeInputs from './time-inputs/time-inputs';
import CatagoryInput from './category-input/catagory-input';
import MapboxGeocoder from './mapbox-geocoder/mapbox-geocoder';

import { formPageOneStyles } from './FormPageOne.styles';
import EventButtons from '../event-buttons/EventButtons';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const FormPageOne = ({ setStepper, errors, values, setValues, validate }) => {
  const { push } = useHistory();
  const styles = formPageOneStyles();

  const validateAndTurnPage = () => {
    const isValid = validate();

    if (isValid) {
      setStepper(2);
      scrollToTop();
    }
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.leftContainer}>
          <TitleInput errors={errors} values={values} setValues={setValues} validate={validate} />
          <MapboxGeocoder errors={errors} values={values} setValues={setValues} validate={validate} />
          <DescriptionInput errors={errors} values={values} setValues={setValues} validate={validate} />
        </div>

        <div className={styles.rightContainer}>
          <DateInput errors={errors} values={values} setValues={setValues} validate={validate} />
          <TimeInputs errors={errors} values={values} setValues={setValues} validate={validate} />
          <CatagoryInput errors={errors} values={values} setValues={setValues} validate={validate} />
        </div>
      </div>
      <EventButtons
        leftBtnText="Cancel"
        leftBtnClick={() => {
          push('/dashboard');
        }}
        rightBtnText="Next"
        rightBtnClick={validateAndTurnPage}
      />
    </>
  );
};

export default FormPageOne;