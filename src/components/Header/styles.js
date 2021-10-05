import styled from 'styled-components';

export const Container = styled.div`
  background: #56E5A7;
  color: #37267e;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoContainer{
      padding: 0 3rem;
    }

    .vx {
      font-weight: 700;
      color: #3726c9;
    }

    div {
      padding: 0 3rem;

      .slogan {
          font-weight: 500;
          font-size: 18pt;
          color: #37267e;
      }
    }
  }
`;
