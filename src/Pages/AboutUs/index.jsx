import React from 'react';
import { NavLink } from 'react-router-dom';


export default function AboutUs() {
    return (
        <div id="aboutus__content">
            <div className="container">
            <NavLink to="/" className="navlink"><i class="fa fa-arrow-left"></i>Back To Home</NavLink>
            <br/><br/>
            <h1>What is MoChi?</h1>
            <p>
            MoChi is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device.   
            <br/><br/>
            You can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.
            <br/><br/>
            If you're already a member and would like to learn more about using MoChi, visit Getting started with MoChi.
            </p>

            <br/><br/>

            <h2>TV Shows & Movies</h2>
            <p>MoChi content varies by region and may change over time. You can watch from a wide variety of award-winning MoChi Originals, TV shows, movies, documentaries, and more. 
            <br/><br/>
            The more you watch, the better MoChi gets at recommending TV shows and movies we think you’ll enjoy.
            <br/><br/>
            Before you sign up, you can watch some of the content MoChi has to offer!</p>
            
            <br/><br/>

            <h2>Supported Devices</h2>
            <p>You can watch MoChi through any internet-connected device that offers the MoChi app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch MoChi on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance. 
            <br/><br/>
            Need help getting set up? Search our Help Center for the manufacturer of the device you're using.</p>
            
            <br/><br/>

            <h2>Plans and Pricing</h2>
            <p>Each MoChi plan determines the number of devices you can watch MoChi on at the same time and if you prefer to view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD).
            <br/><br/>              
            Compare our plans and pricing to decide which one is right for you. You can easily change your plan or cancel online at any time.</p>

            <br/><br/>

            <h2>Get Started!</h2>
            <p>Follow these easy steps to start watching MoChi today:
            <br/><br/>
            Visit MoChi.com/signup.
            <br/><br/>
            Choose the plan that’s right for you.
            <br/><br/>
            Create an account by entering your email address and creating a password.
            <br/><br/>
            Enter a payment method. As a MoChi member, you are charged once a month on the date you signed up. 
            <br/><br/>
            That's it. Enjoy MoChi!</p>
        </div>
        </div>
        
    )
}
