import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SearchedWrapper = styled.div`
${({ animate }) =>
    animate &&
    css`
      animation: ${slideUp} 3s forwards; 
    `}
`;

export const SearchedForm = styled.form`
  width: 75%;
  margin: 30px auto;
`;

export const IPInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f6f7f9;
  border-radius: 8px;
  margin-top: 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
  opacity: 0;
  visibility: hidden;

  &.visible {
    max-height: 1000px; 
    opacity: 1;
    visibility: visible;
  }
`;

export const IPInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
  transition: transform 0.5s ease-in-out;
  direction: ltr;
`;

export const IPInfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
`;

export const IPInfoLabel = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const IPInfoValue = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const IpAddressItem = styled(IPInfoItem)`
  grid-column: 1;
  grid-row: 1;
`;

export const LatitudeItem = styled(IPInfoItem)`
  grid-column: 2;
  grid-row: 1;
`;

export const CountryItem = styled(IPInfoItem)`
  grid-column: 1;
  grid-row: 2;
`;

export const LongitudeItem = styled(IPInfoItem)`
  grid-column: 2;
  grid-row: 2;
`;

export const RegionItem = styled(IPInfoItem)`
  grid-column: 1 / span 1;
  grid-row: 3;
`;

export const CityItem = styled(IPInfoItem)`
  grid-column: 1 / span 1;
  grid-row: 4;
`;

export const MapPlaceholder = styled.div`
  flex-basis: 30%;
  background-color: #e0e0e0;
  height: 200px;
  border-radius: 8px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding-right: 10px;
  border: 1px solid
    ${(props) => (props?.error ? "red" : props.theme.colors.border)};
  border-radius: 8px;
  font-size: 16px;
  font-family: "IRANSansFaNum";
  background-image: url("assets/img/search.svg");
  background-repeat: no-repeat;
  background-position: 99%;
  padding-right: 50px;
  &:focus {
    outline: none;
    border-color: #1043a6;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100%;
  padding: 0 20px;
  background: none;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  background: ${(props) =>
    props.disabled ? "#ccc" : props.theme.colors.primary};
`;

export const Heading = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const SubHeading = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: #666;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: 5px;
`;
