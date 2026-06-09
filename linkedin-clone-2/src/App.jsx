import { useState } from 'react';
import {
  Home, Users, BriefcaseBusiness, MessageCircle, Bell, Grid3X3,
  Search, Send, Plus, MoreHorizontal, ShieldCheck, GraduationCap,
  ThumbsUp, Repeat2, ChevronRight, ChevronUp, X
} from 'lucide-react';
import { profile } from './data/profileData.js';

function Navbar() {
  const navItems = [
    { label: 'Home', icon: Home, badge: '6' },
    { label: 'My Network', icon: Users, badge: '2' },
    { label: 'Jobs', icon: BriefcaseBusiness },
    { label: 'Messaging', icon: MessageCircle, badge: '1' },
    { label: 'Notifications', icon: Bell, badge: '3' },
  ];
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <div className="brand-logo">in</div>
          <div className="search-box">
            <Search size={16} />
            <input placeholder="Search" aria-label="Search" />
          </div>
        </div>
        <nav className="nav-links">
          {navItems.map(({ label, icon: Icon, badge }) => (
            <button className="nav-item" key={label} type="button">
              <span className="nav-icon-wrap">
                <Icon size={22} />
                {badge && <span className="nav-badge">{badge}</span>}
              </span>
              <span>{label}</span>
            </button>
          ))}
          <button className="nav-item" type="button">
            <span className="mini-avatar">N</span>
            <span>Me ▾</span>
          </button>
          <div className="nav-divider" />
          <button className="nav-item" type="button">
            <Grid3X3 size={22} />
            <span>For Business ▾</span>
          </button>
          <button className="premium-link" type="button">
            <span className="premium-chip" />
            <span>Try Premium for $0</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

function StickyMiniProfile() {
  return (
    <div className="sticky-mini-profile">
      <div className="mini-profile-inner">
        <div className="mini-photo">{profile.profileInitials}</div>
        <div>
          <strong>{profile.name}</strong>
          <p>{profile.headline}</p>
        </div>
        <div className="mini-actions">
          <button className="btn btn-ghost" type="button">More</button>
          <button className="btn btn-outline-blue" type="button"><Send size={15}/> Message</button>
          <button className="btn btn-primary" type="button"><Plus size={15}/> Follow</button>
        </div>
      </div>
    </div>
  );
}

function ProfileTopCard() {
  const [showVerify, setShowVerify] = useState(true);
  return (
    <div className="card top-card">
      <div className="cover-banner">
        <div className="cover-decoration" />
        <div className="cover-mark">⌁</div>
      </div>
      <div className="profile-photo-ring">
        <div className="profile-photo">{profile.profileInitials}</div>
      </div>
      <div className="top-card-body">
        <div className="identity-grid">
          <div className="identity-main">
            <h1 className="profile-name">
              {profile.name}
              {profile.verified && <ShieldCheck size={20} className="verified-badge" />}
            </h1>
            <p className="profile-headline">{profile.headline}</p>
          </div>
          <div className="identity-affiliations">
            <div className="affil-row">
              <span className="affil-logo dark">AI</span>
              <span>{profile.currentCompany}</span>
            </div>
            <div className="affil-row">
              <span className="affil-logo school"><GraduationCap size={14}/></span>
              <span>{profile.currentSchool}</span>
            </div>
          </div>
        </div>
        {showVerify && (
          <div className="verify-prompt">
            <button className="verify-close" onClick={() => setShowVerify(false)} type="button"><X size={18}/></button>
            <strong>{profile.verificationText}</strong>
            <span>{profile.verificationSubtext}</span>
            <button className="verify-btn" type="button"><ShieldCheck size={15}/> Verify now</button>
          </div>
        )}
        <p className="meta-line">{profile.location} · <a href="#contact">Contact info</a></p>
        <p className="followers-line">
          <strong>{profile.followers}</strong> · <strong>{profile.connections}</strong>
        </p>
        <div className="action-row">
          <button className="btn btn-primary" type="button"><Plus size={16}/> Follow</button>
          <button className="btn btn-outline-blue" type="button"><Send size={16}/> Message</button>
          <button className="btn btn-ghost" type="button">More</button>
        </div>
      </div>
    </div>
  );
}

function AboutCard() {
  return (
    <div className="card section-pad">
      <h2>About</h2>
      <p className="body-text">{profile.about} <button className="text-more" type="button">more</button></p>
    </div>
  );
}

function ActivityCard() {
  const [tab, setTab] = useState('Posts');
  return (
    <div className="card section-pad">
      <div className="section-header">
        <div>
          <h2>Activity</h2>
          <p className="section-sub">{profile.activityFollowers}</p>
        </div>
        <button className="btn btn-outline-blue sm" type="button"><Plus size={14}/> Follow</button>
      </div>
      <div className="tabs">
        {['Posts','Comments'].map(t => (
          <button key={t} className={`tab-pill ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} type="button">{t}</button>
        ))}
      </div>
      <div className="post-grid">
        {profile.activityPosts.map(post => (
          <article className="post-card" key={post.title}>
            <div className="post-head">
              <div className="post-ava">{profile.profileInitials}</div>
              <div>
                <strong>{profile.name} <ShieldCheck size={12}/></strong>
                <span>{profile.headline}</span>
                <span>{post.age} · 🌐</span>
              </div>
              <MoreHorizontal size={18} className="post-more"/>
            </div>
            <p className="post-text">{post.text} <button className="text-more" type="button">more</button></p>
            <div className="link-preview">
              <div className="preview-img">⌁</div>
              <div className="preview-body">
                <strong>{post.title}</strong>
                <span>{post.source}</span>
              </div>
            </div>
            <div className="post-reactions">
              <span>👍 👏 ❤️ {post.reactions}</span>
              <span>{post.comments} · {post.reposts}</span>
            </div>
            <div className="post-actions">
              <button type="button"><ThumbsUp size={16}/> Like</button>
              <button type="button"><MessageCircle size={16}/> Comment</button>
              <button type="button"><Repeat2 size={16}/> Repost</button>
              <button type="button"><Send size={16}/> Send</button>
            </div>
          </article>
        ))}
      </div>
      <button className="show-all-btn" type="button">Show all posts <ChevronRight size={16}/></button>
    </div>
  );
}

function ExperienceCard() {
  return (
    <div className="card section-pad">
      <h2>Experience</h2>
      <div className="exp-list">
        {profile.experience.map((item, i) => (
          <div key={i} className="exp-item">
            <div className="exp-logo" style={{ background: item.logoBg }}>{item.logoText}</div>
            <div className="exp-body">
              {item.subRoles ? (
                <>
                  <h3 className="exp-company-name">{item.company}</h3>
                  <p className="exp-meta">{item.type}</p>
                  <p className="exp-meta">{item.dates}</p>
                  <p className="exp-meta">{item.location}</p>
                  <div className="sub-roles">
                    {item.subRoles.map((sub, j) => (
                      <div key={j} className="sub-role">
                        <div className="sub-dot"/>
                        <div>
                          <h4 className="sub-title">{sub.title}</h4>
                          <p className="exp-meta">{sub.dates}</p>
                          <p className="exp-desc">{sub.description} <button className="text-more" type="button">more</button></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="exp-role">{item.role}</h3>
                  <p className="exp-meta">{item.company} · {item.type}</p>
                  <p className="exp-meta muted">{item.dates}</p>
                  <p className="exp-meta muted">{item.location}</p>
                  {item.description && <p className="exp-desc">{item.description} <button className="text-more" type="button">more</button></p>}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="show-all-btn" type="button">Show all <ChevronRight size={16}/></button>
    </div>
  );
}

function EducationCard() {
  return (
    <div className="card section-pad">
      <h2>Education</h2>
      <div className="exp-list">
        {profile.educationItems.map((item, i) => (
          <div key={i} className="exp-item">
            <div className="exp-logo school-logo" style={{ background: item.logoBg }}>{item.logoText}</div>
            <div className="exp-body">
              <h3 className="exp-role">{item.school}</h3>
              <p className="exp-meta">{item.degree}</p>
              <p className="exp-meta muted">{item.dates}</p>
              {item.details && <p className="exp-desc">{item.details}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsCard() {
  return (
    <div className="card section-pad">
      <h2>Skills</h2>
      {profile.skills.map((skill, i) => (
        <div key={i} className="skill-block">
          <h3 className="skill-name">{skill.name}</h3>
          <div className="skill-endorsed">
            <span className="endorse-logo">●●</span>
            <span>{skill.endorsedBy}</span>
          </div>
          <div className="skill-count">
            <span>👥</span>
            <span>{skill.endorsements}</span>
          </div>
          {i < profile.skills.length - 1 && <div className="skill-divider"/>}
        </div>
      ))}
      <button className="show-all-btn" type="button">Show all skills <ChevronRight size={16}/></button>
    </div>
  );
}

function InterestsCard() {
  const [tab, setTab] = useState('Top Voices');
  return (
    <div className="card section-pad">
      <h2>Interests</h2>
      <div className="tabs">
        {['Top Voices','Companies','Groups','Schools'].map(t => (
          <button key={t} className={`tab-pill ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} type="button">{t}</button>
        ))}
      </div>
      <div className="interests-grid">
        {profile.interests.map((person, i) => (
          <div key={i} className="interest-card">
            <div className="interest-ava">{person.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
            <strong>{person.name} {person.badge && <span className="in-badge">in</span>} · 3rd+</strong>
            <p>{person.headline}</p>
            <p className="muted-sm">{person.followers}</p>
            <button className="sb-btn" type="button">+ Follow</button>
          </div>
        ))}
      </div>
      <button className="show-all-btn" type="button">Show all <ChevronRight size={16}/></button>
    </div>
  );
}

function AdCard() {
  return (
    <div className="card ad-card">
      <div className="ad-label">Promoted</div>
      <h3>Your job search <span className="ad-blue">powered by your network</span></h3>
      <button className="explore-btn" type="button">Explore jobs</button>
      <div className="ad-photos">
        <span style={{background:'linear-gradient(135deg,#2d6a8a,#4a8fab)'}}/>
        <span style={{background:'linear-gradient(135deg,#5a8a4a,#7aab6a)'}}/>
        <span style={{background:'linear-gradient(135deg,#8a5a2d,#ab7a4a)'}}/>
      </div>
    </div>
  );
}

function SidebarPersonCard({ person }) {
  const initials = person.name.replace(/[^a-zA-Z ]/g,'').split(' ').map(n => n[0]).filter(Boolean).join('').slice(0,2);
  return (
    <div className="sidebar-person">
      <div className="sb-ava">{initials}</div>
      <div>
        <strong>{person.name}</strong>
        <p>{person.headline}</p>
        <button className="sb-btn" type="button">
          {person.action === 'Connect' ? '🤝 ' : '+ '}{person.action}
        </button>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Ad card top */}
      <AdCard />

      {/* More profiles for you */}
      <div className="card sb-card">
        <h2>More profiles for you</h2>
        {profile.sidebarProfiles.map(p => <SidebarPersonCard key={p.name} person={p}/>)}
        <button className="show-all-btn compact" type="button">Show all <ChevronRight size={14}/></button>
      </div>

      {/* You might like */}
      <div className="card sb-card">
        <h2>You might like</h2>
        <p className="section-sub">Pages for you</p>
        {profile.pagesYouMightLike.map(page => (
          <div className="page-row" key={page.name}>
            <div className="page-icon">✳</div>
            <div>
              <strong>{page.name}</strong>
              <p>{page.category}</p>
              {page.extra && <p className="extra-line">👤 {page.extra}</p>}
              <p className="muted-sm">{page.followers}</p>
              <button className="sb-btn" type="button">+ Follow</button>
            </div>
          </div>
        ))}
        <button className="show-all-btn compact" type="button">Show all <ChevronRight size={14}/></button>
      </div>

      {/* People you may know */}
      <div className="card sb-card">
        <h2>People you may know</h2>
        <p className="section-sub">From Leo's school</p>
        {profile.peopleYouMayKnow.map(p => <SidebarPersonCard key={p.name} person={p}/>)}
        <button className="show-all-btn compact" type="button">Show all <ChevronRight size={14}/></button>
      </div>

      {/* Second ad card */}
      <AdCard />
    </aside>
  );
}

function MessagingBubble() {
  return (
    <div className="messaging-bubble">
      <span className="mini-avatar">N</span>
      <strong>Messaging</strong>
      <span style={{flex:1}}/>
      <button type="button" style={{border:0,background:'transparent',cursor:'pointer',color:'#555'}}><MoreHorizontal size={18}/></button>
      <button type="button" style={{border:0,background:'transparent',cursor:'pointer',color:'#555'}}><ChevronUp size={18}/></button>
    </div>
  );
}

function Footer() {
  const links = ['About','Accessibility','Help Center','Privacy & Terms','Ad Choices','Advertising','Business Services','Get the LinkedIn app','More'];
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          {links.map(l => <a key={l} href="#">{l}</a>)}
        </div>
        <div className="footer-bottom">
          <span className="footer-brand">Linked<strong>in</strong></span>
          <span>LinkedIn Corporation © 2025</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <StickyMiniProfile />
      <main className="page-shell">
        <div className="main-column">
          <ProfileTopCard />
          <AboutCard />
          <ActivityCard />
          <ExperienceCard />
          <EducationCard />
          <SkillsCard />
          <InterestsCard />
        </div>
        <Sidebar />
      </main>
      <Footer />
      <MessagingBubble />
    </>
  );
}
