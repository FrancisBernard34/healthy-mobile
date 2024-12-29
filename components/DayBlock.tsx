import { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { Diet } from "../types/diet";
import Popup from "./Popup";

interface DayBlockProps {
  day: string;
  diet: Diet;
}

const DayBlock: React.FC<DayBlockProps> = ({ day, diet }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  function formatarString(plainText: string) {
    const normalizedText = plainText
      .normalize("NFD")
      .replace(/[\u0300-\u036F]/g, "")
      .toLowerCase();
    return normalizedText;
  }

  const getCardImage = (day: string) => {
    const formattedDay = formatarString(day);
    switch (formattedDay) {
      case "segunda-feira":
        return require("../assets/cards/segunda-feira.webp");
      case "terca-feira":
        return require("../assets/cards/terca-feira.webp");
      case "quarta-feira":
        return require("../assets/cards/quarta-feira.webp");
      case "quinta-feira":
        return require("../assets/cards/quinta-feira.webp");
      case "sexta-feira":
        return require("../assets/cards/sexta-feira.webp");
      case "sabado":
        return require("../assets/cards/sabado.webp");
      case "domingo":
        return require("../assets/cards/domingo.webp");
      default:
        return require("../assets/cards/segunda-feira.webp"); // fallback image
    }
  };

  return (
    <>
      <TouchableOpacity onPress={handleOpenPopup}>
        <ImageBackground
          source={getCardImage(day)}
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.content}>
            <Text style={styles.title}>{day}</Text>
            <Text style={styles.description}>{diet.shortDescription}</Text>
            <TouchableOpacity style={styles.button} onPress={handleOpenPopup}>
              <Text style={styles.buttonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      {showPopup && (
        <Popup diet={diet} day={day} handleClosePopup={handleClosePopup} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 340,
    height: 200,
    marginBottom: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 8,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  description: {
    color: '#4B5563',
    marginBottom: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#DC2626',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default DayBlock;
