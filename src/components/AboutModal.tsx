import React from 'react';
import { Modal, Icon, Segment } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

interface AboutModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Displays a modal with information about the app.
 *
 * @param {boolean} open indicates if the modal must be shown
 * @param {func} setOpen function turn the modal shown/hidden
 */
function AboutModal({ open, setOpen }: AboutModalProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Modal dimmer="blurring" open={open} onClose={() => setOpen(false)}>
      <Modal.Header>{t('commom:about.title')}</Modal.Header>
      <Segment basic compact floated="right">
        {t('commom:about.version')} <strong>{version || '-'}</strong>
      </Segment>
      <Modal.Content>
        {t('commom:about.description')}
        <a href="https://github.com/studiojms">
          Jefferson Mariano de Souza <Icon name="github" />
        </a>
      </Modal.Content>
      <Modal.Content>
        {t('commom:about.contribute')}
        <a href="https://github.com/studiojms/smart-list-pwa">
          https://github.com/studiojms/smart-list-pwa <Icon name="github alternate" />
        </a>
      </Modal.Content>
    </Modal>
  );
}

export default AboutModal;
