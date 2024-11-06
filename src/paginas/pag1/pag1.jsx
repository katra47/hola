import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondo from '../../img/fondo.jpg';
import imagen from '../../img/imagen.jpg';

const NUM_ROWS = 9; // Número de filas
const NUM_COLS = 9; // Número de columnas

const Pag1 = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [pieces, setPieces] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const AREA_SIZE = Math.min(screenSize.width, screenSize.height) * 0.9;

  useEffect(() => {
    setPieces(generateInitialPositions());
  }, []);

  const generateInitialPositions = () => {
    const positions = Array.from({ length: NUM_ROWS * NUM_COLS }, (_, index) => ({
      id: index,
      correctPosition: {
        x: (index % NUM_COLS) * (AREA_SIZE / NUM_COLS),
        y: Math.floor(index / NUM_COLS) * (AREA_SIZE / NUM_ROWS),
      },
      isCorrect: false,
      x: Math.random() * (AREA_SIZE - (AREA_SIZE / NUM_COLS)),
      y: Math.random() * (AREA_SIZE - (AREA_SIZE / NUM_ROWS)),
    }));
    shuffleArray(positions);
    return positions;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleDragStart = (e, index) => {
    e.preventDefault();
    const piece = pieces[index];

    const startX = e.clientX;
    const startY = e.clientY;
    const initialX = piece.x;
    const initialY = piece.y;

    const handleMouseMove = moveEvent => {
      const dx = moveEvent.clientX - startX;
      const dy = moveEvent.clientY - startY;

      piece.x = initialX + dx;
      piece.y = initialY + dy;

      setPieces([...pieces]);
    };

    const handleMouseUp = () => {
      // Verifica si la pieza se coloca correctamente al soltar
      if (
        Math.abs(piece.x - piece.correctPosition.x) < 50 &&
        Math.abs(piece.y - piece.correctPosition.y) < 50
      ) {
        piece.x = piece.correctPosition.x;
        piece.y = piece.correctPosition.y;
        piece.isCorrect = true;
      } else {
        piece.isCorrect = false;
      }

      setPieces([...pieces]); // Actualiza el estado de las piezas

      // Verifica si el rompecabezas está completo
      if (isPuzzleComplete([...pieces])) {
        setIsComplete(true); // Cambia el estado a completo
      }

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const isPuzzleComplete = (pieces) => pieces.every(piece => piece.isCorrect);

  const handleNextPage = () => {
    navigate('/pag2'); // Redirige a Pag2
  };

  return (
    <div style={{
      width: '100%',
      height: '150%',
      overflow: 'hidden',
      position: 'relative',
      backgroundImage: `url(${fondo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: `${AREA_SIZE}px`,
        height: `${AREA_SIZE}px`,
        position: 'relative',
        border: '2px solid white',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {pieces.map((piece, index) => (
          <div
            key={piece.id}
            onMouseDown={e => handleDragStart(e, index)}
            style={{
              position: 'absolute',
              left: `${piece.x}px`,
              top: `${piece.y}px`,
              width: `${AREA_SIZE / NUM_COLS}px`,
              height: `${AREA_SIZE / NUM_ROWS}px`,
              backgroundImage: `url(${imagen})`,
              backgroundSize: `${AREA_SIZE}px ${AREA_SIZE}px`,
              backgroundPosition: `-${(piece.id % NUM_COLS) * (AREA_SIZE / NUM_COLS)}px -${Math.floor(piece.id / NUM_COLS) * (AREA_SIZE / NUM_ROWS)}px`,
              border: piece.isCorrect ? '2px solid green' : '1px solid black',
              cursor: piece.isCorrect ? 'default' : 'pointer',
              opacity: piece.isCorrect ? 1 : 0.9,
            }}
          />
        ))}
      </div>
      {isComplete && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}>
          <h2>¡Rompecabezas Completo!</h2>
          <p>¡Te quiero Corazon de melon</p>
          <button 
            onClick={handleNextPage} 
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              marginTop: '10px',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#007BFF',
              color: '#FFF',
            }}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default Pag1;
