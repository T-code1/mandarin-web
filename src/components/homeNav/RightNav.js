import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-scroll';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	li {
		padding: 25px 10px;
		color: #959595;
		font-size:12px;
		cursor:pointer;
		font-family:"chaletBook-regular"
	}
	a:hover{
		color: #f89c1e;
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

const RightNav = ({ open, id }) => {
	return (
		<Ul open={open} id={id}>
			<li>
				<Link activeClass="active" to="section1" spy={true} smooth={true} offset={0} duration={500}>
					HOME
				</Link>
			</li>
			<li>
				<Link activeClass="active" to="section2" spy={true} smooth={true} offset={0} duration={500}>
					SERVICES
				</Link>
			</li>
			<li>
				<Link activeClass="active" to="section3" spy={true} smooth={true} offset={0} duration={500}>
					WHO WE ARE
				</Link>
			</li>
			<li>
				<Link activeClass="active" to="section5" spy={true} smooth={true} offset={0} duration={500}>
					CONTACT
				</Link>
			</li>

		</Ul>
	);
};

export default RightNav;
