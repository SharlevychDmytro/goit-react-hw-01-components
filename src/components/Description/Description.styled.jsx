import styled from 'styled-components';

export const Avatar = styled.img`
  margin-bottom: ${p => p.theme.space[5]}px;
  width: 200px;
  border-radius: ${p => p.theme.radii.round};
  border: solid ${p => p.theme.space[1]}px;
  border-color: ${p => p.theme.colors.secondary};
`;

export const UserName = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
`;

export const Tag = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.primery};
`;

export const Location = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.primery};
`;
