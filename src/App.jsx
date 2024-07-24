import WinePage from "./pages/WinePage";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider>
      <div>
        <WinePage />
      </div>
    </MantineProvider>
  );
}

export default App;