import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	li {
		padding: 23px 10px;
		color: #959595;
		font-size:12.5px;
		cursor:pointer;
		font-family:"chaletBook-regular"
	}

	@media (max-width: 786px) {
		flex-flow: column nowrap;
		background-color: #0d2538;
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;

		li {
			color: #fff;
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<li>
				<Link className="homeNav" to="/home">
					HOME
				</Link>
			</li>
			<li>
				<Link className="homeNav" to="/services">
					SERVICES
				</Link>
			</li>
			<li>
				<Link className="homeNav" to="/about">
					WHO WE ARE
				</Link>
			</li>
			<li>
				<Link className="homeNav" to="/contact">
					CONTACT
				</Link>
			</li>
		</Ul>
	);
};

export default RightNav;
