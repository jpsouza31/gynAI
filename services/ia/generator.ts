import { GoogleGenerativeAI } from '@google/generative-ai';

export async function generateAiResponse(infos: string) {
  const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_API_KEY!);

  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash-exp',
    systemInstruction: `Estou fazendo um app onde o usuário irá digitar algumas informações relacionadas a treinos de academia, quero responder com um treino personalizado para ele.
    As informações que o usuário irá entrar será: idade em anos, peso em kg, altura em centimetros, objetivo, quantidade de dias de treino na semana, minutos de treino por dia e se há algum problema de saúde.
    Eu quero que todo texto (titulo, list, negrito) seja formatado com elementos markdown para renderização em um componente react native. 
    Preciso apenas do treino, não há necessidade de textos adicionais auxiliares como: "Aqui está seu treino formatado em markdown". 
    Importante: Não colocar uma caixa em volta do treino, apenas formatação de texto`,
  });

  const result = await model.generateContent(infos);
  const response = result.response.text();

  return response;
}
