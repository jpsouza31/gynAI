import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import Markdown from 'react-native-markdown-display';
import { markdownStyles, styles } from './styles';

export default function Workouts() {
  const { workout } = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  const workoutText = Array.isArray(workout) ? workout[0] : workout;

  return (
    <View style={{ flex: 1, backgroundColor: '#90a959' }}>
      <StatusBar backgroundColor="#90a959" barStyle="light-content" />
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
        <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.backButtonText}>← Voltar</Text>
          </Pressable>
        </View>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Markdown style={markdownStyles}>
              {workoutText || '# Nenhum treino disponível\n\nPor favor, gere um novo treino.'}
            </Markdown>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
