import { useEffect, useState } from 'react';
import leoProfileImage from '../assets/reference/profiles/leo profile/leo-profile.jpg';
import './GridLogic.css';

const PUZZLES = [
  {
    label: 'Puzzle #1 — Warm Up',
    size: 4,
    grid: [
      [-2, 0, 0, -1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [-1, 0, 0, -2],
    ],
    solution: [
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
    ],
    clues: [
      'Each row has exactly 2 blue ● and 2 white ○',
      'Each column has exactly 2 blue ● and 2 white ○',
      'No three of the same color can be adjacent',
    ],
  },
  {
    label: 'Puzzle #2 — Focus',
    size: 4,
    grid: [
      [0, -2, 0, 0],
      [-2, 0, 0, 0],
      [0, 0, 0, -2],
      [0, 0, -2, 0],
    ],
    solution: [
      [0, 1, 0, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 0, 1, 0],
    ],
    clues: [
      'Each row has exactly 2 blue ● and 2 white ○',
      'Each column has exactly 2 blue ● and 2 white ○',
      'No three of the same color can be adjacent',
    ],
  },
  {
    label: 'Puzzle #3 — Sharp',
    size: 4,
    grid: [
      [-2, -2, 0, 0],
      [0, 0, -2, -2],
      [-2, 0, 0, 0],
      [0, 0, 0, -2],
    ],
    solution: [
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
    ],
    clues: [
      'Each row has exactly 2 blue ● and 2 white ○',
      'Each column has exactly 2 blue ● and 2 white ○',
      'No three of the same color can be adjacent',
    ],
  },
];

const HINTS = [
  'Look at the row with the most given symbols — what must the remaining cells be?',
  'If a row already has 2 blue ●, the rest of that row must be white ○.',
  'Check your columns — each needs exactly 2 blue and 2 white.',
  'Two of the same color side by side means the cells around them cannot be that color.',
  'Find a row where only one empty cell can legally be blue. That\'s your next move.',
  'Count the blues in each column — any column missing both? Start there.',
];

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function cloneGrid(grid) {
  return grid.map((row) => row.map((value) => value));
}

function renderCellContent(value) {
  if (value === -2 || value === 1) {
    return <span style={{ fontSize: '28px', color: '#fff', fontWeight: 800 }}>●</span>;
  }

  if (value === -1 || value === 2) {
    return <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '3px solid #191919', background: '#fff' }} />;
  }

  return null;
}

function isGridFull(grid) {
  return grid.every((row) => row.every((value) => value !== 0));
}

function gridMatchesSolution(grid, solution) {
  for (let rowIndex = 0; rowIndex < solution.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < solution[rowIndex].length; columnIndex += 1) {
      const value = grid[rowIndex][columnIndex];
      const normalized = value === 1 || value === -2 ? 1 : value === 2 || value === -1 ? 0 : -1;
      if (normalized !== solution[rowIndex][columnIndex]) {
        return false;
      }
    }
  }

  return true;
}

export default function GridLogic() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [resetVersion, setResetVersion] = useState(0);
  const [userGrid, setUserGrid] = useState(() => cloneGrid(PUZZLES[0].grid));
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [feedback, setFeedback] = useState({ text: '', tone: '' });
  const [seconds, setSeconds] = useState(0);

  const puzzle = PUZZLES[puzzleIndex];

  useEffect(() => {
    setUserGrid(cloneGrid(PUZZLES[puzzleIndex].grid));
    setMoves(0);
    setSolved(false);
    setWrong(false);
    setFeedback({ text: '', tone: '' });
    setSeconds(0);
  }, [puzzleIndex, resetVersion]);

  useEffect(() => {
    if (solved) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [puzzleIndex, resetVersion, solved]);

  const cycleCell = (rowIndex, columnIndex) => {
    if (solved) {
      return;
    }

    const currentValue = userGrid[rowIndex][columnIndex];
    if (currentValue === -1 || currentValue === -2) {
      return;
    }

    const nextGrid = cloneGrid(userGrid);
    nextGrid[rowIndex][columnIndex] = currentValue === 0 ? 1 : currentValue === 1 ? 2 : 0;

    setUserGrid(nextGrid);
    setMoves((value) => value + 1);
    setWrong(false);
    setFeedback({ text: '', tone: '' });

    if (!isGridFull(nextGrid)) {
      return;
    }

    if (gridMatchesSolution(nextGrid, puzzle.solution)) {
      setSolved(true);
    } else {
      setWrong(true);
      setFeedback({ text: "That's not right — check your logic and try again.", tone: 'bad' });
    }
  };

  const giveHint = () => {
    const hintText = HINTS[Math.floor(Math.random() * HINTS.length)];
    setFeedback({ text: `💡 ${hintText}`, tone: 'info' });
  };

  const resetPuzzle = () => {
    setResetVersion((value) => value + 1);
  };

  const nextPuzzle = () => {
    if (puzzleIndex < PUZZLES.length - 1) {
      setPuzzleIndex((value) => value + 1);
    }
  };

  return (
    <div className="grid-logic-page">
      <header className="navbar">
        <div className="navbar-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="brand">in</div>
            <div className="search-box">🔍 Search</div>
          </div>
          <nav className="nav-links">
            <button className="ni" type="button">🏠<span>Home</span></button>
            <button className="ni" type="button"><span className="ni-icon">👥<span className="nbadge">2</span></span><span>My Network</span></button>
            <button className="ni" type="button">💼<span>Jobs</span></button>
            <button className="ni" type="button"><span className="ni-icon">💬<span className="nbadge">1</span></span><span>Messaging</span></button>
            <button className="ni" type="button"><span className="ni-icon">🔔<span className="nbadge">3</span></span><span>Notifications</span></button>
            <button className="ni" type="button"><div className="mini-ava">N</div><span>Me ▾</span></button>
            <div className="nav-div" />
            <button className="ni" type="button">⊞<span>For Business ▾</span></button>
            <button className="prem" type="button"><div className="gold" /><span>Try Premium for $0</span></button>
          </nav>
        </div>
      </header>

      <div className="leo-bar">
        <div className="leo-bar-inner">
          <div className="leo-photo">
            <img src={leoProfileImage} alt="Leo Martinez" />
          </div>
          <div className="leo-info">
            <strong>Leo Martinez</strong>
            <span>Game Developer | Frontend Engineer | Computer Science Graduate Student at Yale</span>
          </div>
          <div className="leo-actions">
            <button className="lbtn lbtn-ghost" type="button">More</button>
            <button className="lbtn lbtn-outline" type="button">✈ Message</button>
            <button className="lbtn lbtn-primary" type="button">+ Follow</button>
          </div>
        </div>
      </div>

      <div className="page">
        <div className="game-area">
          {solved ? (
            <div className="result-box">
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉</div>
              <div className="result-title">Solved!</div>
              <div className="result-sub">{puzzle.label} completed</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="result-score" style={{ fontSize: '40px' }}>{formatTime(seconds)}</div>
                  <div className="result-label">time</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="result-score" style={{ fontSize: '40px' }}>{moves}</div>
                  <div className="result-label">moves</div>
                </div>
              </div>
              {puzzleIndex < PUZZLES.length - 1 ? (
                <button className="action-btn btn-primary" type="button" onClick={nextPuzzle}>Next puzzle →</button>
              ) : (
                <div style={{ fontSize: '15px', color: '#057642', fontWeight: 700, marginBottom: '16px' }}>🏆 All puzzles complete!</div>
              )}
              <button className="action-btn btn-ghost" type="button" onClick={resetPuzzle} style={{ marginLeft: '8px' }}>Play again</button>
            </div>
          ) : (
            <>
              <div className="game-title">Grid Logic</div>
              <div className="game-subtitle">Fill the grid — no guessing allowed</div>
              <div className="puzzle-num">{puzzle.label}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', marginBottom: '18px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#0a66c2' }}>{formatTime(seconds)}</div>
                  <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Time</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '26px', fontWeight: 800 }}>{moves}</div>
                  <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Moves</div>
                </div>
              </div>
              <div style={{ background: '#f8f8f8', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', textAlign: 'left' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Rules</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {puzzle.clues.map((clue) => (
                    <li key={clue} style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>{clue}</li>
                  ))}
                </ul>
              </div>
              <div style={{ marginBottom: '10px', fontSize: '13px', color: '#666' }}>Click a cell: <strong>empty</strong> → <span style={{ color: '#0a66c2', fontWeight: 700 }}>● blue</span> → <span style={{ fontWeight: 700 }}>○ white (empty circle)</span> → empty</div>
              <div className="grid-wrap">
                {userGrid.map((row, rowIndex) => (
                  <div className="grid-row" key={`row-${rowIndex}`}>
                    {row.map((value, columnIndex) => {
                      const isGiven = value === -1 || value === -2;
                      const isBlue = value === -2 || value === 1;
                      const isWhite = value === -1 || value === 2;
                      return (
                        <button
                          key={`cell-${rowIndex}-${columnIndex}`}
                          className={`cell${isGiven ? ' given' : ''}${value === 0 ? ' empty' : ''}${isBlue ? ' filled' : ''}`}
                          style={{ background: isWhite ? '#fff' : undefined }}
                          type="button"
                          onClick={() => cycleCell(rowIndex, columnIndex)}
                        >
                          {renderCellContent(value)}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className={`feedback${feedback.tone ? ` ${feedback.tone}` : ''}`}>{feedback.text || (wrong ? "That's not right — check your logic and try again." : '')}</div>
              <div className="action-row">
                <button className="action-btn btn-hint" type="button" onClick={giveHint}>Hint</button>
                <button className="action-btn btn-ghost" type="button" onClick={resetPuzzle}>Reset</button>
              </div>
            </>
          )}
        </div>
        <div className="info-panel">
          <div className="info-card">
            <h3>How to play</h3>
            <div className="how-row"><div className="how-num">1</div><div className="how-text">Fill every row and column with exactly one ● and one ○.</div></div>
            <div className="how-row"><div className="how-num">2</div><div className="how-text">No two ● or ○ can be adjacent — horizontally or vertically.</div></div>
            <div className="how-row"><div className="how-num">3</div><div className="how-text">Click once for blue ●, click again for white ○ (empty circle with border), click again to clear.</div></div>
            <div className="how-row"><div className="how-num">4</div><div className="how-text">Use logic only. No guessing needed.</div></div>
          </div>
          <div className="info-card">
            <h3>Your moves</h3>
            <div className="moves-display">{moves}</div>
            <div className="moves-label">moves made</div>
          </div>
          <div className="info-card">
            <h3>About Grid Logic</h3>
            <p>A spatial reasoning puzzle. Fill the grid using pure logic — no guessing allowed. Every puzzle has exactly one solution.</p>
            <button className="share-btn" type="button">Share your result</button>
          </div>
        </div>
      </div>
    </div>
  );
}
