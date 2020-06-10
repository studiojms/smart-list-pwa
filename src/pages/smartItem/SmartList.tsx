import React, { useState } from 'react';
import { Table, Icon, Label, Button, Confirm, Popup } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { toggleItem, removeItem } from './itemSlice';
import { AppDispatch } from '../../redux/store';
import { Item } from './types';
import FilterButton from './FilterButton';
import { VisibilityFilter } from './visibilityFilterSlice';
import { useTranslation } from 'react-i18next';

interface SmartListProps {
  items: Item[];
}

function SmartList({ items }: SmartListProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [itemToBeDeleted, setItemToBeDeleted] = useState<Item>();

  const dispatch: AppDispatch = useDispatch();

  const { t } = useTranslation();

  function handleConfirmDelete() {
    setOpen(false);
    if (itemToBeDeleted) {
      dispatch(removeItem(itemToBeDeleted));
    }
  }

  function handleCancelDelete() {
    setOpen(false);
    setItemToBeDeleted(undefined);
  }

  return (
    <>
      <Table striped singleLine size="large">
        <Table.Body>
          {items.length == 0 && (
            <Table.Row>
              <Table.Cell colSpan="2" textAlign="center">
                {t('item:noItemsFound')}
              </Table.Cell>
            </Table.Row>
          )}
          {items.map((item) => (
            <Table.Row key={item.id} onClick={() => dispatch(toggleItem(item))} className="sl-pointer">
              <Table.Cell collapsing colSpan="2">
                {!item.completed && <Icon name="square outline" size="large" />}
                {item.completed && <Icon name="check square outline" size="large" />}
                <span className={classnames('sl-ml--15', { 'sl-strikethrough': item.completed })}>{item.text}</span>
                <Popup
                  content={t('item:remove')}
                  trigger={
                    <Button
                      compact
                      size="medium"
                      color="red"
                      floated="right"
                      icon="remove circle"
                      onClick={(e) => {
                        e.stopPropagation();
                        setItemToBeDeleted(item);
                        setOpen(true);
                      }}
                    />
                  }
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell width="10">
              <Label basic size="large" color="orange" pointing="right">
                {t('item:show')}
              </Label>
              <Button.Group compact size="small" attached="right" color="blue">
                <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={t('item:show.all')} />
                <FilterButton visibilityFilter={VisibilityFilter.ShowActive} text={t('item:show.active')} />
                <FilterButton visibilityFilter={VisibilityFilter.ShowCompleted} text={t('item:show.completed')} />
              </Button.Group>
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="right" width="2" colSpan="3">
              <Label basic size="large" horizontal>
                {`${t('item:total')} ${items.length}`}
              </Label>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Confirm
        open={open}
        cancelButton={t('item:remove.cancel')}
        confirmButton={t('item:remove.remove')}
        header={t('item:remove.title')}
        content={t('item:remove.message')}
        dimmer="blurring"
        size="tiny"
        onCancel={handleCancelDelete}
        onConfirm={() => handleConfirmDelete()}
      />
    </>
  );
}

export default SmartList;
