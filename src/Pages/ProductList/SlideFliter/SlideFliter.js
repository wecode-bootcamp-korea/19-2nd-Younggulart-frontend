import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
    // + theme.spacing(3) * 2,
  },
  // margin: {
  //   height: theme.spacing(3),
  // },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

// eslint-disable-next-line no-unused-vars
const marks = [
  {
    value: 0,
    label: '',
  },
  {
    value: 10,
    label: '',
  },
  {
    value: 20,
    label: '',
  },
  {
    value: 30,
    label: '',
  },
  {
    value: 40,
    label: '',
  },
  {
    value: 50,
    label: '',
  },
  {
    value: 60,
    label: '',
  },
  {
    value: 70,
    label: '',
  },
  {
    value: 80,
    label: '',
  },
  {
    value: 90,
    label: '',
  },
  {
    value: 100,
    label: '',
  },
];

const AirbnbSlider = withStyles({
  root: {
    color: '#D5A770',
    height: 3,

    padding: '13px 0',
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#D5A770',
    border: '1px solid #D5A770',
    marginTop: -7,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 7,
  },
  rail: {
    color: 'white',
    opacity: 1,
    height: 7,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function CustomizedSlider(props) {
  const classes = useStyles();

  // const [markMin, setMarkMin] = useState(0);
  // const [markMax, setMarkMax] = useState(100);
  // eslint-disable-next-line no-unused-vars
  const [arrs, setArrs] = useState([]);

  function valueLabelFormat(value) {
    // setArrs(value);
    // return marks.findIndex(mark => mark.value === value) + 1;
  }
  const [value, setValue] = React.useState([0, props.max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setMin(newValue[0]);
    props.setMax(newValue[1]);
  };
  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <div
        className="wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography gutterBottom>{props.name}</Typography>
        <div className="value">
          {value[0]}-{value[1]}
        </div>
      </div>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={index => {
          return index === 0 ? 'Minimum price' : 'Maximum price';
        }}
        defaultValue={[0, props.max]}
        // marks={marks}
        valueLabelFormat={valueLabelFormat}
        step={10}
        onChange={handleChange}
        min={0}
        max={props.max}
      />
    </div>
  );
}
