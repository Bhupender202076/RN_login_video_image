import React, { Component } from "react";
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from "react-native";
import Images from "../../components/Images/Images";

const ImageGallery = () => {
  const Data = [
    {
      ImageURL:
        "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI",
    },

    { ImageURL: "https://picsum.photos/id/1/200/300" },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/93/2000/1334.jpg?hmac=HdhcVTbAYkFCXsu1qBRWeEPiy05Qjc3LbnMWJlfEFjo",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/143/3600/2385.jpg?hmac=gSMmnYrmuP5BJ47kmErfYdYu1L1GLePM1SNm-D2lqiA",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/211/1920/1280.jpg?hmac=5feWJpfa59_r1yi4NCuTxY9IWrNWZqEUDIAwrtKId9s",
    },

    {
      ImageURL:
        "https://fastly.picsum.photos/id/242/1891/1280.jpg?hmac=EhMqQfJIQi3yk8-7sjY4pdtCJyONM1X0bYXEhhALwJY",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/239/1739/1391.jpg?hmac=-Zh20gMdOuV7tHr4wGEUqACAxdvb7gkDlKKS9MIE1TU",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/259/3264/2448.jpg?hmac=9Tj9pBJLZklZTbgkq4eQrUNO6zjYKicykFUq-PgV21M",
    },
    {
      ImageURL:
        "https://fastly.picsum.photos/id/289/2800/1508.jpg?hmac=RRpZ65go4XFZxPnHs8RAQG4DJ-Tf-VD61PctWFpwDRc",
    },
  ];

  return (
    <>
      <Text style={style.root}>Image Gallery </Text>
      <ScrollView>
        <View>
          <View>
            {Data.map((item) => (
              <Images description={item.description} ImageURL={item.ImageURL} />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 40,
    marginTop: 30,
  },
});
export default ImageGallery;
