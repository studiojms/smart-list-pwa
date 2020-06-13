import React from 'react';
import { Flag, FlagNameValues, Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

/**
 * Displays the flag of the selected language
 */
function SelectedFlag(): JSX.Element {
  const { i18n } = useTranslation();

  let flag = '';

  switch (i18n.language) {
    case 'pt-BR':
      flag = 'br';
      break;
    case 'en':
      flag = 'us';
      break;
  }

  return flag ? <Flag name={flag as FlagNameValues} /> : <Icon name="world" />;
}

export default SelectedFlag;
