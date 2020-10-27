import React from 'react';
import GhostsInfo from '../GhostsInfo';

const NoFeature: React.FC = () => (
  <GhostsInfo
    headerText="Oops! This feature is not available"
    descriptionText="Either we work hard on this feature or it's not available on open Twitch
          API ;("
  />
);

export default NoFeature;
