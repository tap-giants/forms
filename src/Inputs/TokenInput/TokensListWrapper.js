import TokenPicker from './TokenPicker';

const TokensListWrapper = ({ name, label, pickerQuery, pickerPath, filterInputMapper, children, addOption }) => (
  <React.Fragment>
    <TokenPicker
      name={name}
      label={label}
      pickerQuery={pickerQuery}
      pickerPath={pickerPath}
      filterInputMapper={filterInputMapper}
      onSelect={(item) => addOption(item)}
    />

    <ul className="token-list">
      {children}
    </ul>
  </React.Fragment>
);

export default TokensListWrapper;
