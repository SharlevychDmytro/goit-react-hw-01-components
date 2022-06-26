import styled from 'styled-components';

export const ItemStats = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px;
`;

export const Percentage = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
`;
