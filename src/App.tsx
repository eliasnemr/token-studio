import "./App.css";
import AppThemeSwitch from "./components/AppThemeSwitch";
import TokenStudio from "./components/TokenStudio";
import TransactionStatus from "./components/TransactionStatus";

function App() {
  return (
    <div className="h-screen grid">
      <TransactionStatus />
      <TokenStudio />

      <footer className="flex items-end justify-center py-4">
        <AppThemeSwitch />
      </footer>
    </div>
  );
}

export default App;
