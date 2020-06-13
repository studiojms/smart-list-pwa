import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../redux/rootReducer';
import { setVisibilityFilter, VisibilityFilter } from '../pages/home/smartItem/visibilityFilterSlice';

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

/**
 * Button to filter the items
 *
 * @param {VisibilityFilter} visibilityFilter indicates the visibility filter to be applied
 * @param {string} text button text
 */
function FilterButton({ visibilityFilter, text }: FilterButtonProps): JSX.Element {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state: RootState) => state.visibilityFilter);

  return (
    <Button
      disabled={currentFilter == visibilityFilter}
      onClick={(): PayloadAction<VisibilityFilter> => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </Button>
  );
}

export default FilterButton;
