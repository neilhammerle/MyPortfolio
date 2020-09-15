import React from 'react'
import Footer from '../components/footer/'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Neil Hammerle </Footer.Title>
                        <Footer.Link href='#'>About me</Footer.Link>
                        <Footer.Link href='#'>Projects</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Follow me!</Footer.Title>
                        <Footer.Link href='#'>GitHub</Footer.Link>
                        <Footer.Link href='#'>LinkedIn</Footer.Link>
                        <Footer.Link href='#'>Facebook</Footer.Link>
                        <Footer.Link href='#'>Instagram</Footer.Link>
                        <Footer.Link href='#'>Twitter</Footer.Link>

                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
