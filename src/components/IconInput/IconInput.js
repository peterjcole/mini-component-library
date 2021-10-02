import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
                     label,
                     icon,
                     width = 250,
                     size,
                     placeholder,
                   }) => {
  return (
      <Wrapper>
        <InputIcon id={icon} size={size === 'small' ? 16 : 24}/>
        <NativeInput type="text" style={{
          '--width': width + 'px',
          '--font-size': size === 'small' ? 14 / 16 + 'rem' : 16 / 16 + 'rem',
          '--padding-left': size === 'small' ? '24px' : '36px'
        }} placeholder={placeholder} id="input" size={size}/>
        <VisuallyHidden><label htmlFor="input">{label}</label></VisuallyHidden>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }

`

const NativeInput = styled.input`
  width: var(--width);
  font-size: var(--font-size);
  font-weight: 700;
  padding: 4px 4px 4px var(--padding-left);
  border: 0;
  border-bottom: 1px solid black;
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }
`

const InputIcon = styled(Icon)`
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`

export default IconInput;
