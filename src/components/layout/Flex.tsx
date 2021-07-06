import { ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from '../interfaces/container.interface';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
type FlexJustify =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface FlexProperties extends Container {
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
}

const StyledFlex = styled.div<FlexProperties>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

const Flex = ({
  children,
  flexProps,
  className,
}: {
  children: ReactNode;
  flexProps?: FlexProperties;
  className?: string;
}) => {
  return (
    <StyledFlex className={className} {...flexProps}>
      {children}
    </StyledFlex>
  );
};

export default Flex;
