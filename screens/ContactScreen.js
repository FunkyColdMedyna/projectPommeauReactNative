import { ScrollView, Text, } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

const ContactScreen = () => {
    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['info@projectpommeau.com'],
            subject: 'Inquiry',
            body: 'To whom it may conceern:'
        });
    };

    return( 
        <ScrollView>
            <Card wrapperStyle={{ margin: 10 }}>
                <Card.Title>
                    Contact Information
                </Card.Title>
                <Card.Divider />
                <Text>
                    1 Apple Way
                </Text>
                <Text>
                    Poughkeepsie, NY 10001
                </Text>
                <Text style ={{ marginBottom:10 }} >
                    U.S.A.
                </Text>
                <Text>
                    Phone: 1-646-555-1234
                </Text>
                <Text>
                    Email: info@projectpommeau.com
                </Text>
                <Button 
                    title='Send Email'
                    buttonStyle={{ backgroundColor: 'blue', margin: 40 }}
                    icon={
                        <Icon
                            name='envelope-o'
                            type='font-awesome'
                            color='#fff'
                            iconStyle= {{ marginRight: 10 }}
                            />
                    }
                    onPress={() => sendMail()}
                />
            </Card>
        </ScrollView>
    )
}

export default ContactScreen;