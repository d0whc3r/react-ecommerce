import React from 'react';

import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './home.styles';

const HomePage: React.FC = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
