import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

mixpanel.init('1cadeccc7966ad6ca010373782e4e3d6', {debug: true, ignore_dnt: true});

const HomePage = () => {
    useEffect(() => {
        mixpanel.track('Page View', { page: 'Home' });
    }, []);

    const handleClick = () => {
        mixpanel.track('Button Click', { button: 'Submit' });
    };

    const handleSignup = () => {
        const userProperties = {
            name: 'First Last',
            email: 'example@mail.com',
            plan: 'Premium',
        };

        mixpanel.identify('USER_ID');
        mixpanel.people.set(userProperties);
        mixpanel.track('Sign Up', userProperties);
    };

    const handleLogin = () => {
        mixpanel.identify('USER_ID');
        mixpanel.track('Login');
    };

    const handleCustomEvent = () => {
        const dynamicProperties = {
            timestamp: new Date().toISOString(),
            source: 'React App',
        };

        mixpanel.track('Custom Event', dynamicProperties);
    };

    return (
        <div>
            <button onClick={handleClick}>Submit</button>
            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleCustomEvent}>Custom Event</button>

        </div>
    );
};

export default HomePage;