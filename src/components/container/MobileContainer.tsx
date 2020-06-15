import React from 'react';
import {
  Responsive,
  Sidebar,
  Menu,
  Icon,
  Container,
  Dropdown,
  Label,
  Image,
  Popup,
  Input,
  Button,
  Confirm,
} from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Utils from '../../utils/Utils';
import logo from '../../assets/images/icon.png';
import AboutModal from '../AboutModal';
import SelectedFlag from '../SelectedFlag';
import { filterItems, loadItems, removeAllItems, removeCompletedItems } from '../../pages/home/smartItem/itemSlice';

interface MobileContainerProps {
  children: React.ReactElement;
}

/**
 * Mobile container for the application
 *
 * @param children content to be displayed
 */
function MobileContainer({ children }: MobileContainerProps): JSX.Element {
  const [sidebarOpened, setSidebarOpened] = React.useState(false);

  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [removeAllOpen, setRemoveAllOpen] = React.useState(false);
  const [removeCompletedOpen, setRemoveCompletedOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSidebarHide = (): void => setSidebarOpened(false);
  const handleToggle = (): void => setSidebarOpened(true);

  function handleConfirmDeleteRemoveAll() {
    setRemoveAllOpen(false);
    dispatch(removeAllItems());
    handleSidebarHide();
  }

  function handleCancelDeleteRemoveAll() {
    setRemoveAllOpen(false);
    handleSidebarHide();
  }

  function handleConfirmDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
    dispatch(removeCompletedItems());
    handleSidebarHide();
  }

  function handleCancelDeleteRemoveCompleted() {
    setRemoveCompletedOpen(false);
    handleSidebarHide();
  }

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
          <Menu.Item
            as={Button}
            onClick={() => {
              setRemoveCompletedOpen(true);
            }}
          >
            {t('commom:menu.removeCompleted')}
          </Menu.Item>
          <Menu.Item
            as={Button}
            onClick={() => {
              setRemoveAllOpen(true);
            }}
          >
            {t('commom:menu.removeAll')}
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
            <Popup
              hoverable
              flowing
              content={
                <Input action>
                  <Input
                    icon="search"
                    iconPosition="left"
                    size="mini"
                    placeholder={t('commom:search')}
                    value={search}
                    autoFocus
                    onChange={(e: { target: HTMLInputElement }): void => {
                      setSearch(e.target.value);
                      dispatch(filterItems(e.target.value));
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
              }
              trigger={
                <Menu.Item>
                  <Icon name="search" />
                </Menu.Item>
              }
            />
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
          <Container className="sl-mt--60">{children}</Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
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

export default MobileContainer;
