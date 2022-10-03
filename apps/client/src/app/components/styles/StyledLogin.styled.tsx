import styled from 'styled-components';

export const StyledLoginStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  .login-section {

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    padding: 3rem;
    min-width: 40%;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 15px 2px rgba(136, 136, 136, 0.56);

    h1 {
      font-family: Bangers;
      font-size: 50px;
      margin: 2rem;
      color: #333333;
    }

    .login-form {
      margin-top: 2rem;
      width: 100%;
      display: flex;
      flex-grow: 1;
      flex-direction: column;

      label {
        font-weight: 300;
        font-family: inherit;
        margin-bottom: 5px;
        font-weight: 400;
      }

      input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.lines.light};
        margin-bottom: 2rem;
        height: 2.5rem;
        font-size: 1.5rem;
      }
    }

    .sign-in {
      margin-top: 2rem;
      border-radius: 50px;
      padding: 0;
      color: white;
      background-color: gray;
      border: none;
      font-size: 1.2rem;
      &:hover {
        background-color:${({ theme }) => theme.color.highlight};
      }
      &:active {
        background-color:${({ theme }) => theme.color.active};
      }
    }

    .new-account {
      margin-top: 2rem;

      span {
        margin-left: 5px;
        text-decoration: underline;
      }

      span:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.color.highlight};
      }
    }
  }

`;
