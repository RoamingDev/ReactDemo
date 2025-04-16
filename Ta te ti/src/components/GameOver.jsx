export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Juego Finalizado!</h2>
      {{winner} && <p>{winner} ganó la partida!</p>}
      {!winner && <p>Empate!</p>}
      <p>
        <button onClick={onRestart}>Reiniciar</button>
      </p>
    </div>
  );
}
