import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function ContactForm() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        jobTitle: ''
    });

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddContact = async () => {
        try {
            const response = await fetch('http://localhost:3001/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to add contact');
            }
            const data = await response.json();
            console.log(data); // Log the response from the server
            // Update contacts state or perform any other actions as needed
            handleCloseModal();
        } catch (error) {
            console.error(error);
            // Handle errors or display error message to the user
        }
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShowModal}>Add New Contact</Button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formJobTitle">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter job title"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleAddContact}>Save Contact</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
