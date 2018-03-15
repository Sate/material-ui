import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Slider from 'material-ui/Slider';

const styles = () => ({
  container: {
    width: 300,
  },
});

class SimpleSlider extends React.Component {
  state = { value: 0.5 };

  handleChange = (event, value) => this.setState({ value });
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.container}>
        <Slider value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);
