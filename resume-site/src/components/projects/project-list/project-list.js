// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { selectProject, focusProject } from '../../../actions/index';
import { ProjectTileCSS } from './style';

const ProjectTile = styled.div`
  ${ProjectTileCSS};
`;

type Props = {
    selectProject: Function,
    focusProject: Function,
    onProjectSelect: Function,
    onProjectFocus: Function,
    projects: Object,
    mobileProjectsVisible: boolean
};

const ProjectList = (props: Props) => {
    const handleClick = (project) => {
        props.selectProject(project);
        props.onProjectSelect();
    };

    const handleFocus = (project) => {
        props.focusProject(project);
        props.onProjectFocus(project);
    };

    return props.projects.map((project) => (
      <ProjectTile
        key={project.shortName}
        onClick={() => handleClick(project)}
        onMouseEnter={() => handleFocus(project)}
        allVisible={props.mobileProjectsVisible}
      >
          <div>
              <img src={project.image} alt="" />
              <h3>{project.name}</h3>
          </div>
      </ProjectTile>
    ));
};

function mapStateToProps({ projects }) {
    return { projects };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectProject, focusProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
