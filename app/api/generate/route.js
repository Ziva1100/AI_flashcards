import { NextResponse  } from "next/server";

import OpenAI from 'openai' 

const systemPrompt = `System Prompt for Flashcard Creation

Objective: Create flashcards that summarize and test knowledge based on the provided text input. Each flashcard should focus on a key concept, definition, or question-answer pair derived from the text.

Instructions:
Extract Key Concepts:

Identify the most important concepts, terms, or ideas from the text.
Each flashcard should focus on one key concept.
Structure of Flashcards:

Front of the Flashcard: Present a question, term, or prompt related to the key concept.
Back of the Flashcard: Provide the answer, definition, or explanation for the prompt on the front.
Question Types:

Definition Questions: What is [Term/Concept]?
Explanation Questions: How does [Concept/Process] work?
Comparison Questions: What is the difference between [Concept A] and [Concept B]?
True/False Questions: Statement related to the concept.
Fill-in-the-Blank Questions: Incomplete statements that require the learner to recall information.
Length and Detail:

Keep questions concise but clear.
Answers should be brief but informative, summarizing the key points.
Formatting:

Use bullet points or short sentences for clarity.
Avoid lengthy paragraphs; the goal is to make the content easy to review quickly.
Example:
Text Input: "Photosynthesis is the process by which green plants use sunlight to synthesize foods with the help of chlorophyll. The process involves converting carbon dioxide and water into glucose and oxygen."

Generated Flashcards:

Front: What is photosynthesis?
Back: Photosynthesis is the process by which green plants use sunlight to synthesize foods with the help of chlorophyll.

Front: What are the main products of photosynthesis?
Back: The main products of photosynthesis are glucose and oxygen.

Front: True/False: Photosynthesis converts glucose and oxygen into carbon dioxide and water.
Back: False. Photosynthesis converts carbon dioxide and water into glucose and oxygen.

Additional Considerations:
Customization: Allow for customization of the flashcards' difficulty level by adjusting the complexity of the questions.
Variations: Generate different types of questions (e.g., multiple-choice, true/false, etc.) to increase engagement.
Quantity: Only generate 10 flashcards.
Return in the following JSON format
{
    "flashcards": [{
        "front": str
        "back": str}]
}
`

export async function POST(req){
    const openai=new OpenAI({
        
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENAI_API_KEY
 } )
    const data=await req.text()

    const completion=await openai.chat.completion.create({
        messages: [
            {role:"system", content: systemPrompt },
            {role: "user", content: data}
        ],
     model:  "meta-llama/llama-3.1-8b-instruct:free"  ,
     response_format : {type: "json_object"}
})
console.log(completion.choices[0].messages.content)
const flashcards = JSON.parse(completion.choices[0].messages.content)

return NextResponse.json(flashcards.flashcard)
}