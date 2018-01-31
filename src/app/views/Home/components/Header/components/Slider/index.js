// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Controller from './components/Controller';

// Libreries

// Styles
import styles from './scss/Slider.scss';


class Slider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pictures } = this.props;
    const background = {
      background: `url(${pictures.all[pictures.all.indexOf(pictures.current)]}) no-repeat center center`
    };
    return (
      <div className={`${styles.slider}`} style={background} onClick={() => nextPicture(pictures)}>
        <Controller />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.home.header.carousel.pictures
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
