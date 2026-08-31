import React, { Component } from 'react'
import { Card, Col, Container, ListGroup, Row, } from 'react-bootstrap'


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <div className='media m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://i.pinimg.com/originals/d2/87/e9/d287e92fc9bbcf20af016edc6a7ac6ab.jpg?nii=t'
                            />
                            <div className='media-body'>
                                <h5>Блог пост</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='media m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://i.pinimg.com/originals/d2/87/e9/d287e92fc9bbcf20af016edc6a7ac6ab.jpg?nii=t'
                            />
                            <div className='media-body'>
                                <h5>Блог пост</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='media m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://i.pinimg.com/originals/d2/87/e9/d287e92fc9bbcf20af016edc6a7ac6ab.jpg?nii=t'
                            />
                            <div className='media-body'>
                                <h5>Блог пост</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                        <div className='media m-5'>
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src='https://i.pinimg.com/originals/d2/87/e9/d287e92fc9bbcf20af016edc6a7ac6ab.jpg?nii=t'
                            />
                            <div className='media-body'>
                                <h5>Блог пост</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md='3'>
                        <h5 className='text-center mt-5'>Категории</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>ручная</ListGroup.Item>
                                <ListGroup.Item>полуавтоматическая</ListGroup.Item>
                                <ListGroup.Item>автоматическая</ListGroup.Item>
                                <ListGroup.Item>аргонная сварка</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-3' bg='light'>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
