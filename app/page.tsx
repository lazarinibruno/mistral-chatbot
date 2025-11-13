import { ChatBubble } from "./components/ChatBubble";
import DrawerLayout from "./components/DrawerLayout";

export default function Home() {
  return (
    <main>
      <DrawerLayout drawerId="app-drawer" navBarTitle="Mistral Chatbot">
        <div className="flex justify-center">
          <div className="flex flex-col w-full max-w-2xl space-y-4">
            <ChatBubble chatId={0} isUser={true}>
              <p>Hi, how are you</p>
            </ChatBubble>
            <ChatBubble chatId={0} isUser={false}>
              <p>Good, and you?</p>
            </ChatBubble>
          </div>
        </div>
      </DrawerLayout>
    </main>
  );
}
