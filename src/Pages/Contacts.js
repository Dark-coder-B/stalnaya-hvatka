import React, { Component } from 'react';
import { Button, Container, Form, FormCheck, FormControl, FormText } from 'react-bootstrap';
import { useRef, useState } from 'react';

const ContactForm = () => {
    const formRef = useRef();
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // ВАЖНО: замени на свои значения
        const serviceID = 'service_zg6wdio';
        const templateID = 'template_vad56l9';
        const userID = 'iEGYNnR7a1w8dFjRm';

        window.emailjs
            .sendForm(serviceID, templateID, formRef.current, userID)
            .then(
                () => {
                    setStatus('success');
                    alert('Спасибо! Ваше сообщение отправлено.');
                    formRef.current.reset();
                },
                (err) => {
                    console.error('Ошибка отправки:', err);
                    setStatus('error');
                    alert('Что-то пошло не так, попробуйте позже.');
                }
            );
    };

    return (
        <Container className="my-4" style={{ maxWidth: '500px' }}>
            <h1 className="text-center mb-4">Свяжитесь с нами</h1>
            <Form onSubmit={sendEmail} ref={formRef}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="user_email" // имя должно совпадать с переменной в шаблоне EmailJS
                        placeholder="Enter email"
                        required
                    />
                    <Form.Text className="text-muted">
                        Мы никогда не отправим ваш Email кому‑нибудь ещё
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Сообщение</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="message" // имя переменной для шаблона
                        placeholder="Расскажите, чем можем помочь"
                        required
                    />
                </Form.Group>
                <FormText className="fw-bold text-danger">
                    Укажите свой номер телефона для обратной связи
                </FormText>    
                <Form.Group controlId="formCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Я согласен на обработку персональных данных"
                        name="agreement"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Отправка...' : 'Отправить на рассмотрение'}
                </Button>
            </Form>

            {status === 'success' && (
                <div className="alert alert-success mt-3">Сообщение успешно отправлено!</div>
            )}
            {status === 'error' && (
                <div className="alert alert-danger mt-3">Произошла ошибка при отправке.</div>
            )}
        </Container>
    );
};

export default ContactForm;