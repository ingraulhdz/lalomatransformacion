import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import { Sponsors } from '../components/Sponsors';
import { About } from '../components/About';
import { Counter } from '../components/Counter';
import { Services } from '../components/Services';
import { Projects } from '../components/Projects';
import { Plans } from '../components/Plans';
import { Representantes } from '../components/Representantes';
import { Faqs } from '../components/Faqs';
import { Contact } from '../components/Contact';
import { Testimonials } from '../components/Testimonials';

export default function Index() {
  return (
    <>
    <Hero/>
    <Sponsors/>
   <About/>
    <Counter/>
    <Services/>
    <Projects/>
    <Testimonials/>
<Plans/>
<Representantes/>
<Faqs/>
<Contact/>




    </>
  );
}
