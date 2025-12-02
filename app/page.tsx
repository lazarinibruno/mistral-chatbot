import DrawerLayout from "./components/DrawerLayout";
import { ChatInput } from "./components/ChatInput";
import { ChatLayout } from "./components/ChatLayout";
import { ChatProvider } from "./contexts/ChatContext";

export default function Home() {
  return (
    <ChatProvider>
      <main className="relative flex flex-col min-h-screen">
        {/* Header / Drawer */}
        <DrawerLayout drawerId="app-drawer" navBarTitle="Mistral Chatbot">
          <ChatLayout />
          {/* Input field  */}
          <div className="fixed inset-x-0 bottom-4 p-4">
            <div className="mx-auto w-full max-w-2xl">
              <div className="w-full max-w-2xl">
                <ChatInput />
              </div>
            </div>
          </div>
        </DrawerLayout>
      </main>
    </ChatProvider>
  );
}
