import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from 'material-ui/Slider';

const styles = () => ({
  container: {
    width: 300,
  },
});

function DisabledSlider({ classes }) {
  return (
    <div className={classes.container}>
      <Slider value={0} min={0} max={6} disabled />
      <Slider value={3} min={0} max={6} disabled />
      <Slider value={6} min={0} max={6} disabled />
    </div>
  );
}

DisabledSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisabledSlider);
