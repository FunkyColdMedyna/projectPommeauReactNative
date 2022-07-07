import { View, ScrollView, Text } from "react-native";
import { Avatar, Card, ListItem } from 'react-native-elements';
// import { useSelector } from "react-redux";
// import { baseUrl } from '../shared/baseUrl';
// import Loading from '../components/LoadingComponent';
// import * as Animatable from 'react-native-animatable';

const Mission = () => {
    return (
        <Card>
            <Card.Title>
                Our Mission
            </Card.Title>
            <Card.Divider />
            <Text wrapperStyle = {{ margin: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis fermentum est. Maecenas fringilla auctor erat quis tincidunt. Nulla est quam, varius congue maximus ac, posuere at lacus. Suspendisse volutpat eleifend odio, sit amet varius lorem viverra sit amet. Pellentesque congue neque et facilisis vehicula. Donec nisi velit, tristique at volutpat vitae, venenatis quis elit. Suspendisse commodo eget nisl sit amet placerat. Suspendisse et aliquet ante. Integer lacus ante, tincidunt a mattis sed, elementum ac dolor. Donec eget condimentum quam. Vestibulum aliquam sodales scelerisque. Quisque est augue, tempus a nulla a, maximus tincidunt purus. Vivamus tempor, augue sed mattis pretium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis fermentum est. Maecenas fringilla auctor erat quis tincidunt. Nulla est quam, varius congue maximus ac, posuere at lacus. Suspendisse volutpat eleifend odio, sit amet varius lorem viverra sit amet. Pellentesque congue neque et facilisis vehicula. Donec nisi velit, tristique at volutpat vitae, venenatis quis elit. Suspendisse commodo eget nisl sit amet placerat. Suspendisse et aliquet ante.
            </Text>
        </Card>
    )
}

const AboutScreen = () => {
    // const  = useSelector((state) => state.partners);

    // if (partners.isLoading) {
    //     return (
    //         <ScrollView>
    //             <Mission />
    //             <Card>
    //                 <Card.Title>
    //                     Community Partners
    //                 </Card.Title>
    //                 <Card.Divider />
    //                 <Loading />
    //             </Card>
    //         </ScrollView>
    //     )
    // }
    // if (partners.errMess){
    //     return (
    //         <ScrollView>
    //             <Animatable.View
    //                 animation='fadeInDown'
    //                 duration={2000}
    //                 delay={1000}
    //             >
    //                 <Mission />
    //                 <Card>
    //                     <Card.Title>
    //                         Community Partners
    //                     </Card.Title>
    //                     <Card.Divider />
    //                     <Text>{partners.errMess}</Text>
    //                 </Card>
    //             </Animatable.View>
    //         </ScrollView>
    //     )
    // }

    return (
        <ScrollView>
            {/* <Animatable.View
                    animation='fadeInDown'
                    duration={2000}
                    delay={1000}
                > */}
            <View>
                <Mission />
            </View>
                {/* <Card>
                    <Card.Title>
                        Community Partners
                    </Card.Title>
                    <Card.Divider />
                    {partners.partnersArray.map((partner) => (
                        <ListItem key={partner.id}>
                            <Avatar 
                                rounded 
                                source={{ uri: baseUrl + partner.image }} />
                            <ListItem.Content>
                                <ListItem.Title >
                                    {partner.name}
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {partner.description}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                        )
                    )}
                </Card>
             */}
            {/* </Animatable.View> */}
        </ScrollView>
    )
}
export default AboutScreen;