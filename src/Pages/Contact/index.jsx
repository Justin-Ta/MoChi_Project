import React from 'react';
import Iframe from 'react-iframe';
import { NavLink } from 'react-router-dom'

export default function Contact() {
    return (
        <div id="contact__content">
            <div className="container">
            <NavLink to="/" className="navlink"><i class="fa fa-arrow-left"></i>Back To Home</NavLink>
            <br/><br/>
            <h1>MoChi Corporate Information</h1>
            <br/>
            <p>MoChi serves members in many different countries. The MoChi entity that provides you with access to the MoChi service and qualifies as your data controller depends on your country of membership, and will be listed in your membership or payment confirmation email.</p>

            <div className="google-map-code">
            <Iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.433209952582!2d106.67769591477145!3d10.778094792320392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f2639b32e09%3A0x97169d1fc37df0b6!2sViettel%20Tower!5e0!3m2!1sen!2s!4v1608466780735!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
            </div>
            </div>
        </div>
    )

}
