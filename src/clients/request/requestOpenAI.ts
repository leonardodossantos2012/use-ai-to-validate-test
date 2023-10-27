import axios, { AxiosRequestConfig } from 'axios';

async function getChatCompletion(question: string): Promise<any> {
  const jsonToValidate = require('../../factories/responseComplex.json');
  const url = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.API_KEY,
  };
  const data = {
    max_tokens: 50,
    temperature: 0.5,
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: JSON.stringify(jsonToValidate) + '\n' + question,
      }
    ]
  };
  const config: AxiosRequestConfig = {
    method: 'POST',
    url,
    headers,
    data,
  };
  const response = await axios(config);

  return response.data.choices[0].message;

}

export default {
  getChatCompletion
};