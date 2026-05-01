import React, { useState } from 'react';
import './styles.css'; // Importe o arquivo CSS
import Footer from './Footer'; // Importe o componente Footer
import Header from './Header'; // Importe o componente Header
import qrcode from './image/qrcode.png'; // Importe o QR Code

function NumberGame() {
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState(''); 
  const [step, setStep] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null); 

  const gerarNumeroParAleatorio = () => {
    let numeroPar;
    do {
      numeroPar = Math.floor(Math.random() * 100) + 2;
    } while (numeroPar % 2 !== 0);
    return numeroPar;
  };

  const copiarPix = () => {
    const pixKey = "87999695655";
    navigator.clipboard.writeText(pixKey);
    alert("Chave Pix copiada!");
  };

  const iniciarJogo = () => {
    setGameStarted(true);
    setStep(0);
    setNumeroAleatorio(gerarNumeroParAleatorio());
    setMessage("Pense em um número qualquer e não me diga qual é!");
    setResult(null);
  };

  const avancarPasso = () => {
    switch (step) {
      case 0:
        setMessage("Agora, some " + numeroAleatorio + " ao número que você pensou.");
        break;
      case 1:
        setMessage("Agora, diminua o número que você pensou do total.");
        break;
      case 2:
        setMessage("Dobre o resultado.");
        break;
      case 3:
        setMessage("Corte ao meio.");
        break;
      case 4:
        setMessage("Agora, divida por 2.");
        break;
      case 5:
        setMessage("O resultado é: ");
        mostrarResultado(); // Chama mostrarResultado apenas no case 5
        return;
      case 6:
        setMessage("Gostou? Se divirta o quanto quiser. Aproveitando, estou criando esses projetos, até consegui um trabalho em tecnologia.");
        setResult(null)  // No case 6, apenas exibe a mensagem
        break;
      default:
        break;
    }
  
    if (step < 7) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const mostrarResultado = () => {
    const tempoExibicao = 5000;
    const intervalo = 200;

    let tempoDecorrido = 0;
    const intervaloId = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 100));
      tempoDecorrido += intervalo;

      if (tempoDecorrido >= tempoExibicao) {
        clearInterval(intervaloId);
        setResult(` ${numeroAleatorio}`);
        setRandomNumber(null);
        setStep(prevStep => prevStep + 1);
      }
    }, intervalo);
  };

  const reiniciarJogo = () => {
    setGameStarted(false);
    setStep(0);
    setResult(null);
    setMessage('');
    setRandomNumber(null);
  };

  return (
    <div className="calculation">
      <h1>Cálculos Mentais</h1>
      {!gameStarted ? (
        <button onClick={iniciarJogo}>Começar</button>
      ) : (
        <>
          <h2>{message}</h2>
          {randomNumber !== null && <h2 className="big-number">{randomNumber}</h2>}
          {result !== null && <h2 className="big-number">{result / 2}</h2>}

          {step === 7 && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p>Gostou? Aceito doações pelo trabalho!</p>
              <p><strong>Pix: 87 9 9969 5655</strong></p>
              <button onClick={copiarPix} style={{ fontSize: '18px', padding: '5px 15px', marginBottom: '10px' }}>
                Copiar Chave Pix
              </button>
              <br />
              <img src={qrcode} alt="QR Code Pix" style={{ width: '200px', borderRadius: '10px', marginTop: '10px' }} />
              <br />
              <button onClick={reiniciarJogo}>Quero jogar outra vez</button>
            </div>
          )}
          {step < 7 && (
            <button onClick={avancarPasso}>Próximo Passo</button>
          )}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Header /> {/* Adicionando o cabeçalho */}
      <NumberGame />
      <Footer />
    </>
  );
}

export default App;
