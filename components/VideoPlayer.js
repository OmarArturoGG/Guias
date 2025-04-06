import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { Video } from "expo-av";
import * as DocumentPicker from "expo-document-picker";


export const VideoPlayer = () => {
    const [videoUri, setVideoUri] = useState(null);
  
    const pickVideo = async () => {
      const result = await DocumentPicker.getDocumentAsync({
        type: "video/*",
      });
  
      if (result.type === "success") {
        setVideoUri(result.uri);
      }
    };


    return (
        <View style={styles.container}>
          <Button title="Seleccionar Video" onPress={pickVideo} />
          {videoUri && (
            <Video
              source={{ uri: videoUri }}
              style={styles.video}
              useNativeControls
              resizeMode="contain"
              isLooping
            />
          )}
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        },
        video: {
          width: "90%",
          height: 300,
          marginTop: 20,
        },
      });