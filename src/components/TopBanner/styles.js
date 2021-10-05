import styled from 'styled-components';
import img from '../../assets/img.jpg';

export const Container = styled.div`
  background: url(${img});
  padding: 30px 0;

  .hero {
    width: 1280px;
    height: 600px;
    margin: 0 auto;
    padding: 0 0 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pageTitle{
      margin-top: 3rem;
    }

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #56E5A7;
          color: #37267e;

          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 150px;

          .text {
            padding: 16px 24px;
          }
          
        }
      }
    }
  }
`;
