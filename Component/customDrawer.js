import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    StyleSheet,
    Switch,
  } from "react-native";
  import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
  
  
  export default customDrawer = (props) => { 
    
    return (
      <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'red'}}>
          <ImageBackground/>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View>
          <Text>Log Out</Text>
        </View>
      </View>
    );
  };