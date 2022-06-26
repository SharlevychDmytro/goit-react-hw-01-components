import styled from 'styled-components';

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: ${p => p.theme.space[5]}px;
  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
  }
`;

export const StatsName = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.primery};
`;

export const StatsValue = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
`;
