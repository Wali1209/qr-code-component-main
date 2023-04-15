import reactLogo from "./assets/react.svg";
import QRCodeComponent from "./components/QRCodeComponent";
import GlobalStyles from "./components/styles/Global.styled";
function App() {
  return (
    <>
      <GlobalStyles />
      <QRCodeComponent></QRCodeComponent>
    </>
  );
}

export default App;
