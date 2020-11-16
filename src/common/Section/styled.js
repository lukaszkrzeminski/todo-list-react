import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.color.white};
    border: ${({theme}) => theme.color.alto} 1px solid;
    padding: 10px 20px;
    margin-top: 15px;
`;

export const Paragraph = styled.p`
    color: ${({theme}) => theme.color.black};
    display: flex;
    flex-direction: column;
`;

export const ParagraphHeader = styled.span`
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    padding: 10px 0;
    border-bottom: ${({theme}) => theme.color.alto} 2px solid;
`;

export const ParagraphBody = styled.span`
    margin: 10px 0;
    padding: 10px 0;
    line-height: 1.5;
`;