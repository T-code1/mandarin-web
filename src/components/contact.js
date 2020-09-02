import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './footer';
const Contact = (props) => {
	const [ form, setForm ] = useState({ name: '', email: '', message: '' });

	const { id } = props;
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

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

		setForm({ name: '', email: '', message: '' });
	};
	return (
		<React.Fragment>
			<div className="container-fluid contact" id={id}>
				<p id="h-contact" data-aos="fade-down">
					Tell us what <br />
					you are interested in.
				</p>

				<form data-aos="fade-up" onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						id="name"
						value={form.name}
						placeholder="name"
						onChange={handleChange}
					/>
					<br />

					<input
						type="email"
						id="email"
						name="email"
						value={form.email}
						placeholder="Email"
						onChange={handleChange}
					/>
					<br />

					<input
						type="text"
						name="message"
						id="message"
						value={form.message}
						placeholder="message"
						onChange={handleChange}
					/>

					<div>
						<button type="submit" className="button">
							SEND
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Contact;
