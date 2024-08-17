import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 375px;
  height: 450px;
  border: 1px solid #eaecf0;
  box-shadow: -5px 9px 23px 0px #cfcfcf14;
  border-radius: 16px;
  padding: 16px;
  gap: 8px;
  position: relative;
`;

export const Logo = styled.img`
  margin-bottom: 24px;
`;

export const Heading = styled.h1`
  font-size: 16px;
  text-align: center;
  margin: 0;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const SubHeading = styled.p`
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid
    ${(props) => (props?.error ? "red" : props.theme.colors.border)};
  border-radius: 8px;
  font-size: 16px;
  font-family: "IRANSansFaNum";
  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.disabled ? "#ccc" : props.theme.colors.primary};
  color: #fff;
  font-size: 16px;
  font-family: "IRANSansFaNum";
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s ease;
  &:disabled {
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: 2px;
`;

export const LoginText = styled.p`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
`;

export const OtpContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  direction: ltr;
  padding: 16px 16px 0;
  & > input {
    text-align: center;
  }
`;

export const ResendBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
`;

export const BackButton = styled.a`
  position: absolute;
  top: 35px;
  left: 25px;
`;
