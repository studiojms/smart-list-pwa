import React, { useState } from 'react';
import { Table, Icon, Label, Button, Confirm, Popup, Grid } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { toggleItem, removeItem } from './itemSlice';
import { AppDispatch } from '../../../redux/store';
import { Item } from './types';
import FilterButton from '../../../components/FilterButton';
import { VisibilityFilter } from './visibilityFilterSlice';
import { useTranslation } from 'react-i18next';
import Utils from '../../../utils/Utils';

interface SmartListProps {
  items: Item[];
}

/**
 * Renders the list of items
 *
 * @param {Item[]} items items of the list
 */
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
      <Table striped size="large">
        <Table.Body className="sl-mobile-table">
          {items.length == 0 && (
            <Table.Row>
              <Table.Cell colSpan="2" textAlign="center">
                {t('item:noItemsFound')}
              </Table.Cell>
            </Table.Row>
          )}
          {items.map((item) => (
            <Table.Row key={item.id} onClick={() => dispatch(toggleItem(item))} className="sl-pointer">
              <Table.Cell collapsing colSpan="2" className="sl-break-spaces">
                <Grid>
                  <Grid.Row>
                    <Grid.Column floated="left" width="14">
                      {!item.completed && <Icon name="square outline" size="large" />}
                      {item.completed && <Icon name="check square outline" size="large" />}
                      <span className={classnames('sl-ml--15', { 'sl-strikethrough': item.completed })}>
                        {item.text}
                      </span>
                    </Grid.Column>
                    <Grid.Column floated="right">
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
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row className="sl-pb--0 sl-pt--5">
            <Table.HeaderCell width="10">
              <Label basic size="large" color="orange" pointing="right">
                {t('item:show')}
              </Label>
              {Utils.isMobile() && (
                <Button.Group compact size="small" color="blue" vertical>
                  <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={t('item:show.all')} />
                  <FilterButton visibilityFilter={VisibilityFilter.ShowActive} text={t('item:show.active')} />
                  <FilterButton visibilityFilter={VisibilityFilter.ShowCompleted} text={t('item:show.completed')} />
                </Button.Group>
              )}
              {!Utils.isMobile() && (
                <Button.Group compact size="small" attached="right" color="blue">
                  <FilterButton visibilityFilter={VisibilityFilter.ShowAll} text={t('item:show.all')} />
                  <FilterButton visibilityFilter={VisibilityFilter.ShowActive} text={t('item:show.active')} />
                  <FilterButton visibilityFilter={VisibilityFilter.ShowCompleted} text={t('item:show.completed')} />
                </Button.Group>
              )}
              <Label basic size="large" horizontal className="sl-pull-right">
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
        size="mini"
        onCancel={handleCancelDelete}
        onConfirm={() => handleConfirmDelete()}
      />
    </>
  );
}

export default SmartList;
