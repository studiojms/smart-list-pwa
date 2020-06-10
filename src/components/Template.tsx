import React from 'react';

import DesktopContainer from './container/DesktopContainer';
import MobileContainer from './container/MobileContainer';

interface TemplateProps {
  children: React.ReactElement;
}

const ResponsiveContainer: React.FC<TemplateProps> = ({ children }: TemplateProps) => (
  <>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </>
);

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  return <ResponsiveContainer>{children}</ResponsiveContainer>;
};

export default Template;
