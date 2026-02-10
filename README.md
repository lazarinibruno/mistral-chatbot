# Mistral Chatbot
<p align="center">
  <img width="900" height="200" alt="lil-robot-github-bigger" src="https://github.com/user-attachments/assets/de384657-3dee-4b4a-9569-aa134a547ad5" />
</p>

<p align="center">
  <img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white">
  <img alt="Static Badge" src="https://img.shields.io/badge/React-steelblue?logo=react">
  <img alt="Static Badge" src="https://img.shields.io/badge/Next.js-black?logo=nextdotjs">
  <img alt="Static Badge" src="https://img.shields.io/badge/TailwindCSS-silver?logo=tailwindcss">
  <img alt="Static Badge" src="https://img.shields.io/badge/daisyUI-orange?logo=daisyui">
</p>

This is a small porject that I developed to learn modern web technologies such as React and Next.js, and as part of my application process for an internship at Mistral (which I didn't get).

## Live demo
If you want to try it out, here's the follow this [link](https://mistral-chatbot-five.vercel.app/) to the live demo.

## Features
- Multiple chat support
- Local storage of chats

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

### Add LaTeX support
I tried adding LaTeX support, but unfortunately it only worked partially and made the app very buggy, so I decided against implementing it. If I have time and motiviation in the future, I will fix this issue. 
