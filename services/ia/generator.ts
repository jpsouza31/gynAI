import { GoogleGenAI } from '@google/genai';

export async function generateAiResponse(infos: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseModalities: ['IMAGE', 'TEXT'],
    systemInstruction: [
      {
        text: `Estou fazendo um app onde o usuário irá digitar algumas informações relacionadas a treinos de academia, quero responder com um treino personalizado para ele.
        As informações que o usuário irá entrar será: idade em anos, peso em kg, altura em centimetros, objetivo, quantidade de dias de treino na semana, minutos de treino por dia e se há algum problema de saúde.
        Eu quero que todo texto (titulo, list, negrito) seja formatado com elementos markdown para renderização em um componente react native`,
      },
    ],
  };
  const model = 'gemini-2.5-flash-image-preview';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: infos,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  const result = response.candidates?.[0].content?.parts?.[0]?.text;
  console.log('🚀 ~ generateAiResponse ~ result:', result);
  return result;
}
