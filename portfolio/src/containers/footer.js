import React from 'react'
import Footer from '../components/footer/'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Neil Hammerle </Footer.Title>
                        <Footer.Link href='/About'>About Me</Footer.Link>
                        <Footer.Link href='https://github.com/neilhammerle'>Projects</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Follow me!</Footer.Title>
                        <Footer.Link href='https://github.com/neilhammerle'>GitHub</Footer.Link>
                        <Footer.Link href='https://www.linkedin.com/in/neilhammerle/'>LinkedIn</Footer.Link>
                        <Footer.Link href='https://www.facebook.com/neil.hammerle'>Facebook</Footer.Link>
                        <Footer.Link href='https://www.instagram/neil_17'>Instagram</Footer.Link>
                        <Footer.Link href='https://www.twitter.com/NeilHammerle'>Twitter</Footer.Link>

                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
