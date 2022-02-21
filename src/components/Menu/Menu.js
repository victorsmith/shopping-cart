import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


const Menu = ({ open, ...props }) => {
	const isHidden = open ? true : false;
	const tabIndex = isHidden ? 0 : -1;

	return (
            <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired,
};

export default Menu;
