import { X, ChevronDown } from 'lucide-react';
import {
  inviteMessage,
  networkFooterLinks,
  networkOverview,
  networkPeople,
  newsletterInvite,
} from '../data/networkPeople.js';
import './MyNetworkPage.css';

function SidebarOverviewCard() {
  return (
    <section className="mn-card mn-overview-card">
      <h2>Network overview</h2>
      <ul className="mn-overview-values" aria-label="Network overview counts">
        {networkOverview.map((item) => (
          <li key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="mn-show-more">
        Show more <ChevronDown size={14} />
      </button>
    </section>
  );
}

function SidebarAdCard() {
  return (
    <section className="mn-card mn-ad-card">
      <p className="mn-ad-brand">LinkedIn</p>
      <h3>Your job search powered by your network</h3>
      <button type="button">Explore jobs</button>
      <div className="mn-ad-image-strip" aria-hidden="true" />
    </section>
  );
}

function SidebarFooterLinks() {
  return (
    <section className="mn-footer-links" aria-label="Footer links">
      {networkFooterLinks.map((link) => (
        <a key={link} href="#">{link}</a>
      ))}
      <p>LinkedIn Corporation © 2026</p>
    </section>
  );
}

function InvitesSection() {
  return (
    <section className="mn-card mn-invites-section">
      <div className="mn-section-header">
        <h2>Invites received</h2>
      </div>

      <article className="mn-invite-message-row">
        <p>
          {inviteMessage.text} <button type="button">{inviteMessage.action}</button>
        </p>
        <button type="button" aria-label="Dismiss accepted invitation" className="mn-row-close">
          <X size={14} />
        </button>
      </article>

      <article className="mn-newsletter-row">
        <div className="mn-newsletter-logo">DELL</div>
        <div className="mn-newsletter-copy">
          <p className="mn-newsletter-subtitle">{newsletterInvite.subtitle}</p>
          <p>{newsletterInvite.text}</p>
        </div>
        <div className="mn-newsletter-actions">
          <button type="button" className="mn-btn-plain">Ignore</button>
          <button type="button" className="mn-btn-accept">Accept</button>
        </div>
      </article>
    </section>
  );
}

function PeopleCard({ person }) {
  const cardClassName = 'mn-person-card-image';

  return (
    <article className={cardClassName} aria-label={person.name}>
      <img src={person.cardImage} alt={person.name} className="mn-card-image" />
    </article>
  );
}

function PeopleSection() {
  return (
    <section className="mn-card mn-people-section">
      <header className="mn-section-header mn-people-header">
        <h2>People you may know based on your recent activity</h2>
        <button type="button" className="mn-show-all">Show all</button>
      </header>
      <div className="mn-people-grid">
        {networkPeople.slice(0, 8).map((person) => (
          <PeopleCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}

export default function MyNetworkPage() {
  return (
    <main className="mn-page">
      <div className="mn-layout-shell">
        <aside className="mn-sidebar">
          <SidebarOverviewCard />
          <SidebarAdCard />
          <SidebarFooterLinks />
        </aside>

        <section className="mn-main">
          <InvitesSection />
          <PeopleSection />
        </section>
      </div>
    </main>
  );
}
