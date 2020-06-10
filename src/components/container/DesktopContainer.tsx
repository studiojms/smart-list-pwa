import React from 'react';
import {
  Responsive,
  Visibility,
  Menu,
  Container,
  Image,
  Input,
  Dropdown,
  Label,
  Popup,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

import logo from '../../assets/images/icon.png';
import { filterItems, loadItems } from '../../pages/smartItem/itemSlice';
import Utils from '../../utils/Utils';

interface DesktopContainerProps {
  children: React.ReactElement;
}

function DesktopContainer({ children }: DesktopContainerProps): JSX.Element {
  const [fixed, setFixed] = React.useState(true);
  const [search, setSearch] = React.useState('');

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const hideFixedMenu = (): void => setFixed(false);
  const showFixedMenu = (): void => setFixed(true);

  const menuContent = (
    <Container>
      <Menu.Item as={Link} to="/" header active={location.pathname == '/'}>
        <Image src={logo} size="mini" className="sl-mr--10" /> {t('commom:title')}
      </Menu.Item>
      <Menu.Item>
        <form
          onSubmit={() => {
            dispatch(filterItems(search));
          }}
        >
          <Input action>
            <Input
              icon="search"
              iconPosition="left"
              size="mini"
              placeholder={t('commom:search')}
              value={search}
              onChange={(e: { target: HTMLInputElement }): void => {
                setSearch(e.target.value);
              }}
            />
            <Button
              type="button"
              icon="delete"
              onClick={() => {
                setSearch('');
                dispatch(loadItems());
              }}
            />
          </Input>
        </form>
      </Menu.Item>
      <Menu.Item position="right">
        <Popup
          content={t('commom:changeLanguage')}
          trigger={
            <Dropdown basic icon="world">
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
          }
        />
        <a href="https://github.com/studiojms/smart-list-pwa" className="sl-ml--30">
          <Icon name="github" />
        </a>
      </Menu.Item>
    </Container>
  );

  let menu;

  if (fixed) {
    menu = (
      <Menu attached="top" color="orange" inverted size="huge" borderless>
        {menuContent}
      </Menu>
    );
  } else {
    menu = (
      <Menu inverted={!fixed} pointing={!fixed} secondary={!fixed} size="huge" color="orange">
        {menuContent}
      </Menu>
    );
  }

  return (
    <Responsive getWidth={Utils.getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
        {menu}
      </Visibility>
      <Container className="sl-mt--15">{children}</Container>
    </Responsive>
  );
}

export default DesktopContainer;
