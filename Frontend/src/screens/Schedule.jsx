import React, { useState } from 'react'
import { ImageBackground, Pressable, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Label from '../components/Label'
import { appColors } from '../utils/appColors'
import { MaterialIcons } from "@expo/vector-icons"
import CustomButton from '../components/CustomButton'
import BackButton from '../components/BackButton'
export default function Schedule({setIsLoggedIn}) {

    const [activeTab, setActiveTab] = useState("About");

    const Card = ({hideBorder , label , subLabel}) => {
        return <View style={{paddingHorizontal:scale(10), borderLeftWidth: scale(hideBorder ? 0: 0.7) , flexDirection:'row' , alignItems:'center', justifyContent:'center'}}>
            <Label style={{fontSize: scale(13)}} text={label? label: "$5"}/>
            <Label style={{fontSize: scale(13), paddingHorizontal:scale(5), color: appColors.gray}} text={subLabel? subLabel: "hr"}/>
        </View>
    }

    const Badge = ({label, isActive , onPress }) => {
        return <Pressable onPress={onPress} style={{ justifyContent:'center', alignItems:'center', borderRadius:scale(14), backgroundColor: isActive? appColors.black : appColors.lightGray , padding:scale(12), height:scale(44), width:scale(99)}}>
            <Label style={{ fontSize: scale(13), color: appColors.white}} text={label} bold></Label>
        </Pressable>
    }

    const Tabs = ({ activeTab, setActiveTab }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scale(5) }}>
                <Badge 
                    isActive={activeTab === "About"} 
                    label={"About"} 
                    onPress={() => setActiveTab("About")} 
                />
                <Badge 
                    isActive={activeTab === "Location"} 
                    label={"Location"} 
                    onPress={() => setActiveTab("Location")} 
                />
                <Badge 
                    isActive={activeTab === "Reviews"} 
                    label={"Reviews"} 
                    onPress={() => setActiveTab("Reviews")} 
                />
            </View>
        );
    }

    const _renderContent = (activeTab) => {
    if (activeTab === "About") {
        return (
            <View>
                <View style={{ flexDirection: 'row', paddingVertical: scale(10) }}>
                    <View style={{ height: scale(46) }}>
                        <Label text="Age" style={{ fontSize: scale(13), color: appColors.gray }} />
                        <Label text="27 years" style={{ paddingVertical: scale(5), fontSize: scale(17) }} bold />
                    </View>
                    <View style={{ marginLeft: scale(20), height: scale(46) }}>
                        <Label text="Experience" style={{ fontSize: scale(13), color: appColors.gray }} />
                        <Label text="11 Months" style={{ paddingVertical: scale(5), fontSize: scale(17) }} bold />
                    </View>
                </View>
                <View>
                    <Label 
                        text="Alex has loved dogs since childhood. He is currently a veterinary student"
                        style={{ paddingVertical: scale(5), fontSize: scale(13), color: appColors.gray }} 
                    />
                    <Label text="Read more" style={{ fontSize: scale(13), color: appColors.primary }} />
                </View>
            </View>
        );
    } else if (activeTab === "Location") {
        return (
            <View>
                <Label text="Location Information" style={{ fontSize: scale(13), color: appColors.gray }} />
            </View>
        );
    } else if (activeTab === "Reviews") {
        return (
            <View>
                <Label text="Reviews Section" style={{ fontSize: scale(13), color: appColors.gray }} />
                {/* Añade aquí las reseñas o valoraciones */}
            </View>
        );
    }
}
  return (
      <View >
        <ImageBackground resizeMode="cover" source={require("../../assets/yo.png")} style={{
            width: scale(350),
            height: scale(450)
        }}>
            <BackButton onPress={() => navigator.navigate('OnBoarding')}style={{ marginTop: scale(20) , padding: scale(10)}}/>
        </ImageBackground>
        <View style={{paddingHorizontal: scale(20), backgroundColor: appColors.white,borderTopLeftRadius: scale(20),  borderTopRightRadius: scale(20), top: scale(-100)}}>
            <View style={{ paddingVertical: scale(10), justifyContent:'center', alignItems:'center',  borderBottomColor:appColors.gray}}>
                <Label text="Nahuel Castilla" style={{ fontSize: scale(28)}} bold/>
                <View style={{ flexDirection:'row' , justifyContent:'space-between', alignItem:'center'}}>
                    <Card hideBorder/>
                    <Card label={"10"} subLabel={"km"}/>
                    <Card label={"4.4"} subLabel={<MaterialIcons style={{marginBottom: scale(10)}} name="star" size={14} color={appColors.primary}/>}  />
                    <Card label={"450"} subLabel={"Walks"}/>
                </View>
            </View>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/> 
            {_renderContent(activeTab)}
           <CustomButton />
        </View>
    </View>
  )
}
