import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from 'material-ui/Slider';

const styles = () => ({
  container: {
    width: 300,
  },
});

class ReverseSlider extends React.Component {
  state = { value: 3 };

  handleChange = (event, value) => this.setState({ value });
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.container}>
        <Slider value={value} min={0} max={6} onChange={this.handleChange} />
        <Slider value={value} min={0} max={6} onChange={this.handleChange} reverse />
      </div>
    );
  }
}

ReverseSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReverseSlider);
