// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { selectSkill } from '../../../actions/index';
import { SkillSingleCSS, SkillMobileInfo } from './style';

const SkillSingle = styled.div`
  ${SkillSingleCSS};
`;

type Props = {
    angle: number,
    skill: Object,
    selectSkill: Function,
    onSkillSelect: Function,
    itemIndex: number,
    selected: boolean
};

type State = {
    hovered: boolean
};

class SkillCircle extends Component<Props, State> {
    state = { hovered: false };

    getCurrentRotation(itemIndex: number) {
        const rotation = this.props.angle * itemIndex;
        return `rotate(${rotation}deg) translate(260px) rotate(-${rotation}deg);`;
    }

    handleMouseEnter = () => {
        this.setState({ hovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ hovered: false });
    };

    handleClick = () => {
        this.props.onSkillSelect(this.props.skill);

        if (document.body && document.body.clientWidth >= 680) {
            setTimeout(() => {
                this.props.selectSkill(this.props.skill);
            }, 300);
        } else {
            this.props.selectSkill(this.props.skill);
        }
    };

    render() {
        return (
            <SkillSingle
                transformation={() => this.getCurrentRotation(this.props.itemIndex)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.handleClick}
                hovered={this.state.hovered}
                selected={this.props.selected}
            >
                {this.props.skill.name}
                <SkillMobileInfo>{this.props.skill.details}</SkillMobileInfo>
            </SkillSingle>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectSkill }, dispatch);
}

export default connect(null, mapDispatchToProps)(SkillCircle);
