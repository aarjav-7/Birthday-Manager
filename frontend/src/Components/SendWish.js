import React from 'react'

export default function SendWish() {

    return (
        <div>
            <h1>Send Wish</h1>
        </div>
    )
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const dotenv = require("./.env")
    dotenv.config({path:'frontend\src\Components\.env'})
    

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    let content = `Main menu`;
    const prompt = "Which day comes after Sunday?"
    try
    {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log("This is the answer", text);
    }
    catch(e){
        console.log("This is the error", e);
    }
    }
    run();
    return (
        <div>
            <h1>Send Wish</h1>
            <h1>text</h1>
        </div>
    )
}
