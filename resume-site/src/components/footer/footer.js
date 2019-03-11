import React from 'react';
import { SectionContainer } from '../common/wrappers';
import { WebsiteFooter, FooterSection, ContactOptions, EmailIcon, LinkedInIcon, MobileIcon, SkypeIcon } from './style';

function Footer() {
    return (
        <WebsiteFooter>
            <SectionContainer containerMaxWidth="960px" containerDisplay="flex" flexDirection="row" height="auto">
                <FooterSection>
                    <h2>Let&#39;s get in touch!</h2>
                    <ContactOptions>
                        <div>
                            <a href="mailto:13.eremeev.sv@gmail.com">
                                <EmailIcon />&nbsp;<span>13.eremeev.sv@gmail.com</span>
                            </a>
                        </div>
                        <div><MobileIcon />&nbsp;<span>+7 900 581 75 32</span></div>
                        <div><SkypeIcon />&nbsp;<span>serge_eremeev</span></div>
                        <div>
                            <a href="https://www.linkedin.com/in/sergey-eremeev-831a44a6/">
                                <LinkedInIcon />&nbsp;<span>My LinkedIn profile</span>
                            </a>
                        </div>
                    </ContactOptions>
                </FooterSection>
                <FooterSection>
                    <h2>Useful Links</h2>
                    <ul>
                        <li><a href="https://github.com/sergeyeremeev">GitHub profile</a></li>
                        <li><a href="http://standardcoder.com/">Blog</a></li>
                    </ul>
                </FooterSection>
            </SectionContainer>
        </WebsiteFooter>
    );
}

export default Footer;
