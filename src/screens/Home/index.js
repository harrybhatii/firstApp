import React from "react";
import {
    SafeAreaView,
    Text,
    View
}
    from "react-native";
    import Title from "../../components/Title";

const Home = () => {
    return (
        <SafeAreaView>
       <View>
       <Title text='my First component'></Title>
       </View>
       </SafeAreaView>
    )
}

export default Home;