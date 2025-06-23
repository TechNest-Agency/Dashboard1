import React from 'react';
import Banner from './Banner';
import UsefulFeatures from '../FrontPages/UsefulFeatures';
import WhatPeopleSay from '../FrontPages/WhatPeopleSay';
import MeetOurTeam from '../FrontPages/MeetOurTeam';
import ContactUs from '../FrontPages/ContactUs';
import FAQ from '../FrontPages/FAQ';

const Landing = () => {
  return (
    <div>
      <Banner />
      <UsefulFeatures id="features" />
      <WhatPeopleSay id="testimonials" />
      <MeetOurTeam id="team" />
      <ContactUs id="contact" />
      <FAQ id="faq" />
    </div>
  );
};

export default Landing;