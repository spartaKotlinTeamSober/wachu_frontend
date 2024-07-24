import WinePage from "./pages/WinePage.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <div>
        <WinePage />
      </div>
    </MantineProvider>
  );
}

export default App;
