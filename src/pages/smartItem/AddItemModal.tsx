import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import { Modal, Button, List, Input, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import { addItems } from './itemSlice';

interface ItemModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddItemModal({ open, setOpen }: ItemModalProps): JSX.Element {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const [items, setItems] = useState<string[]>([]);
  const [value, setValue] = useState('');
  const [blocked, setBlocked] = useState(false);

  const onEnd = () => {
    // You could do something here after listening has finished
  };

  const onResult = (result: string) => {
    setValue(result);

    setItems((oldItems) => Array.from(new Set([...oldItems, result])));
  };

  const removeItem = (item: string) => {
    setItems((oldItems) => Array.from(new Set([...oldItems.filter((i) => i != item)])));
  };

  const onError = (event: any) => {
    if (event.error === 'not-allowed') {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({ onResult, onEnd, onError });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang: i18n.language });
      };

  const onAddItems = () => {
    dispatch(addItems(items));
    onClose();
  };

  const onClose = () => {
    setOpen(false);
    stop();
    setItems([]);
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
              {items.map((item, idx) => (
                <List.Item key={idx} className="sl-pointer" onClick={() => removeItem(item)}>
                  <List.Icon name="trash alternate" color="red" />
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
