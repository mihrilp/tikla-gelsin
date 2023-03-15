import React, {memo} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleSheet,
  TextInput,
} from 'react-native';
import SearchIcon from './icons/SearchIcon';

type Props = {
  handleChange: (value: string) => void;
} & KeyboardAvoidingViewProps;

function SearchBar({handleChange, ...rest}: Props) {
  return (
    <KeyboardAvoidingView style={styles.searchBar} {...rest}>
      <SearchIcon style={styles.icon} />
      <TextInput
        style={styles.searchInput}
        onChange={e => handleChange(e.nativeEvent.text)}
        placeholder="Ürün Ara..."
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    width: '100%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default memo(SearchBar);
