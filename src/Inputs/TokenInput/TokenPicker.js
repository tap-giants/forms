import { compose } from 'recompose';
import { withApollo } from 'react-apollo';
import withGQLSearch from '../AutocompleteInput/withGQLSearch';
import AutocompleteWithHandlers from '../AutocompleteInput/AutocompleteWithHandlers';

const TokenPicker = compose(
  withApollo,
  withGQLSearch(({ pickerQuery, pickerPath, filterInputMapper }) => ({
    query: pickerQuery,
    path: pickerPath,
    filterInputMapper: filterInputMapper
  }))
)(AutocompleteWithHandlers);

export default ({ name, label, pickerQuery, pickerPath, filterInputMapper, onSelect }) => (
  <TokenPicker
    input="autocomplete"
    name={`${name}_picker`}
    label={label}
    pickerQuery={pickerQuery}
    pickerPath={pickerPath}
    filterInputMapper={filterInputMapper}
    onSelect={onSelect}
    autoCleanup
  />
);
