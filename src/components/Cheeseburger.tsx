import styled, { css } from 'styled-components';
import { ReactComponent as CheeseburgerSvg } from '../shared/assets/svg/cheeseburger.svg';

const StyledCheesburger = styled(CheeseburgerSvg)<{ open?: boolean }>`
  fill: none;
  stroke: ${({ theme }) => theme.color.light};
  stroke-miterlimit: 10;
  stroke-width: 1px;
  cursor: pointer;

  path {
    stroke-dasharray: 25 45;
    stroke-dashoffset: 0;
  }
  #middle {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  #top,
  #bottom {
    transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${(props) =>
    props.open &&
    css`
      #middle {
        opacity: 0;
      }

      #top,
      #bottom {
        stroke-dashoffset: -45;
      }
    `}
`;

const Cheeseburger = ({ open, setOpen, className }: { open: boolean; setOpen: Function; className?: string }) => {
  const toggleOpen = () => setOpen(!open);

  return <StyledCheesburger onClick={toggleOpen} open={open} className={className} />;
};

export default Cheeseburger;
