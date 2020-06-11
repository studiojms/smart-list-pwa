import React from 'react';
import { Responsive, Sidebar, Menu, Icon, Container, Dropdown, Label, Image } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import Utils from '../../utils/Utils';
import logo from '../../assets/images/icon.png';
import AboutModal from '../AboutModal';
import SelectedFlag from '../SelectedFlag';

interface MobileContainerProps {
  children: React.ReactElement;
}

function MobileContainer({ children }: MobileContainerProps): JSX.Element {
  const [aboutOpen, setAboutOpen] = React.useState(false);

  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <Responsive as={Sidebar.Pusher} getWidth={Utils.getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Menu fixed="top" inverted color="orange">
        <Menu.Item as={Link} to="/" active={location.pathname == '/'} header>
          <Image src={logo} style={{ width: 20 }} className="sl-mr--10" /> {t('commom:title')}
        </Menu.Item>
        <Menu.Item position="right">
          <Dropdown basic icon={null} direction="left" trigger={<SelectedFlag />}>
            <Dropdown.Menu>
              <Dropdown.Item
                flag="br"
                onClick={(): void => {
                  i18n.changeLanguage('pt-BR');
                }}
                content={
                  <Label size="tiny" basic>
                    {t('commom:lang.portuguese')}
                  </Label>
                }
              />
              <Dropdown.Item
                flag="us"
                onClick={(): void => {
                  i18n.changeLanguage('en');
                }}
                content={
                  <Label size="tiny" basic>
                    {t('commom:lang.english')}
                  </Label>
                }
              />
            </Dropdown.Menu>
          </Dropdown>
          <div className="sl-pointer">
            <Icon name="question circle" className="sl-ml--20" onClick={() => setAboutOpen(true)} />
          </div>
        </Menu.Item>
      </Menu>
      <Container className="sl-mt--80">{children}</Container>
      <AboutModal open={aboutOpen} setOpen={setAboutOpen} />
    </Responsive>
  );
}

export default MobileContainer;
