import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

const Contact = () => {
    return (
        <div>
            <Container>
                <Container>

                </Container>
            </Container>

            <Container>
                <Container>
                    <Card>
                        <h4>Email me: neilhammerle@gmail.com</h4>
                        <h5>or follow me any of my social media accounts!</h5>

                        <Row>
                            <h5 className='col'>
                                <a className="dark-text" href="https://github.com/neilhammerle">
                                    <i className="fa fa-github">

                                    </i>
                                </a>
                            </h5>
                        </Row>
                    </Card>
                </Container>
            </Container>
        </div>
    )
}

export default Contact
