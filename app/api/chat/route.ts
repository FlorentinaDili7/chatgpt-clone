import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
	const { messages } = await request.json();

	// messages
	console.log(messages);

	// createChatCompletion (get response from GPT)
	const response = await openai.createChatCompletion({
		model: 'gpt-4',
		stream: true,
		messages: [
			{
				role: 'system',
				context: 'You are a helpful assistant. You explain concepts simply to intermediate programmer'
			},
			...messages
		]
	});
	// create a stream of data from OpenAI (stream data to the frontend)
	const stream = await OpenAIStream(response);
	// send the stream as a response to our client
	return new StreamingTextResponse(stream);
}
