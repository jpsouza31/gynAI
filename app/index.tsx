import CustomButton from '@/components/button';
import Input from '@/components/input';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGymWorkoutForm } from '../hooks/useGymWorkoutForm';
import { styles } from './styles';

export default function Index() {
  const insets = useSafeAreaInsets();
  const { form, handleChange, handleSubmit, aiLoading } = useGymWorkoutForm();

  return (
    <View style={{ flex: 1, backgroundColor: '#90a959' }}>
      <StatusBar backgroundColor="#90a959" barStyle="light-content" />
      <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
        <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
          <Text style={styles.headerText}>GymApp</Text>
        </View>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Input
              title="Sua idade"
              placeholder="Digite sua idade em anos"
              numeric
              value={form.age}
              onChangeText={(value) => handleChange('age', value)}
            />
            <Input
              title="Seu peso"
              placeholder="Digite seu peso em kg"
              numeric
              value={form.weight}
              onChangeText={(value) => handleChange('weight', value)}
            />
            <Input
              title="Sua altura"
              placeholder="Digite sua altura em centimetros"
              numeric
              value={form.height}
              onChangeText={(value) => handleChange('height', value)}
            />
            <Input
              title="Seu objetivo"
              placeholder="Descreva seu objetivo"
              multiline
              value={form.goal}
              onChangeText={(value) => handleChange('goal', value)}
            />
            <Input
              title="Dias de treino"
              placeholder="Digite a quantidade de treinos na semana"
              numeric
              value={form.workoutDays}
              onChangeText={(value) => handleChange('workoutDays', value)}
            />
            <Input
              title="Minutos de treino"
              placeholder="Digite os minutos de treino por dia"
              numeric
              value={form.workoutMinutes}
              onChangeText={(value) => handleChange('workoutMinutes', value)}
            />
            <Input
              title="Problema de saúde"
              placeholder="Descreva se tem algum problema de sáude"
              multiline
              value={form.heathProblems}
              onChangeText={(value) => handleChange('heathProblems', value)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Gerar treino personalizado"
              onPress={() => handleSubmit()}
              loading={aiLoading}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
