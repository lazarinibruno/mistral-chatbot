import { ChatBubble } from "./components/ChatBubble";
import DrawerLayout from "./components/DrawerLayout";
import { ChatInput } from "./components/ChatInput";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Header / Drawer */}
      <DrawerLayout drawerId="app-drawer" navBarTitle="Mistral Chatbot">
        {/* Chat area - scrollable */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-2xl space-y-4 p-4">
              <ChatBubble chatId={0} isUser={true}>
                <p>Hi, how are you</p>
              </ChatBubble>
              <ChatBubble chatId={0} isUser={false}>
                <p>Good, and you?</p>
              </ChatBubble>
            </div>
          </div>
        </div>

        {/* Input field - fixed to bottom */}
        <div className="fixed inset-x-0 bottom-4 p-4">
          <div className="mx-auto w-full max-w-2xl">
            <div className="w-full max-w-2xl">
              <ChatInput />
            </div>
          </div>
        </div>
      </DrawerLayout>
    </main>
  );
}
