import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../redux/rootReducer';
import { setVisibilityFilter, VisibilityFilter } from './visibilityFilterSlice';

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

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
