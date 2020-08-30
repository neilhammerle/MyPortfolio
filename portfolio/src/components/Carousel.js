import React from 'react'

import Card from './Card'

import chadder from '../assets/img/chadder.png';
import veganish from '../assets/img/veganish.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Chadder',
                    subTitle: 'Annoymous chatting app',
                    imgSrc: chadder,
                    link: "",
                    selected: false
                },
                {
                    id: 1,
                    title: 'Veganish',
                    subTitle: 'App for those with special diets',
                    imgSrc: veganish,
                    link: "",
                    selected: false
                }

            ]

        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}
export default Carousel