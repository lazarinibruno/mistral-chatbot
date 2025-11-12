import DrawerLayout from "./components/DrawerLayout";

export default function Home() {
  return (
    <main>
      <DrawerLayout drawerId="app-drawer" navBarTitle="Mistral Chatbot">
        <p>Page Content</p>
      </DrawerLayout>
    </main>
  );
}
