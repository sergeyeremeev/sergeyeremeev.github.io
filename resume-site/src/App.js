import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {injectGlobal} from 'styled-components';
import Header from './components/header/header';
import WorkExperience from './components/work-experience/work-experience';
import Portfolio from './components/projects/projects';
import Skills from './components/skills/skills';
import Message from './components/message/message';
import Footer from './components/footer/footer';
import globalStyles from './index.css';
import ReactFullpage from '@fullpage/react-fullpage';

injectGlobal([`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700|Ubuntu:300,400,700');
  ${globalStyles};
`]);

class App extends Component<{}, { activeSection: string }> {
  state = {
    activeSection: 'header',
    portfolioOverlayOpen: false,
    workOverlayOpen: false,
  };

  onSectionLeave(origin, destination, api) {
    if (window.outerWidth < 1280 || window.outerHeight < 900) {
      window.addEventListener('scroll', () => {
        const currentSection = document.getElementsByClassName('fp-section active')[0].dataset.section;
        this.setState({activeSection: currentSection});
      });

      return;
    }

    const sections = document.getElementsByClassName('fp-section');
    const orig = origin.index;
    const dest = destination.index;

    if (dest > orig) {
      for (let i = orig; i < dest; i++) {
        sections[i].style.transform = `translateY(${-100 * i}%)`;
        sections[i].firstElementChild.style.opacity = '0.5';
        sections[i].firstElementChild.style.transform = 'translateY(-100px)';
      }

      for (let i = dest; i < sections.length; i++) {
        sections[i].style.transform = `translateY(${-100 * dest}%)`;
        sections[i].firstElementChild.style.opacity = '1';
        sections[i].firstElementChild.style.transform = 'translateY(0)';
      }
    } else {
      for (let i = sections.length - 1; i >= dest; i--) {
        sections[i].style.transform = `translateY(${-100 * dest}%`;
        sections[i].firstElementChild.style.opacity = '1';
        sections[i].firstElementChild.style.transform = 'translateY(0)';
      }

      for (let i = dest - 1; i >= 0; i--) {
        sections[i].style.transform = `translateY(${-100 * i}%)`;
        sections[i].firstElementChild.style.opacity = '0.5';
        sections[i].firstElementChild.style.transform = 'translateY(-100px)';
      }
    }

    this.setState({activeSection: destination.item.dataset.section});
  };

  moveSectionDown(api) {
    api.moveSectionDown();
  }

  moveToFooter(api) {
    api.moveTo(6);
  }

  managePortfolioOverlayOpen(api) {
    api.setAllowScrolling(false);
    api.setKeyboardScrolling(false);
    this.setState({portfolioOverlayOpen: true});
  }

  managePortfolioOverlayClose(api) {
    api.setAllowScrolling(true);
    api.setKeyboardScrolling(true);
    this.setState({portfolioOverlayOpen: false});
  }

  manageWorkOverlayOpen(api) {
    api.setAllowScrolling(false);
    api.setKeyboardScrolling(false);
    this.setState({workOverlayOpen: true});
  }

  manageWorkOverlayClose(api) {
    api.setAllowScrolling(true);
    api.setKeyboardScrolling(true);
    this.setState({workOverlayOpen: false});
  }

  render() {
    return (
      <ReactFullpage
        licenseKey={'9CB95505-C8E843C8-8AB2DB82-CAE09E27'}
        verticalCentered={false}
        onLeave={this.onSectionLeave.bind(this)}
        normalScrollElements='.fullPageScroll'
        navigation={true}
        navigationPosition="right"
        responsiveWidth="1280"
        responsiveHeight="900"
        render={({state, fullpageApi}) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section section_header" data-section="header">
                <Header
                  onMoveDown={() => this.moveSectionDown(fullpageApi)}
                  active={this.state.activeSection === 'header'}
                  onMoveToContact={() => this.moveToFooter(fullpageApi)}
                />
              </div>
              <div className="section fp-auto-height-responsive section_skills" data-section="skills">
                <Skills active={this.state.activeSection === 'skills'}/>
              </div>
              <div
                className="section fp-auto-height-responsive section_portfolio"
                data-section="portfolio"
                style={{zIndex: this.state.portfolioOverlayOpen ? '2' : '1'}}
              >
                <Portfolio
                  active={this.state.activeSection === 'portfolio'}
                  onOverlayOpen={() => this.managePortfolioOverlayOpen(fullpageApi)}
                  onOverlayClose={() => this.managePortfolioOverlayClose(fullpageApi)}
                />
              </div>
              <div
                className="section fp-auto-height-responsive section_work"
                data-section="work"
                style={{zIndex: this.state.workOverlayOpen ? '2' : '1'}}
              >
                <WorkExperience
                  active={this.state.activeSection === 'work'}
                  onOverlayOpen={() => this.manageWorkOverlayOpen(fullpageApi)}
                  onOverlayClose={() => this.manageWorkOverlayClose(fullpageApi)}
                />
              </div>
              <div className="section fp-auto-height-responsive section_message" data-section="message">
                <Message active={this.state.activeSection === 'message'}/>
              </div>
              <div className="section section_footer" data-section="footer">
                <Footer active={this.state.activeSection === 'footer'}/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default App;

/*
1) Colors!!!
2) Portfolio mobile popup
3) Work Experience broken breakpoint
4) Footer < 768px
 */
