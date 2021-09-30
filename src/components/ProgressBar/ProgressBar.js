/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({value, size}) => {

  return <Bar role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" size={size}>
    <InnerBarFillArea>
      <InnerBar value={value}/>
    </InnerBarFillArea>
  </Bar>
};

const sizes = {
  small: {
    height: '8px',
    borderRadius: '4px'
  },
  medium: {
    height: '12px',
    borderRadius: '4px'
  },
  large: {
    height: '24px',
    borderRadius: '8px'
  }
}

const GreyBar = styled.div`
  width: ${props => 100 - props.value}%;
  height: 100%;
  background-color: ${COLORS.transparentGray15};
  float: right;
`

const BlueBar = styled.div`
  //width: 100%;
  height: 100%;
  background-color: ${COLORS.primary};
`

const Bar = styled.div`
  width: 370px;
  height: ${props => sizes[props.size].height};
  border-radius: ${props => sizes[props.size].borderRadius};
  padding: ${props => props.size === 'large' ? '4px' : 0};
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const InnerBarFillArea = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  height: 100%;
  background-image: url('/kuro.png');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 30px;
`

export default ProgressBar;
