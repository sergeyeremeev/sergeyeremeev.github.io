// @flow
import React from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import JobPreviewSingle from './job-preview-single';
import {JobList} from './style';

type Props = {
  jobs: Array<Object>,
  activeIndex: ?number,
  onJobSelect: Function,
  showMobileCarousel: boolean,
  shouldDisplayMobile: boolean,
};

const JobListContainer = (props: Props) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          variableWidth: true,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 679,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 500,
          cssEase: 'ease-in-out',
          centerMode: true,
          centerPadding: '40px',
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ]
  };

  const handleJobSelect = (index) => {
    props.onJobSelect(index);
  };

  const renderJobList = () => props.jobs.map((job, index) => (
    <JobPreviewSingle
      shouldDisplayMobile={props.shouldDisplayMobile}
      active={index === props.activeIndex}
      onJobSelect={() => handleJobSelect(index)}
      key={job.shortName}
      job={job}
    />
  ));

  return (
    <JobList className="fullPageScroll">
      <Slider {...settings}>
        {renderJobList()}
      </Slider>
    </JobList>
  );
};

function mapStateToProps({jobs}) {
  return {jobs};
}

export default connect(mapStateToProps)(JobListContainer);
