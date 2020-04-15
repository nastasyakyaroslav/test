import React from 'react';
import Form from '../Form';
import './style.css'

const Content = () => {
    return (
        <div className="content">
            <Form />
            <iframe
                title="map"
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7705958587535!2d-122.40723658468237!3d37.77197687975993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2b91e54635%3A0xd096456cf755fadf!2s888%20Brannan%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sua!4v1586895296650!5m2!1sen!2sua"
                aria-hidden="false" />
        </div>
    )
};

export default Content;