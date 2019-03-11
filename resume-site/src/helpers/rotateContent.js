import { css } from 'styled-components';

export const RotatedContentCSS = css`
  transform: ${props => (props.scrolledTo ? 'none' : 'rotate(-90deg)')};
  transition: transform 1.2s ease;
`;

export function rotateContentOnScroll() {
    const scrolledFromTop = (window.pageYOffset !== undefined) ? window.pageYOffset :
        (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const windowHeight = window.innerHeight;

    if (this.element.offsetTop + 150 < scrolledFromTop + windowHeight) {
        this.setState({ scrolledTo: true });
    }
}
