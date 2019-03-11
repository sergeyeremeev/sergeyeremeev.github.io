// @flow
import React, {Component} from 'react';
import {animateContentOnScroll} from '../../helpers/slideContentOnScroll';
import themeColors from '../../helpers/theme-colors';
// import htmlGlasses from '../../assets/images/html_glasses_logo.svg';
import CV from '../../assets/documents/CV.pdf';
import {
  HeaderContainer,
  HeaderPhotoMobile,
  HeaderPhoto,
  HeaderPhotoMask,
  HeaderContent,
  SlideOutText,
  TypedText,
  HeaderLinks,
  HeaderArrow
} from './style';
import me from '../../assets/images/me.jpg';
import mePortrait from '../../assets/images/me_portrait.jpg';

type State = {
  scrolledTo: boolean,
  photoStyle: {width: string, height: string},
  typedText: ?string,
};

class Header extends Component<{ onMoveDown: void, onMoveToContact: Function }, State> {
  element: ?HTMLHeadingElement;
  photoContainer: ?HTMLDivElement;
  photoContainerMobile: ?HTMLDivElement;
  slideOutTitle: ?HTMLTitleElement;
  typedTitle: ?HTMLTitleElement;
  jumpingArrow: ?HTMLDivElement;
  buttons: ?HTMLDivElement;

  state = {
    scrolledTo: false,
    photoStyle: {
      width: '0px',
      height: '0px',
    },
    typedText: null,
  };

  headerImage = new Image();
  headerImageMobile = new Image();

  componentDidMount() {
    animateContentOnScroll.call(this, document.getElementsByClassName('section_header')[0]);

    this.updatePhotoWidth();
    window.addEventListener('resize', this.updatePhotoWidth);

    this.startAnimations();

    this.headerImage.src = me;
    this.headerImageMobile.src = mePortrait;
  }

  startAnimations() {
    if (window.outerWidth >= 1280) {
      this.headerImage.onload = () => {
        this.splitImageIntoTiles();
        this.setState({typedText: this.typedTitle ? this.typedTitle.textContent : null});
        this.prepareTypedTitle();

        this.animatePhotoTiles()
          .then(() => this.queueAnimations.call(this));
      };
    } else {
      this.headerImageMobile.onload = () => {
        this.setState({typedText: this.typedTitle ? this.typedTitle.textContent : null});
        this.prepareTypedTitle();

        this.queueAnimations();
      };
    }
  }

  queueAnimations() {
    this.photoContainerMobile.classList += ' loaded';

    this.slideOutText.call(this)
      .then(() => this.simulateTyping.call(this))
      .then(() => this.showButtons.call(this))
      .then(() => this.showArrow.call(this));
  }

  splitImageIntoTiles() {
    const origTileWidth = this.headerImage.width / 10;
    const origTileHeight = this.headerImage.height / 10;
    const fullWidth = this.state.photoStyle.width;
    const fullHeight = this.state.photoStyle.height;

    const tileWidth = `${Number(fullWidth.substring(0, fullWidth.length - 2)) / 10}px`;
    const tileHeight = `${Number(fullHeight.substring(0, fullHeight.length - 2)) / 10}px`;

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = origTileWidth;
        canvas.height = origTileHeight;
        context.drawImage(this.headerImage, y * origTileWidth, x * origTileHeight, origTileWidth, origTileHeight, 0, 0, origTileWidth, origTileHeight);

        const imgTile = new Image();
        imgTile.src = canvas.toDataURL();
        imgTile.className = `img-tile img-tile-${x * 10 + y}`;
        imgTile.style.width = tileWidth;
        imgTile.style.height = tileHeight;
        imgTile.style.transition = `transform ${300 + Math.random() * 1200}ms cubic-bezier(0.645, 0.045, 0.355, 1) ${Math.random() * 300}ms`;

        if (this.photoContainer) {
          this.photoContainer.appendChild(imgTile);
        }
      }
    }
  }

  splitMobileImage() {
    const tileWidth = '16px';
    const tileHeight = '160px';
  }

  animatePhotoTiles(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.photoContainer) {
          this.photoContainer.className += ' tiles-ready';
        }
        resolve();
      }, 500);
    });
  }

  slideOutText(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.photoContainer) {
          this.photoContainer.className += ' animation-finished';
        }

        if (this.slideOutTitle) {
          this.slideOutTitle.className += ' slide-out';
        }
        resolve();
      }, 1700);
    });
  }

  prepareTypedTitle() {
    if (this.typedTitle) {
      // this.typedTitle.style.width = `${this.typedTitle.offsetWidth + 5}px`;
      this.typedTitle.textContent = '';
      this.typedTitle.appendChild(document.createElement('span'));
    }
  }

  simulateTyping(): Promise<void> {
    let charsArray = [];
    if (this.state.typedText) {
      charsArray = this.state.typedText.split('');
    }
    const charsLen = charsArray.length;

    let el = null;
    if (this.typedTitle) {
      el = this.typedTitle.children[0];
    }
    const speed = 2500 / charsLen;

    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.typedTitle) {
          this.typedTitle.className += ' visible';
        }

        for (let i = 0; i < charsLen; i++) {
          setTimeout(() => {
            if (el) {
              el.textContent += charsArray[i];
            }
          }, i * speed);
        }

        resolve();
      }, 500);
    });
  }

  showButtons() {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.buttons) {
          this.buttons.className += ' slide-out';
        }

        resolve();
      }, 2500);
    });
  }

  showArrow() {
    setTimeout(() => {
      if (this.jumpingArrow) {
        this.jumpingArrow.className += ' visible';
      }
    }, 300);
  }

  updatePhotoWidth = () => {
    const finalWidth = `${Math.ceil(window.innerHeight / 10 * 0.6666666) * 10}px`;
    const finalHeight = `${Math.ceil(window.innerHeight / 10) * 10}px`;
    this.setState({photoStyle: {width: finalWidth, height: finalHeight}});
  };

  render() {
    return (
      <HeaderContainer innerRef={(el) => {
        this.element = el;
      }}>
        <HeaderPhoto
          style={this.state.photoStyle}
          innerRef={(el) => {
            this.photoContainer = el;
          }}
        >
          <HeaderPhotoMask>
          </HeaderPhotoMask>
        </HeaderPhoto>
        <HeaderPhotoMobile
          innerRef={(el) => {
            this.photoContainerMobile = el;
          }}
        >
          <svg className="photo-border" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="79" stroke={themeColors.white} fill="transparent" strokeWidth="3"/>
          </svg>
          <svg className="photo-reveal" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="70" stroke={themeColors.blue3} fill="transparent" strokeWidth="20"/>
          </svg>
          <svg className="photo-reveal" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="51" stroke={themeColors.blue1} fill="transparent" strokeWidth="20"/>
          </svg>
          <svg className="photo-reveal" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="32" stroke={themeColors.blue2} fill="transparent" strokeWidth="20"/>
          </svg>
          <svg className="photo-reveal" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="80" r="13" stroke={themeColors.blue4} fill="transparent" strokeWidth="25"/>
          </svg>
        </HeaderPhotoMobile>
        <HeaderContent>
          <SlideOutText
            innerRef={(el) => { this.slideOutTitle = el; }}
          >
            Sergey Eremeev
          </SlideOutText>
          <TypedText
            innerRef={(el) => { this.typedTitle = el; }}
          >
            Turning great ideas into reality.
          </TypedText>
          <HeaderLinks
            innerRef={(el) => { this.buttons = el; }}
          >
            <a href={CV} download="Resume"><span>Resume</span></a>
            <button onClick={this.props.onMoveToContact}><span>Contact</span></button>
          </HeaderLinks>
          <HeaderArrow
            innerRef={(el) => { this.jumpingArrow = el; }}
            onClick={this.props.onMoveDown}
          >
            &#8595;
          </HeaderArrow>
        </HeaderContent>
      </HeaderContainer>
    );
  }
}

export default Header;
