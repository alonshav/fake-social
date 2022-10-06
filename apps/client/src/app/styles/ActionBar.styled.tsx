import styled from 'styled-components';

export const StyledActionBar = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.lines.light};

  .icon {
    font-weight: 100;
    font-size: 30px;
  }

  .icon-text {
    font-size: 14px;
    margin-left: 5px;
  }
`;
