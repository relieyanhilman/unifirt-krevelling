import { View, Text, Image } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 15,
        marginHorizontal: 10,
      }}
    >
      <ProfilePhoto />
      <ProfileDescription />
      <ProfileIconEdit />
    </View>
  );
}

const ProfilePhoto = () => (
  <View style={{ flex: 1 }}>
    <Image
      source={require("../../assets/images/iu.jpg")}
      style={{ height: 80, width: 80, borderRadius: 15, marginRight: 10 }}
    />
  </View>
);

const ProfileDescription = () => (
  <View
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 2,
    }}
  >
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text>iu</Text>
      <Image
        source={require("../../assets/icons/bx_edit.png")}
        style={{ marginLeft: 10 }}
      />
    </View>
    <Text>iu@gmail.com</Text>
    <Text>Bandung, West Java</Text>
  </View>
);

const ProfileIconEdit = () => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      flex: 1,
    }}
  >
    <Image
      source={require("../../assets/icons/ant-design_search-outlined.png")}
    />
    <Image source={require("../../assets/icons/akar-icons_bell.png")} />
  </View>
);
