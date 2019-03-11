// @flow
import React, { Component } from 'react';
import ProjectList from './project-list/project-list';
import ProjectActive from './project-active/project-active';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { ProjectsContainer, ProjectsContainerInner, ProjectsViewMore, ProjectPreview, ProjectsHint } from './style';
import staticGif from '../../assets/images/static.gif';
import yourNextDeveloperVideo from '../../assets/videos/nextdeveloper.mp4';

type State = {
    overlayActive: boolean,
    overlayOffset: Object,
    mobileProjectsVisible: boolean,
    scrolledTo: boolean,
};

type Props = {
    onOverlayOpen: Function,
    onOverlayClose: Function
}

class Portfolio extends Component<Props, State> {
    state = {
        overlayActive: false,
        overlayOffset: { top: '0px' },
        mobileProjectsVisible: false,
        scrolledTo: false,
    };

    videoTimeout: null;

    componentWillReceiveProps(nextProps: Object): void {
        if (nextProps.active && !this.state.scrolledTo) {
            this.setState({ scrolledTo: true });
        }
    }

    handleProjectSelect = () => {
        this.setState({ overlayActive: true });
        this.props.onOverlayOpen();

        const wrapperOffset = this.wrapper.getBoundingClientRect().top;
        const topVal = wrapperOffset < 0 ? `${-wrapperOffset}px` : `-${wrapperOffset}px`;
        this.setState({ overlayOffset: { top: topVal }});
    };

    handleProjectHover = (project) => {
        const oldVideo = this.projectPreview.querySelector('video');

        if (oldVideo) {
            this.projectPreview.removeChild(oldVideo);
        }

        const video = document.createElement('video');
        const source = document.createElement('source');
        video.setAttribute('muted', 'muted');
        video.setAttribute('loop', 'loop');
        source.setAttribute('src', project.video);
        source.setAttribute('type', 'video/mp4');
        video.appendChild(source);

        clearTimeout(this.videoTimeout);
        this.videoTimeout = setTimeout(() => {
            this.projectPreview.append(video);
            video.play();
        }, 400);
    };

    handleOverlayClose = () => {
        this.setState({ overlayActive: false });
        this.props.onOverlayClose();
    };

    toggleProjectsVisibility = () => {
        this.setState({ mobileProjectsVisible: !this.state.mobileProjectsVisible });
    };

    element: ?HTMLDivElement;
    wrapper: ?HTMLDivElement;
    projectPreview: ?HTMLDivElement;

    render() {
        return (
            <SectionWrapper innerRef={el => { this.wrapper = el; }}>
                <SectionContainer>
                    <SectionTitle>Portfolio</SectionTitle>
                    <ProjectsContainer
                        innerRef={(el) => { this.element = el; }}
                        scrolledTo={this.state.scrolledTo}
                    >
                        <ProjectsContainerInner>
                            <ProjectList
                              onProjectSelect={this.handleProjectSelect}
                              onProjectFocus={this.handleProjectHover}
                              mobileProjectsVisible={this.state.mobileProjectsVisible}
                            />
                            <ProjectPreview innerRef={(el) => { this.projectPreview = el; }}>
                                <img src={staticGif} alt=""/>
                                <video autoPlay="autoplay" loop="loop" muted="muted">
                                    <source src={yourNextDeveloperVideo} type="video/mp4" />
                                </video>
                            </ProjectPreview>
                            <ProjectsViewMore
                              onClick={this.toggleProjectsVisibility}
                            >
                                {this.state.mobileProjectsVisible ? 'Less' : 'More'}
                            </ProjectsViewMore>
                            <ProjectActive
                              overlayActive={this.state.overlayActive}
                              onOverlayClose={this.handleOverlayClose}
                              overlayOffset={this.state.overlayOffset}
                            />
                        </ProjectsContainerInner>
                        <ProjectsHint>
                            *Mouseover a project to see the preview, click to see details. On large touch devices tap a
                            project with two fingers to see the video.
                        </ProjectsHint>
                    </ProjectsContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default Portfolio;
