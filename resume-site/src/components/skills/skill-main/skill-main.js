// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SkillsCircleMainCSS from './style';

const SkillsCircleMain = styled.div`
  ${SkillsCircleMainCSS};
`;

type Props = {
    activeSkill: Object,
    animating: boolean
};

const SkillMain = (props: Props) => {
    const { activeSkill, animating } = props;

    if (!activeSkill) {
        return (
            <SkillsCircleMain animating={animating}>
                <h2>Select a skill</h2>
            </SkillsCircleMain>
        );
    }

    return (
        <SkillsCircleMain animating={animating}>
            <p>{activeSkill.details}</p>
        </SkillsCircleMain>
    );
};

function mapStateToProps({ activeSkill }) {
    return { activeSkill };
}

export default connect(mapStateToProps)(SkillMain);
