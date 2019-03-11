// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import JobPreviewContent from './job-preview-content';
import { JobPreviewCSS, JobPreviewImageCSS, JobPreviewCTA, JobPreviewSingleWrapper } from './style';

const JobPreview = styled.div`
  ${JobPreviewCSS};
`;

const JobPreviewImage = styled.div`
  ${JobPreviewImageCSS};
`;

type Props = {
    active: boolean,
    job: Object,
    onJobSelect: Function,
    shouldDisplayMobile: boolean,
};

class JobPreviewSingle extends Component<Props, {hovered: boolean}> {
    state = { hovered: false };

    onMouseEnter = () => {
        this.setState({ hovered: true });
    };

    onMouseLeave = () => {
        this.setState({ hovered: false });
    };

    render() {
        return (
            <JobPreview
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                hovered={this.state.hovered}
                active={this.props.active}
            >
                <div>
                    <JobPreviewImage hovered={this.state.hovered}>
                        <span>{this.props.job.title}</span>
                        <img src={this.props.job.image} alt=""/>
                    </JobPreviewImage>
                    <JobPreviewContent
                        shouldDisplayMobile={this.props.shouldDisplayMobile}
                        active={this.props.active}
                        job={this.props.job}
                        onJobSelect={this.props.onJobSelect}
                    />
                </div>
            </JobPreview>
        );
    }
}

export default JobPreviewSingle;
