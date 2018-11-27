import React from 'react';
import { Platform } from 'react-native';
import {
    View,
    Text,
    DatePickerIOS,
    StyleSheet,
} from 'react-native';

export default class CalendarPickerScreen extends React.Component {

    constructor(props) { 
        // TO DO : Pass date from outside
        super(props);
        this.state = { chosenDate: new Date() };

    }

    static navigationOptions = {
        title: 'Specific Alarm'
    }


    setDate = (newDate) => {
        this.setState({chosenDate: newDate});
    }

    debugView = () =>  {
        return (
            <Text>set Date: {this.state.chosenDate.toString()}</Text>
        );
    }

    render() {
        const { navigation } = this.props;
        const chosenDate = navigation.getParam('date', new Date());
        return Platform.OS === 'ios' ?
        <View style={styles.container}>
            <DatePickerIOS
                date={chosenDate}
                onDateChange={this.setDate}
            />
        {this.debugView()}
        </View>
        :
        <Text>
            Not Supported
        </Text>
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
});

