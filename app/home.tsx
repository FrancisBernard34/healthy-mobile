import { View, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import DayBlock from "../components/DayBlock";

const diet_example = {
  diets: [
    {
      day: "Segunda-feira",
      dayId: 1,
      shortDescription: "Café da manhã leve e nutritivo",
      fullDescription: "Café da manhã: Aveia com frutas\nAlmoço: Salada com frango grelhado\nJantar: Sopa de legumes"
    },
    {
      day: "Terça-feira",
      dayId: 2,
      shortDescription: "Foco em proteínas magras",
      fullDescription: "Café da manhã: Ovos mexidos com torrada integral\nAlmoço: Peixe grelhado com legumes\nJantar: Peito de frango com quinoa"
    },
    {
      day: "Quarta-feira",
      dayId: 3,
      shortDescription: "Dia vegetariano",
      fullDescription: "Café da manhã: Smoothie verde\nAlmoço: Salada de grão de bico\nJantar: Curry de legumes"
    }
  ]
};

export default function Index() {
  const [diets, setDiets] = useState(diet_example.diets);

  return (
    <ImageBackground 
      source={require('../assets/surface.jpg')} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Dieta</Text>
        </View>
        
        <View style={styles.content}>
          {diets.map((diet) => (
            <DayBlock key={diet.dayId} day={diet.day} diet={diet} />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    marginTop: 40,
  },
  content: {
    paddingHorizontal: 16,
  },
});