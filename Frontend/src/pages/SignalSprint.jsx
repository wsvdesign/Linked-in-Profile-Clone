import { useEffect, useRef, useState } from 'react';
import leoProfileImage from '../assets/reference/profiles/leo profile/leo-profile.jpg';
import './SignalSprint.css';

const TIME = 4000;

const rounds = [
  { prompt: 'Which shape is rotated differently?', cells: ['◁', '◁', '▷', '◁'], odd: 2 },
  { prompt: 'Find the one pointing a different direction', cells: ['↗', '↗', '↗', '↘'], odd: 3 },
  { prompt: 'One character is different — find it', cells: ['Ш', 'Ш', 'Щ', 'Ш'], odd: 2 },
  { prompt: 'Spot the odd symbol', cells: ['∅', '∅', '∅', 'Ø'], odd: 3 },
  { prompt: 'Which one is not the same?', cells: ['≡', '≡', '≣', '≡'], odd: 2 },
  { prompt: 'Find the different character', cells: ['Π', 'Π', '∏', 'Π'], odd: 2 },
  { prompt: 'One of these is not a number — find it', cells: ['1', 'l', '1', '1'], odd: 1 },
  { prompt: 'Spot the letter hiding among numbers', cells: ['0', '0', 'O', '0'], odd: 2 },
  { prompt: 'Find the odd one', cells: ['Z', '2', 'Z', 'Z'], odd: 1 },
  { prompt: 'Which is the imposter?', cells: ['S', '5', '5', '5'], odd: 0 },
  { prompt: 'These look the same — one is not', cells: ['⬡', '⬡', '⬢', '⬡'], odd: 2 },
  { prompt: 'Spot the different polygon', cells: ['△', '△', '▵', '△'], odd: 2 },
  { prompt: 'Find the one that does not belong', cells: ['⊕', '⊕', '⊗', '⊕'], odd: 2 },
  { prompt: 'Which symbol breaks the pattern?', cells: ['∞', '∞', '∞', 'oo'], odd: 3 },
  { prompt: 'One sequence is different', cells: ['abc', 'abc', 'abd', 'abc'], odd: 2 },
  { prompt: 'Find the broken sequence', cells: ['123', '123', '132', '123'], odd: 2 },
  { prompt: 'Which code does not match?', cells: ['A1B', 'A1B', 'A1B', 'AIB'], odd: 3 },
  { prompt: 'Spot the error in the pattern', cells: ['-->', '-->', '--<', '-->'], odd: 2 },
  { prompt: 'Find the signal in the noise', cells: ['▓▒░', '▓▒░', '▓▒░', '▓░▒'], odd: 3 },
  { prompt: 'One pattern breaks the rule', cells: ['◼◻◼', '◼◻◼', '◻◼◻', '◼◻◼'], odd: 2 },
];

const INITIAL_FEEDBACK = { text: '', tone: '' };

export default function SignalSprint() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [roundResolved, setRoundResolved] = useState(false);
  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK);
  const resolvedRef = useRef(false);

  useEffect(() => {
    if (current >= rounds.length) {
      return undefined;
    }

    resolvedRef.current = false;
    setSelectedIndex(null);
    setRoundResolved(false);
    setFeedback(INITIAL_FEEDBACK);
    setTimeLeft(TIME);

    const start = Date.now();
    const intervalId = window.setInterval(() => {
      const remaining = Math.max(0, TIME - (Date.now() - start));
      setTimeLeft(remaining);
    }, 50);

    const timeoutId = window.setTimeout(() => {
      if (resolvedRef.current) {
        return;
      }
      resolvedRef.current = true;
      setRoundResolved(true);
      setStreak(0);
      setFeedback({ text: "⏱ Time's up!", tone: 'bad' });
      window.setTimeout(() => setCurrent((value) => value + 1), 900);
    }, TIME);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [current]);

  const activeRound = rounds[current];
  const timerPercent = Math.max(0, (timeLeft / TIME) * 100);

  const handlePick = (index) => {
    if (!activeRound || resolvedRef.current) {
      return;
    }

    resolvedRef.current = true;
    setSelectedIndex(index);
    setRoundResolved(true);

    if (index === activeRound.odd) {
      const points = 10 + Math.round((timeLeft / 5000) * 10);
      setStreak((value) => {
        const next = value + 1;
        setBest((bestValue) => Math.max(bestValue, next));
        return next;
      });
      setScore((value) => value + points);
      setFeedback({ text: `✓ Correct! +${points} points`, tone: 'good' });
    } else {
      setStreak(0);
      setFeedback({ text: '✗ Not quite — that was the match', tone: 'bad' });
    }

    window.setTimeout(() => setCurrent((value) => value + 1), 900);
  };

  const handleReset = () => {
    resolvedRef.current = false;
    setCurrent(0);
    setScore(0);
    setStreak(0);
    setBest(0);
    setSelectedIndex(null);
    setRoundResolved(false);
    setFeedback(INITIAL_FEEDBACK);
    setTimeLeft(TIME);
  };

  return (
    <div className="signal-sprint-page">
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
          {activeRound ? (
            <>
              <div className="game-title">Signal Sprint</div>
              <div className="game-subtitle">Identify the odd one out — you have 4 seconds!</div>
              <div className="timer-bar-wrap"><div className={`timer-bar${timerPercent < 30 ? ' urgent' : ''}`} style={{ width: `${timerPercent}%` }} /></div>
              <div className="score-row">
                <div className="score-item"><div className="score-num">{score}</div><div className="score-label">Score</div></div>
                <div className="score-item"><div className="score-num">{current + 1}/{rounds.length}</div><div className="score-label">Round</div></div>
                <div className="score-item"><div className="score-num">{best}</div><div className="score-label">Best streak</div></div>
              </div>
              <div className="question-label">Round {current + 1}</div>
              <div className="prompt">{activeRound.prompt}</div>
              <div className="grid">
                {activeRound.cells.map((cell, index) => {
                  const isCorrect = roundResolved && index === activeRound.odd;
                  const isWrong = roundResolved && selectedIndex === index && index !== activeRound.odd;
                  return (
                    <button
                      key={`${current}-${index}`}
                      className={`cell${isCorrect ? ' correct' : ''}${isWrong ? ' wrong' : ''}${roundResolved ? ' disabled' : ''}`}
                      type="button"
                      onClick={() => handlePick(index)}
                    >
                      {cell}
                    </button>
                  );
                })}
              </div>
              <div className={`feedback${feedback.tone ? ` ${feedback.tone}` : ''}`}>{feedback.text}</div>
              <button className="action-btn ghost" type="button" onClick={handleReset}>Restart</button>
            </>
          ) : (
            <div className="result-box">
              <div className="result-title">Sprint complete!</div>
              <div className="result-sub">You identified the signals</div>
              <div className="result-score">{score}</div>
              <div className="result-label">out of {rounds.length * 20} possible points</div>
              <div style={{ fontSize: '14px', color: '#555', marginBottom: '24px' }}>Best streak: <strong>{best}</strong> in a row</div>
              <button className="action-btn" type="button" onClick={handleReset}>Play again</button>
              <button className="action-btn ghost" type="button">Share result</button>
            </div>
          )}
        </div>

        <div className="info-panel">
          <div className="info-card">
            <h3>How to play</h3>
            <div className="how-row"><div className="how-num">1</div><div className="how-text">Each round shows 4 symbols. Three match — one is different.</div></div>
            <div className="how-row"><div className="how-num">2</div><div className="how-text">Tap the one that does <strong>not</strong> belong before the timer runs out.</div></div>
            <div className="how-row"><div className="how-num">3</div><div className="how-text">Faster answers earn more points. Build your streak!</div></div>
          </div>
          <div className="info-card" id="streak-card">
            <h3>Current streak</h3>
            <div className="streak-display">{streak}</div>
            <div className="streak-label">correct in a row</div>
          </div>
          <div className="info-card">
            <h3>About Signal Sprint</h3>
            <p>A fast-thinking pattern recognition game. Identify the signal from the noise in under 5 seconds. Tests visual processing speed, pattern matching, and focus.</p>
            <button className="share-btn" type="button">Share your score</button>
          </div>
        </div>
      </div>
    </div>
  );
}
