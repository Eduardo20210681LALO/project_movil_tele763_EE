// SelectOptions.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

type SelectOptionsProps = {
    label: string;
    items: { key: string; value: string }[];
    selectedValue: string;
    setSelected: (value: string) => void;
};

export const SelectOptions = ({ label, items, selectedValue, setSelected }: SelectOptionsProps) => {
    return (
        <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <SelectList
            setSelected={setSelected}
            data={items}
            placeholder="Selecciona una opción"
            search={false}
            boxStyles={styles.selectBox}
            inputStyles={styles.selectInput}
            dropdownStyles={styles.dropdown}
            defaultOption={items.find((item) => item.key === selectedValue)}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    selectBox: {
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    selectInput: {
        fontSize: 16,
        color: '#333',
    },
    dropdown: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 5,
    },
});
