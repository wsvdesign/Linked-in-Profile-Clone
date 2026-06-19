import { useEffect, useState } from 'react';
import {
  Home, Users, BriefcaseBusiness, MessageCircle, Bell, Grid3X3,
  Search, Send, Plus, MoreHorizontal, ShieldCheck, GraduationCap,
  ThumbsUp, Repeat2, ChevronRight, ChevronUp, X
} from 'lucide-react';
import { defaultProfileId, profilesById } from './data/profiles.js';
import VerificationModal from './components/VerificationModal.jsx';
import peterSuiImage from './assets/refference/profiles/Skll set endorsement images/Peter_Sui.jpg';
import marcusChenImage from './assets/refference/profiles/Skll set endorsement images/Marcus_Chen.jpg';
import jamieReyesImage from './assets/refference/profiles/Skll set endorsement images/Jamie_Reyes.jpg';
import aishaOkaforImage from './assets/refference/profiles/Skll set endorsement images/Aisha_Okafor.jpg';
import tomNakamuraImage from './assets/refference/profiles/Skll set endorsement images/Tom_Nakamura.jpg';
import sofiaDelgadoImage from './assets/refference/profiles/Skll set endorsement images/Sofia_Delgado.jpg';
import eliotParkImage from './assets/refference/profiles/Skll set endorsement images/Eliot_Park.jpg';
import nadiaFloresImage from './assets/refference/profiles/Skll set endorsement images/Nadia_Flores.jpg';
import danielYuenImage from './assets/refference/profiles/Skll set endorsement images/Daniel_Yuen.jpg';
import profAveryBrooksImage from './assets/refference/profiles/Skll set endorsement images/Prof_Avery_Brooks.jpg';
import MyNetworkPage from './pages/MyNetworkPage.jsx';

function getProfileIdFromUrl() {
  if (typeof window === 'undefined') {
    return defaultProfileId;
  }

  const urlProfileId = new URL(window.location.href).searchParams.get('profile');
  return profilesById[urlProfileId] ? urlProfileId : defaultProfileId;
}

function getViewFromUrl() {
  if (typeof window === 'undefined') return null;
  return new URL(window.location.href).searchParams.get('view') || null;
}

function getInitials(name) {
  return (name || '')
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Navbar({ onOpenView, activeView }) {
  const navItems = [
    { label: 'Home', icon: Home, badge: '6', view: null },
    { label: 'My Network', icon: Users, badge: '2', view: 'network' },
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
          {navItems.map(({ label, icon: Icon, badge, view }) => (
            <button
              className="nav-item"
              key={label}
              type="button"
              onClick={() => {
                if (onOpenView && (view !== undefined || label === 'Home')) {
                  onOpenView(view ?? null);
                }
              }}
              aria-current={activeView === view && view ? 'page' : undefined}
            >
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

function StickyMiniProfile({ profile }) {
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

function ProfileTopCard({ profile }) {
  const [showVerify, setShowVerify] = useState(true);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(profile.profilePhoto) && !imageFailed;
  const topActions = profile.topActions || ['Follow', 'Message', 'More'];
  const showVerifyPrompt = profile.showVerificationPrompt !== false && showVerify;

  useEffect(() => {
    setImageFailed(false);
  }, [profile.id, profile.profilePhoto]);

  return (
    <div className="card top-card">
      <div className="cover-banner" style={{ background: profile.coverColor || '#c9673e' }}>
        <div className="cover-decoration" />
        <div className="cover-mark">⌁</div>
      </div>
      <div className="profile-photo-ring">
        <div className="profile-photo">
          {hasImage ? (
            <img
              className="profile-photo-image"
              src={profile.profilePhoto}
              alt={profile.name}
              style={{ objectPosition: profile.profilePhotoObjectPosition || 'center' }}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span>{profile.profileInitials}</span>
          )}
        </div>
      </div>
      <div className="top-card-body">
        <div className="identity-grid">
          <div className="identity-main">
            <h1 className="profile-name">
              {profile.name}
              {profile.verified && (
                <button
                  className="verified-badge-trigger"
                  type="button"
                  aria-label="Open verification details"
                  onClick={() => setIsVerificationModalOpen(true)}
                >
                  <ShieldCheck size={20} className="verified-badge" />
                </button>
              )}
              <span className="gamercard-badge" aria-label="GamerCard badge" title="GamerCard">
                💎
              </span>
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
        {showVerifyPrompt && (
          <div className="verify-prompt">
            <button className="verify-close" onClick={() => setShowVerify(false)} type="button"><X size={18}/></button>
            <strong>{profile.verificationText}</strong>
            <span>{profile.verificationSubtext}</span>
            <button className="verify-btn" type="button" onClick={() => setIsVerificationModalOpen(true)}>Add now</button>
          </div>
        )}
        <p className="meta-line">{profile.location} · <a href="#contact">Contact info</a></p>
        <p className="followers-line">
          {profile.followers && <strong>{profile.followers}</strong>}
          {profile.followers && profile.connections && ' · '}
          {profile.connections && <strong>{profile.connections}</strong>}
        </p>
        <div className="action-row">
          {topActions.map((action) => {
            if (action === 'Follow') {
              return <button className="btn btn-primary" key={action} type="button"><Plus size={16}/> Follow</button>;
            }
            if (action === 'Message') {
              return <button className="btn btn-primary" key={action} type="button"><Send size={16}/> Message</button>;
            }
            if (action === 'Pending') {
              return <button className="btn btn-ghost" key={action} type="button">Pending</button>;
            }
            return <button className="btn btn-ghost" key={action} type="button">{action}</button>;
          })}
        </div>
      </div>
      <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
      />
    </div>
  );
}

function AboutCard({ profile }) {
  if (profile.showAbout === false || !profile.about) {
    return null;
  }

  return (
    <div className="card section-pad">
      <h2>About</h2>
      <p className="body-text">{profile.about} <button className="text-more" type="button">more</button></p>
    </div>
  );
}

function ActivityCard({ profile }) {
  const [tab, setTab] = useState('Posts');
  const hasPosts = profile.activityPosts.length > 0;
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
      {hasPosts ? (
      <div className="post-grid">
        {profile.activityPosts.map(post => (
          <article className="post-card" key={post.title}>
            <div className="post-head">
              <div className="post-ava">{profile.profileInitials}</div>
              <div>
                <strong>
                  {profile.name}
                  {profile.verified && <ShieldCheck size={12}/>} 
                </strong>
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
      ) : (
      <div className="activity-empty-state">
        <h3>{profile.activityEmptyTitle || `${profile.name.split(' ')[0]} has no recent posts`}</h3>
        <p>{profile.activityEmptyText || `Recent posts ${profile.name.split(' ')[0]} shares will be displayed here.`}</p>
      </div>
      )}
      <button className="show-all-btn" type="button">Show all posts <ChevronRight size={16}/></button>
    </div>
  );
}

function ExperienceCard({ profile }) {
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

function EducationCard({ profile }) {
  return (
    <div className="card section-pad">
      <h2>Education</h2>
      <div className="exp-list">
        {profile.educationItems.map((item, i) => (
          <div key={i} className="exp-item">
            <div className="exp-logo school-logo" style={{ background: item.logoBg }}>{item.logoText}</div>
            <div className="exp-body">
              <h3 className="exp-role">
                {item.schoolUrl ? (
                  <a href={item.schoolUrl} target="_blank" rel="noreferrer">{item.school}</a>
                ) : (
                  item.school
                )}
              </h3>
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

const SKILL_CATEGORIES = ['All skills', 'Industry Knowledge', 'Tools & Technologies', 'Interpersonal Skills', 'Other Skills'];

const LOGO_BG = { PF: '#111', YG: '#00356b', RC: '#c0392b', FL: '#4a4a4a', HG: '#a51c30', H: '#a51c30', Y: '#00356b' };

const ENDORSER_PHOTOS = [
  { name: 'Peter Sui', src: peterSuiImage },
  { name: 'Marcus Chen', src: marcusChenImage },
  { name: 'Jamie Reyes', src: jamieReyesImage },
  { name: 'Aisha Okafor', src: aishaOkaforImage },
  { name: 'Tom Nakamura', src: tomNakamuraImage },
  { name: 'Sofia Delgado', src: sofiaDelgadoImage },
  { name: 'Eliot Park', src: eliotParkImage },
  { name: 'Nadia Flores', src: nadiaFloresImage },
  { name: 'Daniel Yuen', src: danielYuenImage },
  { name: 'Prof. Avery Brooks', src: profAveryBrooksImage },
];

function SkillRow({ skill }) {
  const firstLogo = skill.endorsedByLogos[0];
  const matchedEndorser = ENDORSER_PHOTOS.find((endorser) => skill.endorsedBy.includes(endorser.name));

  return (
    <div className="skills-page-row">
      <h3 className="skills-page-skill-name">{skill.name}</h3>
      <div className="skills-page-endorse-line">
        {matchedEndorser ? (
          <img
            className="skills-page-endorser-photo"
            src={matchedEndorser.src}
            alt={matchedEndorser.name}
          />
        ) : firstLogo && (
          <span className="skills-page-logo" style={{ background: LOGO_BG[firstLogo] || '#888' }}>{firstLogo}</span>
        )}
        <span className="skills-page-endorsed-by">{skill.endorsedBy}</span>
      </div>
      <div className="skills-page-count-line">
        <Users size={16} className="skills-page-people-icon" />
        <span>{skill.endorsements} endorsements</span>
      </div>
    </div>
  );
}

function SkillsPage({ profile, onBack }) {
  const [activeCategory, setActiveCategory] = useState('All skills');
  const filtered = activeCategory === 'All skills'
    ? profile.skills
    : profile.skills.filter((s) => s.category === activeCategory);

  return (
    <main className="page-shell">
      <div className="main-column">
        <div className="card section-pad">
          <div className="skills-page-header">
            <button className="skills-back-btn" onClick={onBack} type="button">
              <ChevronRight size={20} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <h2 style={{ margin: 0 }}>Skills</h2>
          </div>
          <div className="skills-filter-tabs">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`skills-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="skills-page-list">
            {filtered.map((skill) => (
              <SkillRow key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      <aside className="sidebar">
        <AdCard />
        <div className="card sb-card">
          <h2>More profiles for you</h2>
          {profile.sidebarProfiles.map((p) => (
            <SidebarPersonCard key={p.name} person={p} enablePending={true} />
          ))}
          <button className="show-all-btn compact" type="button">Show all <ChevronRight size={14}/></button>
        </div>
      </aside>
    </main>
  );
}

function SkillsCard({ profile, onShowAll }) {
  const preview = profile.skills.slice(0, 2);
  return (
    <div className="card section-pad">
      <h2>Skills</h2>
      {preview.map((skill, i) => (
        <div key={i} className="skill-block">
          <h3 className="skill-name">{skill.name}</h3>
          <div className="skill-endorsed">
            <span className="endorse-logo">●●</span>
            <span>{skill.endorsedBy}</span>
          </div>
          <div className="skill-count">
            <span>👥</span>
            <span>{skill.endorsements} endorsements</span>
          </div>
          {i < preview.length - 1 && <div className="skill-divider"/>}
        </div>
      ))}
      <button className="show-all-btn" type="button" onClick={onShowAll}>Show all {profile.skills.length} skills <ChevronRight size={16}/></button>
    </div>
  );
}

function InterestsCard({ profile }) {
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

function SidebarPersonCard({ person, enablePending = false, pendingMode = 'flagged', onOpenProfile, activeProfileId }) {
  const [isPending, setIsPending] = useState(false);
  const initials = getInitials(person.name);
  const hasAvatarImage = Boolean(person.profilePhoto);
  const isConnectButton =
    enablePending
    && person.action === 'Connect'
    && (pendingMode === 'all' || person.togglesToPending === true);
  const canOpenProfile = Boolean(person.profileId && onOpenProfile);
  const isActiveProfile = person.profileId && person.profileId === activeProfileId;

  const handleNavigate = () => {
    if (canOpenProfile) {
      onOpenProfile(person.profileId);
    }
  };

  const handleKeyDown = (event) => {
    if (!canOpenProfile) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavigate();
    }
  };

  const handleActionClick = (event) => {
    event.stopPropagation();
    if (isConnectButton) {
      setIsPending(true);
    }
  };

  return (
    <div
      className="sidebar-person"
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      role={canOpenProfile ? 'button' : undefined}
      tabIndex={canOpenProfile ? 0 : undefined}
      style={{
        cursor: canOpenProfile ? 'pointer' : 'default',
        background: isActiveProfile ? '#f3f8fd' : 'transparent',
      }}
    >
      <div className="sb-ava">
        {hasAvatarImage ? (
          <img
            src={person.profilePhoto}
            alt={person.name}
            className="sb-ava-img"
            style={{ objectPosition: person.avatarObjectPosition || 'center' }}
          />
        ) : (
          initials
        )}
      </div>
      <div>
        <strong>{person.name}</strong>
        <p>{person.headline}</p>
        <button className="sb-btn" type="button" onClick={handleActionClick} aria-pressed={isConnectButton ? isPending : undefined}>
          {isConnectButton ? (isPending ? 'Pending' : '🤝 Connect') : `+ ${person.action}`}
        </button>
      </div>
    </div>
  );
}

function Sidebar({ profile, onOpenProfile, activeProfileId }) {
  const firstName = (profile.name || '').split(' ')[0] || 'this';

  return (
    <aside className="sidebar">
      {/* Ad card top */}
      <AdCard />

      {/* More profiles for you */}
      <div className="card sb-card">
        <h2>More profiles for you</h2>
        {profile.sidebarProfiles.map((p) => (
          <SidebarPersonCard
            key={p.name}
            person={p}
            enablePending={true}
            onOpenProfile={onOpenProfile}
            activeProfileId={activeProfileId}
          />
        ))}
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
        <p className="section-sub">From {firstName}'s school</p>
        {profile.peopleYouMayKnow.map((p) => (
          <SidebarPersonCard key={p.name} person={p} enablePending={true} pendingMode="all" />
        ))}
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
  const [activeProfileId, setActiveProfileId] = useState(() => getProfileIdFromUrl());
  const [activeView, setActiveView] = useState(() => getViewFromUrl());
  const profile = profilesById[activeProfileId] || profilesById[defaultProfileId];

  useEffect(() => {
    const handlePopState = () => {
      setActiveProfileId(getProfileIdFromUrl());
      setActiveView(getViewFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenProfile = (nextProfileId) => {
    if (!profilesById[nextProfileId] || nextProfileId === activeProfileId) {
      return;
    }

    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set('profile', nextProfileId);
    nextUrl.searchParams.delete('view');
    window.history.pushState({ profileId: nextProfileId }, '', nextUrl);
    setActiveProfileId(nextProfileId);
    setActiveView(null);
  };

  const handleShowSkills = () => {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set('view', 'skills');
    window.history.pushState({ view: 'skills' }, '', nextUrl);
    setActiveView('skills');
  };

  const handleBackFromSkills = () => {
    window.history.back();
  };

  const handleOpenView = (nextView) => {
    const nextUrl = new URL(window.location.href);

    if (nextView) {
      nextUrl.searchParams.set('view', nextView);
      window.history.pushState({ view: nextView }, '', nextUrl);
      setActiveView(nextView);
      return;
    }

    nextUrl.searchParams.delete('view');
    window.history.pushState({ view: null }, '', nextUrl);
    setActiveView(null);
  };

  if (activeView === 'network') {
    return (
      <div className="network-view">
        <Navbar onOpenView={handleOpenView} activeView={activeView} />
        <MyNetworkPage />
        <MessagingBubble />
      </div>
    );
  }

  if (activeView === 'skills') {
    return (
      <>
        <Navbar onOpenView={handleOpenView} activeView={activeView} />
        <StickyMiniProfile profile={profile} />
        <SkillsPage profile={profile} onBack={handleBackFromSkills} />
        <MessagingBubble />
      </>
    );
  }

  return (
    <>
      <Navbar onOpenView={handleOpenView} activeView={activeView} />
      <StickyMiniProfile profile={profile} />
      <main className="page-shell">
        <div className="main-column">
          <ProfileTopCard profile={profile} />
          <AboutCard profile={profile} />
          <ActivityCard profile={profile} />
          <ExperienceCard profile={profile} />
          <EducationCard profile={profile} />
          <SkillsCard profile={profile} onShowAll={handleShowSkills} />
          <InterestsCard profile={profile} />
        </div>
        <Sidebar
          profile={profile}
          onOpenProfile={handleOpenProfile}
          activeProfileId={activeProfileId}
        />
      </main>
      <Footer />
      <MessagingBubble />
    </>
  );
}
