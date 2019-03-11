// @flow
import React from 'react';
import { connect } from 'react-redux';
import ActiveJobMobile from './job-active-mobile';
import ActiveJobDesktop from './job-active-desktop';

type Props = {
    activeJob: Object,
    animateResetter: boolean,
    shouldDisplayMobile: boolean,
    overlayActive: boolean,
    overlayOffset: Object,
    onOverlayClose: Function,
};

const ActiveJob = (props: Props) => {
    const {
        activeJob, animateResetter, shouldDisplayMobile, overlayActive, onOverlayClose, overlayOffset
    } = props;

    if (shouldDisplayMobile) {
        return (
            <ActiveJobMobile
                activeJob={activeJob}
                overlayActive={overlayActive}
                onOverlayClose={onOverlayClose}
                overlayOffset={overlayOffset}
            />
        );
    }

    return (
        <ActiveJobDesktop
            activeJob={activeJob}
            animateResetter={animateResetter}
        />
    );
};

function mapStateToProps({ activeJob }) {
    return { activeJob };
}

export default connect(mapStateToProps)(ActiveJob);
