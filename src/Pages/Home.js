import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Card, Container, CardGroup, CardBody, CardTitle, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
        <>
            <CarouselBox/>
            <Container>
                <h2 className='text-center m-4'>Подробности</h2>
                <CardGroup className='m-4' style={{display: 'flex', gap: '18px'}}>
                    <Card bg='info'>
                        <Card.Img variant='top' src='https://avatars.mds.yandex.net/i?id=23ba5cc8c380190857a4d8b70f2733c3_l-5220772-images-thumbs&n=13'/>
                        <Card.Body>
                            <Card.Title>Объекты</Card.Title>
                            <Card.Text>
                                Ворота, калитки, заборы, Балконы, ограждения, Гаражи, Каркасы теплиц и парников, Металлическая мебель, Стяжка дома, усиление конструкций, Бытовые и промышленные резервуары, Радиаторы и отопительные системы, Котлы и теплообменники
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card bg='info'> 
                        <Card.Img variant='bottom' src='https://bksmpp.ru/wp-content/uploads/2020/03/img-20200319-wa0004.jpg'/>
                        <Card.Body>
                            <Card.Title>Работы</Card.Title>
                            <Card.Text>
                                Изготовление, Мелкий ремонт, Ремонт больших конструкций, Усиление или замена элементов, Аварийные работы
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card bg='info'>
                        <Card.Img variant='top' src='https://www.metdidactic.com.tr/uploads/319--gazalti.jpg'/>
                        <Card.Body>
                            <Card.Title>Дополнительно</Card.Title>
                            <Card.Text>
                                Изготовление чертежа и проектной схемы сварки, Уборка и вывоз мусора после работ, Покраска и антикоррозийная обработка швов
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    
                </CardGroup>
            </Container>
        </>    
        );
    }
}
