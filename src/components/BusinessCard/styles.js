import styled from 'styled-components';
import Text from '../Text';

export const Business = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: #00000021;
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BusinessPhoto = styled.img`
  border-radius: 6px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  display: ${({ imageLoaded }) => (imageLoaded ? 'block' : 'none')};
`;

export const Content = styled(Text)`
  margin-top: 5px;
`;
