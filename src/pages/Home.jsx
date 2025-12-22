import React from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../components/Slider';
import SubscriptionBox from '../components/SubscriptionBox';
import SupportingLocal from '../components/SupportingLocal';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

const Home = () => {
    const { sliderData, products } = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Slider sliderData={sliderData} />
            <SubscriptionBox products={products} />
            <SupportingLocal />
            <HowItWorks />
            <CTASection />
        </div>
    );
};

export default Home;