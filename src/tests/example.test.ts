import getOpenAi from "../clients/request/requestOpenAI";

describe('validate json complex with AI', () => {
  test("Validate if return the telephone number", async () => {
    const question = `Does the JSON contain the work phone number "555-555-5556"? Return true or false`;
    const requestTransaction = await getOpenAi.getChatCompletion(question);
    expect(requestTransaction.content).toBe('true')
    console.log(requestTransaction);
  })
})