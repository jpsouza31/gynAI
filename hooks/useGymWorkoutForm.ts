import { generateAiResponse } from '@/services/ia/generator';
import { router } from 'expo-router';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { z } from 'zod';

export const formSchema = z.object({
  age: z.number().min(10, 'Idade mínima é 10 anos').max(100, 'Idade máxima é 100 anos'),
  weight: z.number().positive('Peso deve ser positivo'),
  height: z.number().min(100, 'Altura mínima é 100cm').max(250, 'Altura máxima é 250cm'),
  goal: z.string().min(5, 'Descreva melhor seu objetivo'),
  workoutDays: z.number().min(1, 'Digite pelo menos 1 dia').max(7, 'Máx 7 dias'),
  workoutMinutes: z.number().min(10, 'Mínimo 10 minutos'),
  heathProblems: z.string().optional(),
});

interface IFormData {
  age: number;
  weight: number;
  height: number;
  goal: string;
  workoutDays: number;
  workoutMinutes: number;
  heathProblems?: string;
}

export const useGymWorkoutForm = () => {
  const [form, setForm] = useState({
    age: '',
    weight: '',
    height: '',
    goal: '',
    workoutDays: '',
    workoutMinutes: '',
    heathProblems: '',
  });

  const [aiLoading, setAiLoading] = useState(false);

  const handleChange = useCallback((field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const formatFormDataToAI = useCallback((data: IFormData) => {
    return `
    Idade: ${data.age} anos.
    Peso: ${data.weight} kg.
    Altura: ${data.height} cm.
    Objetivo: ${data.goal}.
    Dias de treino na semana: ${data.workoutDays}.
    Minutos de treino por dia: ${data.workoutMinutes}.
    Problemas de saúde: ${data.heathProblems || 'Nenhum'}.
    `;
  }, []);

  const handleSubmit = useCallback(async () => {
    setAiLoading(true);
    const parsed: IFormData = {
      ...form,
      age: Number(form.age),
      weight: Number(form.weight),
      height: Number(form.height),
      workoutDays: Number(form.workoutDays),
      workoutMinutes: Number(form.workoutMinutes),
    };

    const result = formSchema.safeParse(parsed);

    if (!result.success) {
      const firstError = result.error.errors[0]?.message;
      Alert.alert('Erro de validação', firstError);
      return;
    }

    const formattedDataForIa = formatFormDataToAI(result.data);

    const workout = await generateAiResponse(formattedDataForIa);
    setAiLoading(false);
    router.push({
      pathname: '/workouts',
      params: { workout },
    });
  }, [form, formatFormDataToAI]);

  return {
    formatFormDataToAI,
    setForm,
    handleChange,
    handleSubmit,
    form,
    aiLoading,
  };
};
