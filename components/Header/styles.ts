import styled from "@emotion/styled";
import { Flex, Text } from "@chakra-ui/react";

export const GreyBackground = styled(Flex)`
  background-color: #edf2f7;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 90vw;
  flex-direction: column;
`;

export const TitleContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 40px;
  color: #2d3748;
`;

export const SubTitle = styled(Text)`
  font-size: 24;
  font-weight: 500;
  color: #718096;
`;
