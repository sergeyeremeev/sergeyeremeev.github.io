// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import JobList from './job-list/job-list';
import ActiveJob from './active-job/job-active';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { animateContentOnScroll } from '../../helpers/slideContentOnScroll';
import WorkExperienceContainerCSS from './style';
import ProjectActive from "../projects/projects";

const WorkExperienceContainer = styled.div`
  ${WorkExperienceContainerCSS};
`;


type State = {
    activeIndex: ?number,
    resetJobAnimation: boolean,
    scrolledTo: boolean,
    overlayActive: boolean,
    overlayOffset: Object,
    showMobileCarousel: boolean,
    displayMobile: boolean,
};

type Props = {
    onOverlayOpen: Function,
    onOverlayClose: Function
}

class WorkExperience extends Component<Props, State> {
    state = {
        activeIndex: null,
        resetJobAnimation: false,
        scrolledTo: false,
        overlayActive: false,
        overlayOffset: { top: '0px' },
        displayMobile: true,
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleWorkResize.bind(this));
    }

    componentWillReceiveProps(nextProps: Object): void {
        if (nextProps.active && !this.state.scrolledTo) {
            this.setState({ scrolledTo: true });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWorkResize);
    }

    handleWorkResize() {
        if (window.outerWidth < 680) {
            this.setState({ displayMobile: true });
            return;
        }

        this.setState({ displayMobile: false });
    }

    handleJobSelect = (index: number) => {
        if (window.outerWidth < 680) {
            if (document.body) {
                document.body.style.overflow = 'hidden';
            }

            const wrapperOffset = this.wrapper.getBoundingClientRect().top;
            const topVal = wrapperOffset < 0 ? `${-wrapperOffset}px` : `-${wrapperOffset}px`;

            this.setState({ overlayOffset: { top: topVal }, overlayActive: true });
            this.props.onOverlayOpen();
        } else {
            console.log('hi');
            this.setState({ activeIndex: index });

            if (this.state.activeIndex !== index) {
                this.setState({ resetJobAnimation: true });

                setTimeout(() => {
                    this.setState({ resetJobAnimation: false });
                }, 600);
            }
        }
    };

    handleOverlayClose = () => {
        if (document.body) {
            document.body.style.overflow = 'auto';
        }

        this.setState({ overlayActive: false });
        this.props.onOverlayClose();
    };

    endJobResetAnimation = () => {
        this.setState({ resetJobAnimation: false });
    };

    element: ?HTMLDivElement;

    render() {
        return (
            <SectionWrapper innerRef={el => { this.wrapper = el; }}>
                <SectionContainer>
                    <SectionTitle>Work Experience</SectionTitle>
                    <WorkExperienceContainer
                        scrolledTo={this.state.scrolledTo}
                        innerRef={(el) => { this.element = el; }}
                    >
                        <JobList
                            activeIndex={this.state.activeIndex}
                            onJobSelect={this.handleJobSelect}
                            showMobileCarousel={this.props.showMobileCarousel}
                            shouldDisplayMobile={this.state.displayMobile}
                        />
                        <ActiveJob
                            animateResetter={this.state.resetJobAnimation}
                            onJobUpdate={this.endJobResetAnimation}
                            overlayActive={this.state.overlayActive}
                            onOverlayClose={this.handleOverlayClose}
                            shouldDisplayMobile={this.state.displayMobile}
                            overlayOffset={this.state.overlayOffset}
                        />
                    </WorkExperienceContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default WorkExperience;
