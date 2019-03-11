import { css } from 'styled-components';

export const SlidingDownContentCSS = css`
  transform: ${props => (props.scrolledTo ? 'none' : 'translateY(-200px)')};
  opacity: ${props => (props.scrolledTo ? '1' : '0')};
  transition: transform 0.8s ease, opacity 0.8s ease;
  
  @media (max-width: 679px) {
    transform: ${props => (props.scrolledTo ? 'none' : 'translateY(-100px)')};
  }
`;

export const SlidingUpContentCSS = css`
  transform: ${props => (props.scrolledTo ? 'none' : 'translateY(200px)')};
  opacity: ${props => (props.scrolledTo ? '1' : '0')};
  transition: transform 0.8s ease, opacity 0.8s ease;
  
  @media (max-width: 679px) {
    transform: ${props => (props.scrolledTo ? 'none' : 'translateY(100px)')};
  }
`;

// export function animateContentOnScroll() {
//     const scrolledFromTop = (window.pageYOffset !== undefined) ? window.pageYOffset :
//         (document.documentElement || document.body.parentNode || document.body).scrollTop;
//     const windowHeight = window.innerHeight;
//
//     if (this.element.offsetTop + 150 < scrolledFromTop + windowHeight) {
//         this.setState({ scrolledTo: true });
//     }
// }

export function animateContentOnScroll(el) {
    if (el.classList.contains('active') !== -1) {
        this.setState({ scrolledTo: true });
    }
}
