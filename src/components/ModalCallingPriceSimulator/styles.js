import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  h3{
    margin-bottom: 40px;
    color: #37267e;
  }

  .nav-buttons{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #56E5A7;
    color: #37267e;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
      margin-bottom:0;
    }
  }

  .form-group{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.7rem;
  }

  input[type="radio"]{

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 20px;
    height: 20px;

    border: 2px solid #37267e;
    transition: 0.2s all linear;
    margin-right: 10px;

    position: relative;
  }

  input[type="radio"]:checked{
    border: 6px solid #37267e;
  }

  input[type="radio"]{

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border-radius: 50%;
    width: 20px;
    height: 20px;

    border: 2px solid #37267e;
    transition: 0.2s all linear;
    margin-right: 10px;

    position: relative;
  }

  input[type="number"]{
    border-radius: 5px;
    width: 40%;
    height: 3rem;
    border: 2px solid #37267e;
    background-color: transparent;
    color: #37267e;
    padding: 1rem;
  }

`;
