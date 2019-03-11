// @flow
import React, { Component } from 'react';
import { SectionWrapper, SectionContainer } from '../common/wrappers';
import { animateContentOnScroll } from '../../helpers/slideContentOnScroll';
import { MessageContainer, MessageInner } from './style';

class Message extends Component<{}, { scrolledTo: boolean }> {
    state = { scrolledTo: false };

    componentWillReceiveProps(nextProps: Object): void {
        if (nextProps.active && !this.state.scrolledTo) {
            this.setState({ scrolledTo: true });
        }
    }

    element: ?HTMLDivElement;

    render() {
        return (
            <SectionWrapper>
                <SectionContainer>
                    <MessageContainer
                        innerRef={(el) => { this.element = el; }}
                        scrolledTo={this.state.scrolledTo}
                    >
                        <MessageInner>
                            <h2>Statement</h2>
                            <p>
                                <strong>I believe</strong> in hard work more than in anything else. True hard work is
                                when 8 hours is not enough. In fact it is when 24 hours is not enough. Hard work is when
                                you know that you gave everything you had and still believe it was not enough. It takes
                                immense willpower to defeat laziness and just do your job. It is a constant state of
                                self-improvement which stretches to all areas of your everyday life and not just your
                                career. It is discipline and dedication, which are just like muscles, they can be made
                                stronger if you are ready to do the exercises every day. No matter how you feel, there
                                is no reason good enough to skip a day. Hard work is the only way to success and if you
                                are not ready to make such sacrifices - you will fail.
                            </p>
                            <p>
                                <strong>I believe</strong> that a hard working person with little knowledge is ten times
                                more valuable than an average one with a library in his head.  Hard workers keep
                                improving every day. They do not do it because they have to. They do it because they can
                                not live without it. Nothing feels worse to them than a day without at least a little
                                achievement. These people provide the most value in the long run. These people are the
                                only ones that achieve truly great things.
                            </p>
                            <p>
                                <strong>I believe</strong> that I have what it takes to outwork most people. Once the
                                goal is set, I will do every single thing I can to become the very best. There is no
                                limit to how much work you can do, the only limitation is your willpower. The only way
                                to improve further is to work harder and I do it every single day. I get inspired by
                                hard working people and my goal is to work with them, learn from then and, eventually,
                                better them.
                            </p>
                            <p>
                                Such level of hard work, combined with a large degree of creative thinking is what sets
                                me above most other developers. These beliefs are deeply embedded in my mentality and
                                because of the I can say with confidence that every day will be better then the last.
                                Today I will work harder than I did yesterday. Today I will achieve more than I did
                                yesterday. Today will be a great day and I <strong>refuse</strong> to wait for tomorrow.
                            </p>
                        </MessageInner>
                    </MessageContainer>
                </SectionContainer>
            </SectionWrapper>
        );
    }
}

export default Message;
