import React from "react";
import {Text}from "react-native";
import styles from "./styles";
const Title = (props) => {
    console.log('props:>>',props );
    return (
       <Text style={styles.title}>{props.Text}</Text>
    );
};

Title.defaultProps={
    text:'Default Text'
}

export default Title;