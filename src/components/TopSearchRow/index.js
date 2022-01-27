import {Box, ScrollView} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

function TopSearchRow(props) {
  const {searches} = props;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginVertical: 5,
      }}
      width="100%"
      nestedScrollEnabled={true}>
      {searches.map(search => (
        <TouchableOpacity key={search}>
          <Box
            bgColor="light.200"
            _text={{
              color: 'black',
              fontSize: 'md',
              fontWeight: 'bold',
            }}
            flexDir="row"
            alignItems="center"
            justifyContent="center"
            borderRadius={25}
            style={{
              marginRight: 20,
              paddingVertical: 16,
              paddingHorizontal: 15,
            }}>
            {search}
          </Box>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default TopSearchRow;
