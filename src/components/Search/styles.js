import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    border-radius: 3px;
    color: #444;
    text-align: center;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  height: 55px;
  padding: 0 20px;
  margin-left: 10px;
  background: #bf0c0c;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  border-radius: 3px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
