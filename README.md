# Mistral Chatbot

Chatbot developed using Next.js and Mistral AI's chat completion API.

Deployment: [Live Demo](https://mistral-chatbot-five.vercel.app/)

## Features

- Multiple chat support
- Local storage

## Run with Docker

To run the app locally in dev mode (with hot reload):
1. Clone the repository
2. Create an `.env.local` file in the root directory of the project
3. Add the following line with your API key:
```
MISTRAL_API_KEY=<your API key>
```
4. Run from the root directory:
```
docker compose -f compose.yaml up --build
```
5. Open `http://localhost:3000/` on a web broswer :)

## TODO

- Add support for LaTeX. 
