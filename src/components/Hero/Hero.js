import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a Full Stack Developer. My passion is to develop next generation apps using tools like ReactJS.
        </SectionText>
        <Button onClick={props.handleClick}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;