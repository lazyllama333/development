import "../App.css";
import { useState,useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

export default function SortingNavBar({selectFilter1Type, selectFilter2Type, selectIfSorted}) {
    return(
        <div>
            <Container className="flex-column">
            <Navbar expand="lg" variant="light" bg="light">
            <h2>Select Drink Type</h2>
            <Nav onSelect={selectFilter1Type} className="flex-column" variant="pills">
                <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="milk tea">milk tea</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="fruit tea">fruit tea</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="slush">slush</Nav.Link></Nav.Item>
            </Nav>
            <h2>Select Price Range</h2>
            <Nav onSelect={selectFilter2Type} className="flex-column" variant="pills">
                <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="<4">less than $4</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="4-5">between $4-$5</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey=">5">more than $5</Nav.Link></Nav.Item>
            </Nav>

            <Form>
                <div key="default-checkbox" className="mb-3">
                    <Form.Check 
                    onChange = {selectIfSorted}
                    type="checkbox"
                    id="default-checkbox"
                    label="sort low to high"/>
                </div>
            </Form>
            </Navbar>
            </Container>
        
        </div>
    )
}