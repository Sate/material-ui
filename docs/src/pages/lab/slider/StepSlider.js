import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from '../../../../../packages/material-ui-lab/src/Slider/Slider';

const styles = () => ({
  container: {
    width: 300,
  },
});

class StepSlider extends React.Component {
  state = { value: 3 };

  handleChange = (event, value) => this.setState({ value });

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.container}>
        <Slider value={value} min={0} max={6} step={1} onChange={this.handleChange} />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);
