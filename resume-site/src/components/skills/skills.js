// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillMain from './skill-main/skill-main';
import SkillCircle from './skill-circle/skill-circle';
import SectionTitle from '../common/section-title';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { rotateContentOnScroll } from '../../helpers/rotateContent';
import { SkillsContainer, SkillsRotator } from './style';

type Props = {
    skills: Array<Object>,
    active: boolean,
};

type State = {
    activeIndex: ?number,
    mainCircleResetting: boolean,
    scrolledTo: boolean
};

class Skills extends Component<Props, State> {
    state = {
        activeIndex: null,
        mainCircleResetting: false,
        scrolledTo: false,
    };

    componentWillReceiveProps(nextProps: Object): void {
        if (nextProps.active && !this.state.scrolledTo) {
            this.setState({ scrolledTo: true });
        }
    }

    handleSkillSelect = (index) => {
        if (this.state.activeIndex !== index) {
            this.setState({ activeIndex: index });
            this.setState({ mainCircleResetting: true });

            setTimeout(() => {
                this.setState({ mainCircleResetting: false });
            }, 300);
        } else if (document.body && document.body.clientWidth < 680) {
            this.setState({ activeIndex: null });
        }
    };

    element: ?HTMLDivElement;

    render() {
        return (
            <SectionWrapper>
                <SectionContainer>
                    <SectionTitle>Skills</SectionTitle>
                    <SkillsContainer innerRef={(el) => { this.element = el; }}>
                        <SkillMain
                            animating={this.state.mainCircleResetting}
                        />
                        <SkillsRotator scrolledTo={this.state.scrolledTo}>
                            {this.props.skills.map((skill, index) =>
                                (<SkillCircle
                                    key={index}
                                    skill={skill}
                                    itemIndex={index}
                                    angle={360 / this.props.skills.length}
                                    onSkillSelect={() => this.handleSkillSelect(index)}
                                    selected={index === this.state.activeIndex}
                                />))}
                        </SkillsRotator>
                    </SkillsContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

function mapStateToProps({ skills }) {
    return { skills };
}

export default connect(mapStateToProps)(Skills);
