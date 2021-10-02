import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
        <DropdownIcon id="chevron-down"/>
        <StyledSelect value={value} onChange={onChange}>
          {children}
        </StyledSelect>
      </Wrapper>
  )
      ;
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;

  padding: 12px 48px 12px 16px;

  border: 1px solid #6f6f6f;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700}
`

const DropdownIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 10px;
  pointer-events: none;
`

export default Select;
