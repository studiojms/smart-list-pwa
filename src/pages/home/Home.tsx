import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import AddItem from './smartItem/AddItem';
import SmartList from './smartItem/SmartList';
import { RootState } from '../../redux/rootReducer';
import { VisibilityFilter } from './smartItem/visibilityFilterSlice';
import { Item } from './smartItem/types';
import { loadItems } from './smartItem/itemSlice';

/**
 * App home page
 */
const Home: React.FC<JSX.Element> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  const getVisibleItems = (items: Item[], filter: VisibilityFilter) => {
    let visibleItems = [];
    switch (filter) {
      case VisibilityFilter.ShowAll:
        visibleItems = items;
        break;
      case VisibilityFilter.ShowActive:
        visibleItems = items.filter((i) => !i.completed);
        break;
      case VisibilityFilter.ShowCompleted:
        visibleItems = items.filter((i) => i.completed);
        break;
      default:
        throw new Error('Unkown filter: ' + filter);
    }

    return visibleItems;
  };

  const items = useSelector((state: RootState) => getVisibleItems(state.items, state.visibilityFilter));

  return (
    <Container>
      <AddItem />
      <SmartList items={items} />
    </Container>
  );
};

export default Home;
