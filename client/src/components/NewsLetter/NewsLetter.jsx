import React from 'react';
import './NewsLetter.css';
import { useState } from 'react';

function NewsLetter() {

    const [isEmailChoiceSelected, setIsEmailChoiceSelected] = useState(true);
    const [isSmsChoiceSelected, setIsSmsChoiceSelected] = useState(false);

    return (
        <div className='newsletter'>
            <div className="newsletter__title">NEVER MISS A THING</div>
            <div className="newsletter__description">
                Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox
            </div>
    
            <div className="newsletter__options">
                <p className='newsletter__label'>GET UPDATES BY</p>
                
                <div className="newsletter__option">
                    <input id='email_checkbox' type="checkbox" checked={isEmailChoiceSelected} onChange={() => setIsEmailChoiceSelected((prev) => !prev)} />
                    <label htmlFor='email_checkbox' className="newsletter__option-text">
                        <i className={`bx ${isEmailChoiceSelected ? 'bx-check' : ''}`}></i>
                        Email
                    </label>
                    {isEmailChoiceSelected && (
                        <input type='text' className="newsletter__input" placeholder='Your Email Address' />
                    )}
                </div>
    
                <div className="newsletter__option">
                    <input id='sms_checkbox' type="checkbox" checked={isSmsChoiceSelected} onChange={() => setIsSmsChoiceSelected((prev) => !prev)} />
                    <label htmlFor='sms_checkbox' className="newsletter__option-text">
                        <i className={`bx ${isSmsChoiceSelected ? 'bx-check' : ''}`}></i>
                        SMS
                    </label>
                    {isSmsChoiceSelected && (
                        <input type='text' className="newsletter__input" placeholder='Your Phone Number' />
                    )}
                </div>
    
                <div className="newsletter__submit">Sign Up</div>

                <p className='newsletter__consent'>
                    By signing up, you consent to receiving marketing by email and/or SMS and acknowledge you have read our Privacy Policy. Unsubscribe anytime at the bottom of our emails or by replying STOP to any of our SMS.
                </p>
            </div>
        </div>
    );
}

export default NewsLetter;
