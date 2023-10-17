import React from 'react';
import { FlatList } from 'react-native';
import { PatientCard } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { IPatient } from '~Root/services/patient/types';

const patients: IPatient[] = [
  {
    no: '№123',
    name: 'Samanta Grey',
    age: 23,
    sessions: 4,
    image:
      'https://images.unsplash.com/photo-1547149617-609fafa00a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    no: '№234',
    name: 'Samanta Grey',
    age: 20,
    sessions: 3,
    image:
      'https://images.unsplash.com/photo-1547149617-609fafa00a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    no: '№345',
    name: 'Samanta Grey',
    age: 25,
    sessions: 5,
    image:
      'https://images.unsplash.com/photo-1547149617-609fafa00a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    no: '№67890',
    name: 'Samanta Grey',
    age: 6,
    sessions: 3,
    image:
      'https://images.unsplash.com/photo-1547149617-609fafa00a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const HomePatient = () => {
  return (
    <FlatList
      horizontal
      data={patients}
      renderItem={({ item }) => (
        <PatientCard
          styleContainer={GlobalStyles.mr15}
          no={item.no}
          age={item.age}
          name={item.name}
          image={item.image}
          sessions={item.sessions}
        />
      )}
      keyExtractor={(item, index) => `patient-${index.toString()}`}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={GlobalStyles.mb15}
    />
  );
};

export default HomePatient;
