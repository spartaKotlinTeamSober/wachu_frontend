import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import LandingPage from "./pages/LandingPage.tsx";

function App() {
  return (
    <MantineProvider>
      <div>
        <LandingPage />
      </div>
    </MantineProvider>
  );
}

export default App;
