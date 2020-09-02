import React, { useState } from 'react';
import axios from 'axios';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
	const [ form, setForm ] = useState({ email: '' });

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('https://formcarry.com/s/X2paGXRQM90k', form, { headers: { Accept: 'application/json' } })
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});

		setForm({ email: '' });
	};

	return (
		<React.Fragment>
			<div className="footer">
				<div className="column1">
					<h6>About Us</h6>
					<p id="text1">A multi-faced company that offers an array</p>
					<p id="text1">of digital, advertising and web developments services</p>
				</div>

				<div className="column2">
					<h6> More About Us</h6>
					<p id="text1">Team</p>
					<p id="text1">Our Works</p>
					<p id="text1">Services</p>
					<p id="text1">Jobs</p>
				</div>

				<div className="column3">
					<h6>Contact</h6>
					<p id="text1">+(250)784658958</p>
					<p id="text1">info@madarinagency digital</p>
					<p id="text1">Kigali Rwanda</p>
				</div>

				<div className="column4 ">
					<h6>Stay Connected</h6>
					<p id="text4">Subscribe to our Newsletter</p>
					<form onSubmit={handleSubmit}>
						<div className="email_input">
							<input
								type="email"
								id="emailInput"
								name="email"
								value={form.email}
								placeholder="Email"
								onChange={handleChange}
							/>
							<button id="button">SUBSCRIBE</button>
						</div>
					</form>
					<div className="socialMedia">
						<Link to="">
							<FaFacebookF id="fb" />
						</Link>
						<Link to="">
							<FaTwitter id="fb" />
						</Link>
						<Link to="">
							<FaInstagram id="fb" />
						</Link>
					</div>
				</div>
			</div>
			<div className="copy">
				<div className="line" />

				<p> &copy; 2020 Copyright , All rights reserved.</p>
			</div>
		</React.Fragment>
	);
};

export default Footer;
