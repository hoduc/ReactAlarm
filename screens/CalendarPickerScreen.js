import React from 'react';
import { Platform } from 'react-native';
import {
    View,
    Text,
    DatePickerIOS,
    StyleSheet
} from 'react-native';

export default class CalendarPickerScreen extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        const alarm = navigation.getParam('alarm', {});
        if (!alarm.hasOwnProperty('date')) {
            alarm.date = new Date();
        }
        this.state = {clock : alarm};
    }

    static navigationOptions = {
        title: 'Specific Alarm'
    }


    setDate = (newDate) => {
        this.state.clock.date = newDate;
        this.setState({clock: this.state.clock});
    }

    debugView = () =>  {
        return (
            <View>
                <Text>set Date: {JSON.stringify(this.state.clock.date.toLocaleString())}</Text>
                <Text>{JSON.stringify(this.props)}</Text>
            </View>
        );
    }

    render() {
        return Platform.OS === 'ios' ?
        <View style={styles.container}>
            <DatePickerIOS
                date={this.state.clock.date}
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

