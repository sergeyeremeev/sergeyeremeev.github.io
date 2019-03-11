// @flow
import React, {Component} from 'react';
import styled from 'styled-components';
import {Scrollbars} from 'react-custom-scrollbars';
import handIcon from '../../../assets/images/hand.png';
import iconClose from '../../../assets/images/close.svg';
import {OverlayCSS, OverlayContainer, OverlayCloseBtn, ScrolledTextContainer} from '../../common/overlay';
import {JobDetailsCSS} from './style';

const Overlay = styled.div`
  ${OverlayCSS};
`;

const JobDetails = styled.div`
  ${JobDetailsCSS};
`;

type Props = {
  activeJob: Object,
  overlayActive: boolean,
  onOverlayClose: Function,
  overlayOffset: Object,
};

class ActiveJobMobile extends Component<Props> {
  componentDidUpdate() {
    if (this.scrollbars) {
      setTimeout(() => {
        this.scrollbars.scrollToTop();
      }, 600);
    }
  }

  handleOverlayClose = () => {
    this.props.onOverlayClose();
  };

  handleOverlayContentsClick = (e: SyntheticEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  render() {
    const {activeJob} = this.props;

    if (!activeJob) {
      return (
        <Overlay
          onClick={this.handleOverlayClose}
          style={this.props.overlayOffset}
        >
          <OverlayContainer>
            <JobDetails>
              <h2>Select a job to see more details</h2>
              <img src={handIcon} alt=""/>
            </JobDetails>
          </OverlayContainer>
        </Overlay>
      );
    }

    return (
      <Overlay
        overlayActive={this.props.overlayActive}
        onClick={this.handleOverlayClose}
        style={this.props.overlayOffset}
      >
        <OverlayContainer onClick={this.handleOverlayContentsClick}>
          <OverlayCloseBtn onClick={this.handleOverlayClose}><img src={iconClose} alt=""/></OverlayCloseBtn>
          <h2>{activeJob.title}</h2>
          <ScrolledTextContainer>
            <Scrollbars ref={(el) => {
              this.scrollbars = el;
            }}>
              <JobDetails selected>
                <p>Company/Organisation: <strong>{activeJob.companyName}</strong></p>
                <p>
                  Working dates:
                  <strong>{activeJob.startDate}</strong> - <strong>{activeJob.endDate}</strong>
                </p>
                <h4>Job Summary:</h4>
                <p>{activeJob.roleSummary}</p>
                <h4>Duties:</h4>
                <ul>
                  {activeJob.duties.map((duty, i) =>
                    <li key={i}>{duty}</li>)}
                </ul>
              </JobDetails>
            </Scrollbars>
          </ScrolledTextContainer>
        </OverlayContainer>
      </Overlay>
    );
  }
}

export default ActiveJobMobile;
