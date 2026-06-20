/**
 * GamerCardProfile.jsx
 *
 * JIRO ONO — conversion-and-wiring pass only.
 * Source of truth: Frontend/src/assets/reference/gamercard-profile-source/GamerCard.html
 *
 * What changed from source HTML:
 * - class → className
 * - onclick="switchTab(...)" → React useState (activeTab)
 * - onclick="toggleSubmit()" → React useState (submitOpen)
 * - Navbar omitted — provided by App.jsx
 * - Messaging bubble omitted — provided by App.jsx
 * - "← LinkedIn" back button added to sticky mini (required for React navigation)
 * - All content, layout, spacing, colors, cards, badges, sections preserved exactly.
 */

import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import leoProfileImage from '../assets/reference/profiles/leo profile/leo-profile.jpg';
import './GamerCardProfile.css';

export default function GamerCardProfile({ onBack, onOpenSignalSprint, onOpenGridLogic }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [submitOpen, setSubmitOpen] = useState(false);

  return (
    <div className="gamercard-page">

      {/* STICKY MINI */}
      <div className="sticky-mini">
        <div className="sticky-inner">
          <div className="sticky-ava">LM</div>
          <div>
            <strong style={{ fontSize: '13px' }}>Leo Martinez</strong>
            <p>@leomartinez · GamerCard</p>
          </div>
          <div className="sticky-actions">
            {/* Back to LinkedIn profile — required for React in-app navigation */}
            <button
              className="btn-ghost"
              style={{ fontSize: '12px', padding: '3px 10px' }}
              type="button"
              onClick={() => onBack?.()}
              aria-label="Back to LinkedIn profile"
            >
              ← LinkedIn
            </button>
            <button className="btn-ghost" style={{ fontSize: '12px', padding: '3px 10px' }} type="button">More</button>
            <button className="btn-outline" style={{ fontSize: '12px', padding: '3px 10px' }} type="button">✈ Message</button>
            <button className="btn-primary" style={{ fontSize: '12px', padding: '3px 10px' }} type="button">+ Follow</button>
          </div>
        </div>
      </div>

      {/* PAGE SHELL */}
      <main className="shell">
        <div className="main-col">

          {/* PROFILE HEADER CARD */}
          <div className="card" style={{ position: 'relative', overflow: 'visible' }}>
            {/* Same terracotta banner as the LinkedIn profile page */}
            <div className="cover">
              <div className="cover-mark">⌁</div>
              <div className="cover-tag">GAMERCARD</div>
            </div>

            <div className="photo-wrap">
              <div className="photo" id="profile-photo">
                <img src={leoProfileImage} alt="Leo Martinez" />
              </div>
              <div className="online-dot" title="Online" />
            </div>

            <div className="top-body">
              <div className="identity-grid">
                <div>
                  <div className="profile-name">
                    Leo Martinez
                    <button
                      className="verified-badge-trigger"
                      type="button"
                      aria-label="Open verification details"
                    >
                      <ShieldCheck size={20} className="verified-badge" />
                    </button>
                    <button
                      className="verified-badge-trigger"
                      type="button"
                      aria-label="Open GamerCard profile"
                      title="GamerCard"
                    >
                      <span className="gamercard-badge">💎</span>
                    </button>
                  </div>
                  <p className="handle-row">@leomartinez · he/him/his</p>
                  <p className="profile-hl">Game Developer | Frontend Engineer | CS Graduate Student at Yale</p>
                  <p className="muted" style={{ margin: '4px 0' }}>San Francisco Bay Area · Member since Sep 5, 2019</p>
                  <p style={{ margin: '4px 0', fontSize: '14px' }}>
                    <strong style={{ color: '#0a66c2', cursor: 'pointer' }}>12,408 followers</strong>
                    {' · '}
                    <strong style={{ color: '#0a66c2', cursor: 'pointer' }}>500+ connections</strong>
                  </p>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
                    <button className="btn-primary" type="button">+ Follow</button>
                    <button className="btn-outline" type="button">✈ Message</button>
                    <button className="btn-ghost" type="button">More</button>
                  </div>
                </div>

                {/* Platform connections */}
                <div className="connections">
                  <p className="conn-label">Connections</p>
                  <a href="https://epicgames.com" target="_blank" rel="noreferrer" className="conn-row">
                    <span className="conn-icon" style={{ background: '#2d2d2d' }}>⬛</span>
                    <span>leomartinez</span><span className="ext">↗</span>
                  </a>
                  <a href="https://store.steampowered.com" target="_blank" rel="noreferrer" className="conn-row">
                    <span className="conn-icon" style={{ background: '#1b2838' }}>🎮</span>
                    <span>leomartinez</span><span className="ext">↗</span>
                  </a>
                  <a href="https://tiktok.com/@leomartinez" target="_blank" rel="noreferrer" className="conn-row">
                    <span className="conn-icon" style={{ background: '#010101' }}>🎵</span>
                    <span>leomartinez</span><span className="ext">↗</span>
                  </a>
                  <a href="https://twitch.tv/leomartinez" target="_blank" rel="noreferrer" className="conn-row">
                    <span className="conn-icon" style={{ background: '#9146ff' }}>📺</span>
                    <span>leomartinez</span><span className="ext">↗</span>
                  </a>
                  <a href="https://xbox.com" target="_blank" rel="noreferrer" className="conn-row">
                    <span className="conn-icon" style={{ background: '#107c10' }}>🎮</span>
                    <span>leomartinez</span><span className="ext">↗</span>
                  </a>
                  <a href="https://youtube.com/@leomartinez" target="_blank" rel="noreferrer" className="conn-row">
                    <span className="conn-icon" style={{ background: '#ff0000' }}>▶️</span>
                    <span>leomartinez</span><span className="ext">↗</span>
                  </a>
                  <a href="https://discord.com" target="_blank" rel="noreferrer" className="conn-row">
                    <span className="conn-icon" style={{ background: '#5865f2' }}>💬</span>
                    <span>leomartinez</span><span className="ext">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GAMING SNAPSHOT */}
          <div className="card sp">
            <h2 className="card-head">Gaming Snapshot</h2>
            <div className="snap-grid">
              <div className="snap-card"><span className="snap-icon">🎮</span><div><p className="snap-label">Main Game</p><p className="snap-val">VOID SIGNAL</p></div></div>
              <div className="snap-card"><span className="snap-icon">🎯</span><div><p className="snap-label">Top Role</p><p className="snap-val">Strategist / Builder</p></div></div>
              <div className="snap-card"><span className="snap-icon">💎</span><div><p className="snap-label">Current Rank</p><p className="snap-val">Platinum III</p></div></div>
              <div className="snap-card"><span className="snap-icon">⏱️</span><div><p className="snap-label">Years Gaming</p><p className="snap-val">12 years</p></div></div>
              <div className="snap-card"><span className="snap-icon">🖥️</span><div><p className="snap-label">Platform</p><p className="snap-val">PC · PlayStation · Browser</p></div></div>
              <div className="snap-card"><span className="snap-icon">🔍</span><div><p className="snap-label">Looking For</p><p className="snap-val">Squad · Internship · Collab</p></div></div>
            </div>
            <div className="avail-badge"><span className="green-dot" /> Open to squad · Open to projects</div>
          </div>

          {/* TABS CARD */}
          <div className="card">
            <div className="tab-bar">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'games', label: 'Games' },
                { id: 'builds', label: 'Builds' },
                { id: 'achievements', label: 'Achievements' },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  className={`tab-btn${activeTab === id ? ' active' : ''}`}
                  type="button"
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="tab-content" id="tab-overview">
                <h3 className="tab-head">Games I Play</h3>
                <div className="games-grid" style={{ marginBottom: '20px' }}>
                  <div className="game-play-card"><div className="game-thumb">🗡️</div><strong>Hollow Knight</strong><p className="role">Solo Explorer</p><p className="rank">Completed 112%</p><p className="hrs">340 hrs</p></div>
                  <div className="game-play-card"><div className="game-thumb">🥊</div><strong>Brawlhalla</strong><p className="role">Fighter</p><p className="rank">Platinum III</p><p className="hrs">210 hrs</p></div>
                  <div className="game-play-card"><div className="game-thumb">📖</div><strong>Deltarune</strong><p className="role">Narrative Player</p><p className="rank">All chapters complete</p><p className="hrs">80 hrs</p></div>
                  <div className="game-play-card"><div className="game-thumb">❤️</div><strong>Undertale</strong><p className="role">Completionist</p><p className="rank">True Pacifist + Genocide</p><p className="hrs">60 hrs</p></div>
                </div>
                <h3 className="tab-head">Games I Built</h3>
                <div className="build-card">
                  <div className="build-top">
                    <span className="build-title">VOID CODE</span>
                    <div className="badges">
                      <span className="badge-status inprogress">In Progress</span>
                      <span className="badge-status" style={{ background: '#f3f2ef', color: '#555' }}>Browser</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#555', margin: '0 0 10px', lineHeight: 1.5 }}>A browser-based debugging game where a function runs but returns nothing. Read the code, find the missing value, and restore the signal before the clock runs out.</p>
                  <p style={{ fontSize: '13px', color: '#555', margin: '0 0 8px' }}><strong>Role:</strong> Solo Developer</p>
                  <div className="tech-row"><span className="tech-tag">React</span><span className="tech-tag">JavaScript</span><span className="tech-tag">Canvas API</span></div>
                  {/* Portfolio link — wire to real URL when available */}
                  <a href="/games/void-code/VoidCode-2.html" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '13px', textDecoration: 'none' }}>View project ↗</a>
                </div>
                <div className="build-card">
                  <div className="build-top">
                    <span className="build-title">HOLLOW ECHO</span>
                    <div className="badges">
                      <span className="badge-status shipped">Shipped</span>
                      <span className="badge-status" style={{ background: '#f3f2ef', color: '#555' }}>Browser</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#555', margin: '0 0 10px', lineHeight: 1.5 }}>A signal distortion game where what was sent and what came back are not the same. Study the original signal and the corrupted echo - find what changed in transmission before the echo fades.</p>
                  <p style={{ fontSize: '13px', color: '#555', margin: '0 0 8px' }}><strong>Role:</strong> Lead Developer</p>
                  <div className="tech-row"><span className="tech-tag">JavaScript</span><span className="tech-tag">Canvas API</span><span className="tech-tag">HTML5</span></div>
                  {/* Portfolio link — wire to real URL when available */}
                  <a href="/games/hollow-echo/HollowEcho.html" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '13px', textDecoration: 'none' }}>View project ↗</a>
                </div>
              </div>
            )}

            {/* GAMES TAB */}
            {activeTab === 'games' && (
              <div className="tab-content" id="tab-games">
                <h3 className="tab-head">Games I Play</h3>
                <div className="games-grid">
                  <div className="game-play-card"><div className="game-thumb">🗡️</div><strong>Hollow Knight</strong><p className="role">Solo Explorer</p><p className="rank">Completed 112%</p><p className="hrs">340 hrs</p></div>
                  <div className="game-play-card"><div className="game-thumb">🥊</div><strong>Brawlhalla</strong><p className="role">Fighter</p><p className="rank">Platinum III</p><p className="hrs">210 hrs</p></div>
                  <div className="game-play-card"><div className="game-thumb">📖</div><strong>Deltarune</strong><p className="role">Narrative Player</p><p className="rank">All chapters complete</p><p className="hrs">80 hrs</p></div>
                  <div className="game-play-card"><div className="game-thumb">❤️</div><strong>Undertale</strong><p className="role">Completionist</p><p className="rank">True Pacifist + Genocide</p><p className="hrs">60 hrs</p></div>
                </div>
              </div>
            )}

            {/* BUILDS TAB */}
            {activeTab === 'builds' && (
              <div className="tab-content" id="tab-builds">
                <h3 className="tab-head">Games I Built</h3>
                <div className="build-card">
                  <div className="build-top">
                    <span className="build-title">VOID CODE</span>
                    <div className="badges">
                      <span className="badge-status inprogress">In Progress</span>
                      <span className="badge-status" style={{ background: '#f3f2ef', color: '#555' }}>Browser</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#555', margin: '0 0 10px', lineHeight: 1.5 }}>A browser-based debugging game where a function runs but returns nothing. Read the code, find the missing value, and restore the signal before the clock runs out.</p>
                  <p style={{ fontSize: '13px', color: '#555', margin: '0 0 8px' }}><strong>Role:</strong> Solo Developer</p>
                  <div className="tech-row"><span className="tech-tag">React</span><span className="tech-tag">JavaScript</span><span className="tech-tag">Canvas API</span></div>
                  <a href="/games/void-code/VoidCode-2.html" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '13px', textDecoration: 'none' }}>View project ↗</a>
                </div>
                <div className="build-card">
                  <div className="build-top">
                    <span className="build-title">HOLLOW ECHO</span>
                    <div className="badges">
                      <span className="badge-status shipped">Shipped</span>
                      <span className="badge-status" style={{ background: '#f3f2ef', color: '#555' }}>Browser</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '14px', color: '#555', margin: '0 0 10px', lineHeight: 1.5 }}>A signal distortion game where what was sent and what came back are not the same. Study the original signal and the corrupted echo - find what changed in transmission before the echo fades.</p>
                  <p style={{ fontSize: '13px', color: '#555', margin: '0 0 8px' }}><strong>Role:</strong> Lead Developer</p>
                  <div className="tech-row"><span className="tech-tag">JavaScript</span><span className="tech-tag">Canvas API</span><span className="tech-tag">HTML5</span></div>
                  <a href="/games/hollow-echo/HollowEcho.html" target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '13px', textDecoration: 'none' }}>View project ↗</a>
                </div>
              </div>
            )}

            {/* ACHIEVEMENTS TAB */}
            {activeTab === 'achievements' && (
              <div className="tab-content" id="tab-achievements">
                <h3 className="tab-head">Achievements</h3>
                <div className="achieve-grid">
                  <div className="achieve-card"><div className="achieve-icon">🥈</div><span className="achieve-title">Game Jam Finalist</span><p className="achieve-detail">Harvard CS Game Jam 2023</p></div>
                  <div className="achieve-card"><div className="achieve-icon">🎖️</div><span className="achieve-title">Team Captain</span><p className="achieve-detail">Harvard Game Development Society</p></div>
                  <div className="achieve-card"><div className="achieve-icon">⏱️</div><span className="achieve-title">500+ hrs Strategy Games</span><p className="achieve-detail">Hollow Knight · Brawlhalla · Deltarune</p></div>
                  <div className="achieve-card"><div className="achieve-icon">🚀</div><span className="achieve-title">Shipped Browser Game</span><p className="achieve-detail">HOLLOW GRID — live and playable</p></div>
                  <div className="achieve-card"><div className="achieve-icon">💎</div><span className="achieve-title">Platinum Rank</span><p className="achieve-detail">Brawlhalla — Season 14</p></div>
                  <div className="achieve-card"><div className="achieve-icon">🛠️</div><span className="achieve-title">Original Game in Dev</span><p className="achieve-detail">VOID SIGNAL — active development</p></div>
                </div>
              </div>
            )}
          </div>

          {/* ROLES & SKILLS */}
          <div className="card sp">
            <h2 className="card-head">Roles &amp; Skills</h2>
            <p className="muted" style={{ margin: '0 0 16px' }}>How Leo's gaming roles connect to professional skills</p>
            <div className="roles-grid">
              <div className="role-card"><div className="role-icon">🧠</div><span className="role-name">Strategist</span><p className="role-pro">Systems thinking · Planning</p></div>
              <div className="role-card"><div className="role-icon">🎯</div><span className="role-name">Team Captain</span><p className="role-pro">Leadership · Communication</p></div>
              <div className="role-card"><div className="role-icon">⚙️</div><span className="role-name">Builder / Developer</span><p className="role-pro">Technical creativity · Product thinking</p></div>
              <div className="role-card"><div className="role-icon">🏆</div><span className="role-name">Competitive Player</span><p className="role-pro">Discipline · Performance under pressure</p></div>
            </div>
          </div>

          {/* DISCORD CONTACT CARD */}
          <div className="card sp">
            <h2 className="card-head">Contact &amp; Community</h2>
            <div className="discord-card">
              <div className="discord-left">
                  <div className="discord-ava"><img src={leoProfileImage} alt="Leo Martinez" /></div>
                <strong style={{ fontSize: '16px' }}>Leo Martinez</strong>
                <p style={{ fontSize: '12px', color: '#aaa', margin: '2px 0' }}>@leomartinez</p>
                <p style={{ fontSize: '12px', color: '#aaa', margin: '2px 0' }}>he/him/his</p>
                <p className="discord-online">🟢 Online · Voice available</p>
                <p className="discord-since">Member since Sep 5, 2019</p>
                <p style={{ fontSize: '12px', color: '#aaa', margin: '8px 0 0' }}>Game Developer | Frontend Engineer | CS Graduate Student at Yale</p>
              </div>
              <div className="discord-right">
                <span className="d-label">Platforms</span>
                <a href="https://epicgames.com" target="_blank" rel="noreferrer" className="d-conn-row">
                  <span className="d-conn-icon" style={{ background: '#2d2d2d' }}>⬛</span>
                  <span className="d-conn-platform">Epic Games</span>
                  <span className="d-conn-handle">leomartinez</span>
                </a>
                <a href="https://store.steampowered.com" target="_blank" rel="noreferrer" className="d-conn-row">
                  <span className="d-conn-icon" style={{ background: '#1b2838' }}>🎮</span>
                  <span className="d-conn-platform">Steam</span>
                  <span className="d-conn-handle">leomartinez</span>
                </a>
                <a href="https://tiktok.com/@leomartinez" target="_blank" rel="noreferrer" className="d-conn-row">
                  <span className="d-conn-icon" style={{ background: '#010101' }}>🎵</span>
                  <span className="d-conn-platform">TikTok</span>
                  <span className="d-conn-handle">leomartinez</span>
                </a>
                <a href="https://twitch.tv/leomartinez" target="_blank" rel="noreferrer" className="d-conn-row">
                  <span className="d-conn-icon" style={{ background: '#9146ff' }}>📺</span>
                  <span className="d-conn-platform">Twitch</span>
                  <span className="d-conn-handle">leomartinez</span>
                </a>
                <a href="https://xbox.com" target="_blank" rel="noreferrer" className="d-conn-row">
                  <span className="d-conn-icon" style={{ background: '#107c10' }}>🎮</span>
                  <span className="d-conn-platform">Xbox</span>
                  <span className="d-conn-handle">leomartinez</span>
                </a>
                <a href="https://youtube.com/@leomartinez" target="_blank" rel="noreferrer" className="d-conn-row">
                  <span className="d-conn-icon" style={{ background: '#ff0000' }}>▶️</span>
                  <span className="d-conn-platform">YouTube</span>
                  <span className="d-conn-handle">leomartinez</span>
                </a>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="d-conn-row">
                  <span className="d-conn-icon" style={{ background: '#5865f2' }}>💬</span>
                  <span className="d-conn-platform">Discord</span>
                  <span className="d-conn-handle">leomartinez</span>
                </a>
                <div className="tags-row">
                  <span className="d-tag">team play</span>
                  <span className="d-tag">strategy</span>
                  <span className="d-tag">game dev</span>
                  <span className="d-tag">open to squad</span>
                  <span className="d-tag">modding</span>
                </div>
              </div>
            </div>
          </div>

          {/* SUBMIT GAMES TO LINKEDIN */}
          <div className="card sp">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div>
                <h2 className="card-head" style={{ marginBottom: '4px' }}>Submit Games to LinkedIn</h2>
                <p className="muted">Share your thinking games with LinkedIn's games platform</p>
              </div>
              <button
                className="btn-outline"
                type="button"
                onClick={() => setSubmitOpen((prev) => !prev)}
              >
                + Submit a game
              </button>
            </div>

            <div className={`submit-form${submitOpen ? ' open' : ''}`} id="submit-form">
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 6px' }}>New Game Submission</h3>
              <p className="muted" style={{ margin: '0 0 14px' }}>LinkedIn accepts thinking, strategy, and cognitive skill games. One page. No multi-level complexity required.</p>
              <input className="form-input" placeholder="Game title" />
              <input className="form-input" placeholder="Game type (e.g. Pattern Recognition, Logic, Memory)" />
              <textarea className="form-input" placeholder="Short description — what does the player do?" />
              <input className="form-input" placeholder="Game URL or demo link" />
              <button className="btn-primary" type="button">Submit for Review</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
              <div className="game-submit-card">
                <div className="submit-top">
                  <div>
                    <strong style={{ fontSize: '15px' }}>Signal Sprint</strong>
                    <span className="badge-status ready" style={{ marginLeft: '8px' }}>Ready to submit</span>
                  </div>
                  <span className="game-type-tag">Cognitive Speed</span>
                </div>
                <p style={{ fontSize: '13px', color: '#555', margin: '6px 0 10px', lineHeight: 1.4 }}>A fast-thinking pattern recognition game. Identify the signal from the noise in under 5 seconds.</p>
                <button className="btn-outline" style={{ fontSize: '12px', padding: '4px 12px' }} type="button" onClick={() => onOpenSignalSprint?.()}>Submit to LinkedIn →</button>
              </div>
              <div className="game-submit-card">
                <div className="submit-top">
                  <div>
                    <strong style={{ fontSize: '15px' }}>Grid Logic</strong>
                    <span className="badge-status ready" style={{ marginLeft: '8px' }}>Ready to submit</span>
                  </div>
                  <span className="game-type-tag">Strategic Thinking</span>
                </div>
                <p style={{ fontSize: '13px', color: '#555', margin: '6px 0 10px', lineHeight: 1.4 }}>A spatial reasoning puzzle. Fill the grid using logic — no guessing allowed.</p>
                <button className="btn-outline" style={{ fontSize: '12px', padding: '4px 12px' }} type="button" onClick={() => onOpenGridLogic?.()}>Submit to LinkedIn →</button>
              </div>
              <div className="game-submit-card">
                <div className="submit-top">
                  <div>
                    <strong style={{ fontSize: '15px' }}>Chain Reaction</strong>
                    <span className="badge-status dev" style={{ marginLeft: '8px' }}>In development</span>
                  </div>
                  <span className="game-type-tag">Memory &amp; Sequence</span>
                </div>
                <p style={{ fontSize: '13px', color: '#555', margin: '6px 0 10px', lineHeight: 1.4 }}>Connect the dots before the chain breaks. Tests working memory and sequential thinking.</p>
                <button className="btn-outline" style={{ fontSize: '12px', padding: '4px 12px' }} type="button">Continue building</button>
              </div>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="card sp">
            <h2 className="card-head">Unlock with Premium</h2>
            <p className="muted" style={{ margin: '0 0 16px' }}>Boost your visibility, credibility, and community</p>
            <div className="premium-grid">
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">✅</span><span className="prem-title">Verified Skill Badge</span></div>
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">🎨</span><span className="prem-title">Custom Profile Theme</span></div>
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">📊</span><span className="prem-title">Advanced Stats Dashboard</span></div>
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">🚀</span><span className="prem-title">Boosted Visibility</span></div>
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">🎬</span><span className="prem-title">Clip Showcase</span></div>
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">🏅</span><span className="prem-title">Team Recruitment Badge</span></div>
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">💬</span><span className="prem-title">Community Forum</span></div>
              <div className="premium-card"><span className="lock-icon">🔒</span><span className="prem-icon">🎮</span><span className="prem-title">Game Upload &amp; Embed</span></div>
            </div>
            <button className="btn-gold" type="button">Try Premium for $0 — 1 month free</button>
          </div>

        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          {/* Ad */}
          <div className="card ad-card">
            <div className="ad-label">Promoted</div>
            <h3>Your job search <span className="ad-blue">powered by your network</span></h3>
            <button className="explore-btn" type="button">Explore jobs</button>
            <div className="ad-photos">
              <span style={{ background: 'linear-gradient(135deg,#2d6a8a,#4a8fab)' }} />
              <span style={{ background: 'linear-gradient(135deg,#5a8a4a,#7aab6a)' }} />
              <span style={{ background: 'linear-gradient(135deg,#8a5a2d,#ab7a4a)' }} />
            </div>
          </div>

          {/* More profiles for you */}
          <div className="card sb-card">
            <h2 className="sb-head">More profiles for you</h2>
            <div className="sb-person"><div className="sb-ava">DA</div><div><strong>Dario Amodei</strong><p>CEO and Co-Founder at Anthropic · 3rd+</p><button className="mini-btn" type="button">🤝 Connect</button></div></div>
            <div className="sb-person"><div className="sb-ava">CO</div><div><strong>Christopher Olah</strong><p>Member Of Technical Staff at Anthropic · 3rd+</p><button className="mini-btn" type="button">🤝 Connect</button></div></div>
            <div className="sb-person"><div className="sb-ava">AB</div><div><strong>Anthony Bastone, M.B.A.</strong><p>Finance Leadership at Anthropic · 3rd+</p><button className="mini-btn" type="button">🤝 Connect</button></div></div>
            <div className="sb-person"><div className="sb-ava">PS</div><div><strong>Paul Smith</strong><p>Chief Commercial Officer · 3rd+</p><button className="mini-btn" type="button">+ Follow</button></div></div>
            <div className="sb-person"><div className="sb-ava">VK</div><div><strong>Varun Krishna</strong><p>CEO at Rocket, Interim CEO at Redfin · 3rd+</p><button className="mini-btn" type="button">+ Follow</button></div></div>
            <button className="show-all-btn" type="button">Show all →</button>
          </div>

          {/* You might like */}
          <div className="card sb-card">
            <h2 className="sb-head">You might like</h2>
            <p className="muted" style={{ marginBottom: '10px' }}>Pages for you</p>
            <div className="page-row">
              <div className="page-icon" style={{ background: '#e46d4d' }}>✳</div>
              <div><strong>Claude for Business</strong><p>Technology, Information and Internet</p><p style={{ color: '#888', fontSize: '11px' }}>54,234 followers</p><button className="mini-btn" type="button">+ Follow</button></div>
            </div>
            <div className="page-row">
              <div className="page-icon" style={{ background: '#191919' }}>◈</div>
              <div><strong>Cursor</strong><p>Software Development</p><p style={{ color: '#888', fontSize: '11px' }}>327,894 followers</p><button className="mini-btn" type="button">+ Follow</button></div>
            </div>
            <button className="show-all-btn" type="button">Show all →</button>
          </div>

          {/* People you may know */}
          <div className="card sb-card">
            <h2 className="sb-head">People you may know</h2>
            <p className="muted" style={{ marginBottom: '10px' }}>From Leo's school</p>
            <div className="sb-person"><div className="sb-ava">NS</div><div><strong>Natasha Schmitt Caccia Salinas</strong><p>Associate Professor of Law · 3rd+</p><button className="mini-btn" type="button">🤝 Connect</button></div></div>
            <div className="sb-person"><div className="sb-ava">JF</div><div><strong>Jason Friedman</strong><p>Incoming J.D. Candidate at Yale · 3rd+</p><button className="mini-btn" type="button">🤝 Connect</button></div></div>
            <div className="sb-person"><div className="sb-ava">JR</div><div><strong>Jed Rothstein 罗瑞杰</strong><p>Associate | Capital Markets | Davis Polk · 3rd+</p><button className="mini-btn" type="button">🤝 Connect</button></div></div>
            <button className="show-all-btn" type="button">Show all →</button>
          </div>

          {/* Second ad */}
          <div className="card ad-card">
            <div className="ad-label">Promoted</div>
            <h3>Your job search <span className="ad-blue">powered by your network</span></h3>
            <button className="explore-btn" type="button">Explore jobs</button>
            <div className="ad-photos">
              <span style={{ background: 'linear-gradient(135deg,#2d6a8a,#4a8fab)' }} />
              <span style={{ background: 'linear-gradient(135deg,#5a8a4a,#7aab6a)' }} />
              <span style={{ background: 'linear-gradient(135deg,#8a5a2d,#ab7a4a)' }} />
            </div>
          </div>
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="gc-footer">
        <div className="gc-footer-inner">
          <div className="gc-footer-links">
            <a href="#">About</a>
            <a href="#">Accessibility</a>
            <a href="#">Help Center</a>
            <a href="#">Privacy &amp; Terms</a>
            <a href="#">Ad Choices</a>
            <a href="#">Advertising</a>
            <a href="#">Business Services</a>
            <a href="#">Get the LinkedIn app</a>
            <a href="#">More</a>
          </div>
          <span style={{ fontSize: '11px', color: '#888' }}>
            <span className="gc-footer-brand">Linked<strong>in</strong></span>
            &nbsp;&nbsp;LinkedIn Corporation © 2025
          </span>
        </div>
      </footer>

    </div>
  );
}
