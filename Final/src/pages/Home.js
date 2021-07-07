import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious Hotel rooms" subtitle="deluxe room starting at 2499 rupees">
                    <Link to="/rooms" className="btn-primary">Our Hotel Rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    );
}
