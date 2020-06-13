import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import { Modal, Button, List, Input, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import { addItems } from './itemSlice';
import Utils from '../../../utils/Utils';

interface ItemModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Displays a modal to add new items with voice (speaking)
 *
 * @param {boolean} open indicates if the modal must be shown
 * @param {func} setOpen function turn the modal shown/hidden
 */
function AddItemModal({ open, setOpen }: ItemModalProps): JSX.Element {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [spokenItems, setSpokenItems] = useState<string[]>([]);
  const [value, setValue] = useState('');
  const [blocked, setBlocked] = useState(false);

  const onEnd = () => {
    // You could do something here after listening has finished
  };

  /**
   * Runs when something is captured
   *
   * @param result content listened
   */
  const onResult = (result: string) => {
    if (result) {
      setValue(result);

      setSpokenItems((oldItems) => Array.from(new Set([...oldItems, result])));
    }
  };

  /**
   * Removes an item
   *
   * @param item item to be removed
   */
  const removeItem = (item: string) => {
    setSpokenItems((oldItems) => Array.from(new Set([...oldItems.filter((i) => i != item)])));
  };

  /**
   * Function to be executed when an error occurs
   *
   * @param event event with the error
   */
  const onError = (event: Record<string, string>) => {
    if (event.error === 'not-allowed') {
      setBlocked(true);
    }
  };

  /**
   * Function executed when adding items
   */
  const onAddItems = () => {
    dispatch(addItems(spokenItems));
    onClose();
  };

  /**
   * Function executed when closing the modal
   */
  const onClose = () => {
    setOpen(false);
    stop();
    setSpokenItems([]);
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({ onResult, onEnd, onError });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang: i18n.language });
      };

  return (
    <Modal dimmer="blurring" open={open} onClose={onClose} centered>
      <Modal.Header>{t('item:popup.addTitle')}</Modal.Header>
      <Modal.Content>
        {!supported && <h1>{t('item:popup.unsupported')}</h1>}
        {supported && (
          <>
            {t('item:popup.listenMessage')}
            <Button
              disabled={blocked}
              onClick={toggle}
              icon={classnames('microphone', {
                slash: listening,
              })}
              floated="right"
              content={listening ? t('item:popup.stop') : t('item:popup.listen')}
              compact
              primary
              basic
            />
            {blocked && (
              <p>
                <Label basic color="red" size="large">
                  {t('item:popup.blockedMic')}
                </Label>
              </p>
            )}
            <List size="huge">
              <strong>{t('item:popup.items')}</strong>
              {spokenItems.length == 0 && (
                <List.Item className="sl-pointer">
                  <List.Content>
                    <List.Description>{t('item:popup.noItems')}</List.Description>
                  </List.Content>
                </List.Item>
              )}
              {spokenItems.map((item, idx) => (
                <List.Item key={idx} className="sl-pointer" onClick={() => removeItem(item)}>
                  <List.Icon
                    name="trash alternate"
                    color="red"
                    className={classnames({ 'sl-pt--15': !Utils.isMobile() })}
                  />
                  <List.Content>
                    <List.Description>{item}</List.Description>
                  </List.Content>
                </List.Item>
              ))}
            </List>
            <Input value={value} fluid disabled label={t('item:popup.lastWord')} />
          </>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>{t('item:popup.cancel')}</Button>
        <Button positive icon="checkmark" labelPosition="right" content={t('item:popup.add')} onClick={onAddItems} />
      </Modal.Actions>
    </Modal>
  );
}

export default AddItemModal;
