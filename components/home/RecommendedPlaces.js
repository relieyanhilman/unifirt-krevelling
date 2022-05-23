import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function RecommendedPlaces({ navigation }) {
  return (
    <View style={{ marginTop: 15, marginHorizontal: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Recommended Places
      </Text>
      <LocationOptions
        image={require("../../assets/images/pantaiKuta.jpg")}
        location={"Bali, Indonesia"}
        price={5000}
        rating={4.9}
        reviews={2873}
        navigation={navigation}
        isNavigation={true}
        navigationDestination={"Recommendation"}
      />
      <LocationOptions
        image={require("../../assets/images/Borobudur-1.jpg")}
        location={"Jawa Tengah, Indonesia"}
        price={100000}
        rating={4.9}
        reviews={1433}
        isNavigation={false}
      />
    </View>
  );
}

export function LocationOptions({ navigation, ...props }) {
  const isNavigation = props.isNavigation;
  const navigationDestination = props.navigationDestination;
  if (isNavigation) {
    return (
      <View style={{ marginBottom: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationDestination)}
        >
          <Image
            source={props.image}
            style={{ width: "100%", height: 175, borderRadius: 15 }}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 15, top: 15 }}
          >
            <Image
              source={require("../../assets/icons/akar-icons_heart.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "black",
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 40,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                marginHorizontal: 10,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {props.location}
            </Text>
            <Text
              style={{
                color: "white",
                marginHorizontal: 10,
                fontWeight: "bold",
                fontSize: 9,
                marginLeft: -5,
                marginTop: 5,
              }}
            >
              - Starts from IDR {props.price}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 10,
                position: "absolute",
                right: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{ widht: 12, height: 12 }}
                  source={require("../../assets/icons/emojione_star.png")}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 9,
                    marginLeft: 3,
                  }}
                >
                  {props.rating}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{ widht: 12, height: 12 }}
                  source={require("../../assets/icons/carbon_review.png")}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 9,
                    marginLeft: 3,
                  }}
                >
                  {props.reviews} Reviews
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{ marginBottom: 15 }}>
        <TouchableOpacity>
          <Image
            source={props.image}
            style={{ width: "100%", height: 175, borderRadius: 15 }}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 15, top: 15 }}
          >
            <Image
              source={require("../../assets/icons/akar-icons_heart.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "black",
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: 40,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                marginHorizontal: 10,
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {props.location}
            </Text>
            <Text
              style={{
                color: "white",
                marginHorizontal: 10,
                fontWeight: "bold",
                fontSize: 9,
                marginLeft: -5,
                marginTop: 5,
              }}
            >
              - Starts from IDR {props.price}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 10,
                position: "absolute",
                right: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{ widht: 12, height: 12 }}
                  source={require("../../assets/icons/emojione_star.png")}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 9,
                    marginLeft: 3,
                  }}
                >
                  {props.rating}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  style={{ widht: 12, height: 12 }}
                  source={require("../../assets/icons/carbon_review.png")}
                />
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 9,
                    marginLeft: 3,
                  }}
                >
                  {props.reviews} Reviews
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
