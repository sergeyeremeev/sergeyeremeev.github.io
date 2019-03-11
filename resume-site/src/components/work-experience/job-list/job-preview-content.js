// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectJob } from '../../../actions';
import {JobPreviewTextCSS, JobPreviewContentTop, JobPreviewContentBottom, JobPreviewCTA} from './style';

const JobPreviewText = styled.div`
  ${JobPreviewTextCSS};
`;

type Props = {
    job: Object,
    onJobSelect: Function,
    selectJob: Function,
    active: boolean,
    shouldDisplayMobile: boolean
};

const JobPreviewContent = (props: Props) => {
    const { job } = props;

    const handleClick = () => {
        if (props.shouldDisplayMobile) {
            props.selectJob(job);
            props.onJobSelect();
        } else {
            props.onJobSelect();
            setTimeout(() => {
                props.selectJob(job);
            }, 600);
        }
    };

    return (
        <JobPreviewText active={props.active} onClick={handleClick}>
            <JobPreviewContentTop>
                <h3>{job.title}</h3>
                <br />@<br />
                <h2>{job.companyName}</h2>
            </JobPreviewContentTop>
            <JobPreviewContentBottom>
                <span>Start: {job.startDate}</span>
                <span>End: {job.endDate}</span>
            </JobPreviewContentBottom>
            <JobPreviewCTA>Learn more</JobPreviewCTA>
        </JobPreviewText>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectJob }, dispatch);
}

export default connect(null, mapDispatchToProps)(JobPreviewContent);
