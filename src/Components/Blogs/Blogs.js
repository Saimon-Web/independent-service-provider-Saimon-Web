import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Authentication vs Authorization</h2>
            <p>Authorization is the process of giving someone permission to do something or use a resource. <br />
                Authentication is the process of detemining whether someone,something or someones act is actually true.</p>
            <p>Authentication is used by a client when the client needs to know that the server is system it claims to be. <br />
                Authorization is usually coupled with authentication so that the server has some concept of who the client is that is requesting access.
            </p>
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <p>yes</p>
            <h2>What other services does firebase provide other than authentication</h2>
            <p>There are many services which Firebase provides, Most useful of them are:

                Cloud Firestore,
                Cloud Functions,
                Authentication,
                Hosting,
                Cloud Storage,
                Google Analytics,
                Predictions,
                Cloud Messaging,
                Dynamic Links,
                Remote Config
            </p>

        </div>
    );
};

export default Blogs;