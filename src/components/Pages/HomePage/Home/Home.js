import React from "react";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import ContactForm from "../ContactForm/ContactForm";
import Feedback from "../Feedback/Feedback";
import Services from "../Services/Services";
import Works from "../Works/Works";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brand></Brand>
      <Services></Services>
      <Works></Works>
      <Feedback></Feedback>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
