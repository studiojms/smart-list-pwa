import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Grid, Popup } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

import { addItem } from './itemSlice';
import AddItemModal from './AddItemModal';
import Utils from '../../../utils/Utils';

/**
 * Shows the area with commands to add new items
 */
function AddItem(): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <form
      onSubmit={(e): void => {
        e.preventDefault();
        if (!text.trim()) {
          return;
        }

        dispatch(addItem(text));
        setText('');
      }}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column width="14">
            <Input
              value={text}
              fluid
              placeholder={t('item:add.placeholder')}
              onChange={(e: { target: HTMLInputElement }): void => {
                setText(e.target.value);
              }}
              action={{
                primary: true,
                icon: 'plus',
                content: !Utils.isMobile() ? t('item:add') : null,
              }}
              focus
              autoFocus
            />
          </Grid.Column>
          <Grid.Column floated="right" width="2">
            <Popup
              content={t('item:add.voice')}
              trigger={<Button icon="microphone" positive floated="right" onClick={(): void => setOpen(true)} />}
              position="right center"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <AddItemModal open={open} setOpen={setOpen} />
    </form>
  );
}

export default AddItem;
