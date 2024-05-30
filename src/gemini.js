import { GoogleGenerativeAI } from "@google/generative-ai";


// Access your API key as an environment variable (see "Set up your API key" above)

const ApiKey =  "AIzaSyCjLlhBO1jApf4DOhvcipDJ5-KUv1x9WFk";
const genAI = new GoogleGenerativeAI(ApiKey);

async function run(Prompt= "hey") {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = Prompt;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}

export default run;