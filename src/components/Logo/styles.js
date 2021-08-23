import styled from 'styled-components';


export const LogoStyle = styled.h1`

    font-family:  ${(props) => props.theme.fonts.fontFamily};
    color:  ${(props) => props.theme.colors.logo};
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;


`;
