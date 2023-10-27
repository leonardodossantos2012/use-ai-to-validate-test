import getOpenAi from "../clients/request/requestOpenAI";
const jsonToValidate = require('../factories/responseComplex.json');

describe('validate json complex with AI', () => {
  test("Validate if return the telephone number", async () => {

    const question = `Does the JSON contain the work phone number "555-555-5556"? Return true or false`;
    const validateJsonWithAI = await getOpenAi.getChatCompletion(question, jsonToValidate);
    expect(validateJsonWithAI.content).toBe('true')
    console.log(validateJsonWithAI);
  })
})