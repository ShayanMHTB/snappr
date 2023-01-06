import Head from 'next/head';

import { HeadData } from '../data';

import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../data/SliderData';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>{HeadData.at(0)?.title}</title>
        <meta name="description" content={HeadData.at(1)?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero 
        heading='Snappr Photography' 
        message='I capture moments in nature and keep them alive.'
      />
      <Slider slides={SliderData} />
      <Footer />
    </>
  );
}
