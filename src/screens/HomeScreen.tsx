import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import TextComponent from "../components/TextComponent";

import { colors } from "../theme/colors";
import { categoriasEventos } from "../assets/data/categorias";
import CategoryBtn from "../components/CategoryBtn";
import { moviesData } from "../assets/data/movies";

const HomeScreen = () => {
  const [categoryActive, setCategoryActive] = useState<any>(
    categoriasEventos[0]
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.categoriesContainer}>
        <TextComponent weight="semibold" size="18">
          Categorias
        </TextComponent>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.categoriesContent}
          showsHorizontalScrollIndicator={false}
        >
          {categoriasEventos.map((category) => (
            <CategoryBtn
              key={category.id}
              color={category.color}
              icon={category.icon}
              name={category.name}
              isActive={category.id === categoryActive.id || false}
              onPress={() => {
                setCategoryActive(category);
              }}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.categoriesContainer}>
        <TextComponent weight="semibold" size="18">
          Peliculas
        </TextComponent>
        <ScrollView
          contentContainerStyle={styles.categoriesContent}
          showsHorizontalScrollIndicator={false}
        >
          {moviesData.map((movie, index) => (
            <TouchableOpacity
              key={movie.id}
              activeOpacity={0.5}
              style={styles.containerCard}
            >
              <view>
                <Image
                  source={{ uri: movie.poster }}
                  style={styles.cardImage}
                  resizeMethod="resize"
                />
                <view style={styles.cardDetails}>
                  <TextComponent weight="semibold" size="14">
                    {"${movie.rating}/10"}
                  </TextComponent>
                  <TextComponent>{"${movie.voteCount} votos"}</TextComponent>
                </view>
              </view>

              <TextComponent>{movie.title}</TextComponent>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.white,
  },
  categoriesContainer: {
    gap: 10,
  },
  categoriesContent: {
    // flexDirection: 'row',
    // justifyContent:'space-around', error no se aplica
    paddingHorizontal: 20,
    gap: 20,
  },
  containerCard: {
    width: "50%",
    gap: 10,
  },
  cardImage: {
    // width: '50%',
    minHeight: 220,
    // resizeMode: 'stretch',
    borderRadius: 5,
    backgroundColor: "red",
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.black_a40,
    borderRadius: 5,
    paddingVertical: 5,
  },
});
