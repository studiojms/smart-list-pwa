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
  Segment,
  Confirm,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

import logo from '../../assets/images/icon.png';
import { filterItems, loadItems, removeAllItems, removeCompletedItems } from '../../pages/home/smartItem/itemSlice';
import Utils from '../../utils/Utils';
import AboutModal from '../AboutModal';
import SelectedFlag from '../SelectedFlag';

interface DesktopContainerProps {
  children: React.ReactElement;
}

/**
 * Wide container for the application
 *
 * @param children content to be displayed
 */
function DesktopContainer({ children }: DesktopContainerProps): JSX.Element {
  const [fixed, setFixed] = React.useState(true);
  const [search, setSearch] = React.useState('');
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [removeAllOpen, setRemoveAllOpen] = React.useState(false);
  const [removeCompletedOpen, setRemoveCompletedOpen] = React.useState(false);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const hideFixedMenu = (): void => setFixed(false);
  const showFixedMenu = (): void => setFixed(true);

  function handleConfirmDeleteRemoveAll() {
    setRemoveAllOpen(false);
    dispatch(removeAllItems());
  }

  function handleCancelDeleteRemoveAll() {
    setRemoveAllOpen(false);
  }

  function handleConfirmDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
    dispatch(removeCompletedItems());
  }

  function handleCancelDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
  }

  const menuContent = (
    <Container>
      <Menu.Item as={Link} to="/" header active={location.pathname == '/'}>
        <Image src={logo} size="mini" className="sl-mr--10" /> {t('commom:title')}
      </Menu.Item>
      <Popup
        hoverable
        flowing
        content={
          <Segment basic>
            <Button
              basic
              color="red"
              size="tiny"
              onClick={() => {
                setRemoveCompletedOpen(true);
              }}
            >
              {t('commom:menu.removeCompleted')}
            </Button>
            <Button
              basic
              color="red"
              size="tiny"
              onClick={() => {
                setRemoveAllOpen(true);
              }}
            >
              {t('commom:menu.removeAll')}
            </Button>
          </Segment>
        }
        trigger={<Menu.Item icon="options" />}
      />
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
          }
        />
        <div className="sl-pointer">
          <Icon name="question circle" className="sl-ml--20" onClick={() => setAboutOpen(true)} />
        </div>
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
      <AboutModal open={aboutOpen} setOpen={setAboutOpen} />
      <Confirm
        open={removeAllOpen}
        cancelButton={t('commom:remove.all.cancel')}
        confirmButton={t('commom:remove.all.remove')}
        header={t('commom:remove.all.title')}
        content={t('commom:remove.all.message')}
        dimmer="blurring"
        size="mini"
        onCancel={handleCancelDeleteRemoveAll}
        onConfirm={() => handleConfirmDeleteRemoveAll()}
      />
      <Confirm
        open={removeCompletedOpen}
        cancelButton={t('commom:remove.completed.cancel')}
        confirmButton={t('commom:remove.completed.remove')}
        header={t('commom:remove.completed.title')}
        content={t('commom:remove.completed.message')}
        dimmer="blurring"
        size="mini"
        onCancel={handleCancelDeleteRemoveCompleted}
        onConfirm={() => handleConfirmDeleteRemoveCompleted()}
      />
    </Responsive>
  );
}

export default DesktopContainer;
