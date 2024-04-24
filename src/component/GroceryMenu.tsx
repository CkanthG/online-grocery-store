import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import for routing

const MENU_ITEMS = [
    { name: 'Fruits & Vegetables', path: '/fruits-vegetables' },
    { name: 'Meat & Seafood', path: '/meat-seafood' },
    { name: 'Dairy & Eggs', path: '/dairy-eggs' },
    { name: 'Pantry Staples', path: '/pantry-staples' },
    { name: 'Beverages', path: '/beverages' },
];

const GroceryMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as="h1" href="/">Online Grocery Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav as="h4" className="mr-auto">
                    {MENU_ITEMS.map((item) => (
                        <NavItem key={item.name}>
                            <NavLink as={Link} to={item.path}>
                                {item.name}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default GroceryMenu;
