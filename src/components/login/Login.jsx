import React from 'react';
import AuthHeader from '../shared/AuthHeader';
import food from '../../assets/food.jpg';
import bgImage from '../../assets/chef.svg';
import { landingPageStyles } from './login.styles';

const Login = () => {
  const styles = landingPageStyles({ bgImage });

  return (
    <div className={styles.container}>
      <AuthHeader />
      <div className={styles.landingPageContainer}>
  
      </div>
    </div>
  );
};

export default Login;
