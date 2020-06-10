import React from 'react';
import { Responsive, Sidebar, Menu, Icon, Container, Dropdown, Label, Header, Image } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import Utils from '../../utils/Utils';
import logo from '../../assets/images/icon.png';

interface MobileContainerProps {
  children: React.ReactElement;
}

function MobileContainer({ children }: MobileContainerProps): JSX.Element {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleSidebarHide = (): void => setSidebarOpened(false);
  const handleToggle = (): void => setSidebarOpened(true);

  return (
    <Responsive as={Sidebar.Pusher} getWidth={Utils.getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={sidebarOpened}
          onHide={handleSidebarHide}
          color="orange"
        >
          <Menu.Item as={Link} to="/new-list" active={location.pathname == '/new-list'} onClick={handleSidebarHide}>
            {t('commom:menu.newList')}
          </Menu.Item>
          <Menu.Item as={Link} to="/lists" active={location.pathname == '/lists'} onClick={handleSidebarHide}>
            {t('commom:menu.lists')}
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: '100vh' }}>
          <Menu fixed="top" inverted color="orange">
            <Menu.Item onClick={handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Item as={Link} to="/" active={location.pathname == '/'} header>
              <Image src={logo} style={{ width: 20 }} className="sl-mr--10" /> {t('commom:title')}
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown direction="left" basic icon="world">
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
            </Menu.Item>
          </Menu>
          <Container className="sl-mt--80">{children}</Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Responsive>
  );
}

export default MobileContainer;
