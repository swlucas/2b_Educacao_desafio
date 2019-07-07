import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Comic = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  background: #fff;
  border-radius: 3px;
  margin: 10px 10px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 300px;
      height: 465px;
      padding: 5px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
      text-decoration: none;
    }

    /* small {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
      text-align: center;
    } */
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    list-style: none;
    margin-bottom: 5px;

    li {
      padding: 7px 4px 3px 4px;
      font-size: 12px;

      small {
        font-weight: normal;
        font-size: 10px;
        color: #999;
        font-style: italic;
      }
    }
  }
`;

export const Title = styled.text``;

export const Thumbnail = styled.img``;

export const Creator = styled.text``;
