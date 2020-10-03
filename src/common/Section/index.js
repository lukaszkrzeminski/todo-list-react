import React from "react";
import { Container, Paragraph, ParagraphHeader, ParagraphBody } from "./styled";

const Section = ({ contentHeader, contentBody }) => (
    <Container>
        <Paragraph>
            <ParagraphHeader>
                {contentHeader}
            </ParagraphHeader>
            <ParagraphBody>
                {contentBody}
            </ParagraphBody>
        </Paragraph>
    </Container>
);

export default Section;