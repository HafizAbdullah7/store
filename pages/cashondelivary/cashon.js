import React, { useState } from 'react';
import { client } from '../../lib/client';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../../context/StateContext';


const cashon = () => {
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

    const [formData, setFormData] = useState({ username: '', email: '', address: '', phonenumber: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            address: formData.address,
            phonenumber: formData.phonenumber,
            cartItems: cartItems.map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                subtotal: totalPrice,
                // Add image details here as needed
                // For example, if your image is stored in item.image:
                image: item.image.map(image => ({
                    // Assuming URL is stored in the URL field
                    url: image.url,
                    // You might have other fields like alt text, title, etc.
                }))
            }))
        };

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <h2 className="head-text">This service is only for Pakistan you can use stripe if not from Pakistan</h2>

            <div className="app__footer-cards">

            </div>
            {!isFormSubmitted ? (
                <div className="app__footer-form ">
                    <div className="app__flex">


                        <input className="p-text" type="text" placeholder="Your Name" name="username" value={formData.username} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChangeInput} />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Address" name="address" value={formData.address} onChange={handleChangeInput} />
                    </div>

                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Phone number" name="phonenumber" value={formData.phonenumber} onChange={handleChangeInput} />
                    </div>

                    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Submit' : 'Wait...'}</button>

                </div>
            ) : (
                    <div className="success-wrapper">
                        <div className="success">
                            <p className="icon">
                                <BsBagCheckFill />
                            </p>
                            <h2>Thank you for your order!</h2>
                            <p className="email-msg">Check your email inbox for the receipt.</p>
                            <p className="description">
                                If you have any questions, please email
                                <a className="email" href="mailto:bunnytota3@gmail.com">
                                    bunnytota3@gmail.com
                                </a>
                            </p>
                            <Link href="/">
                                <button type="button" width="300px" className="btn">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            }
           
        </>

    )
}

export default cashon;
