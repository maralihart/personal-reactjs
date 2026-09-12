import { useEffect } from 'react';
import portrait from '../../assets/mara-profile.jpg';
import AffiliateDisclosure from './AffiliateDisclosure';
import { socialLinks, socialProfiles } from './data';
import './SocialLinks.css';

function SocialLink({ affiliate, children, ...props }) {
  return affiliate ? (
    <a {...props} target="_blank" rel="noopener noreferrer sponsored">{children}</a>
  ) : (
    <a {...props} target="_blank" rel="noopener noreferrer">{children}</a>
  );
}

function ProfileIcon({ platform }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {platform === 'instagram' ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </g>
      ) : (
        <path fill="currentColor" d="M14 3h3c0 2.5 1.5 4 4 4v3a8 8 0 0 1-4-1v7a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3Z" />
      )}
    </svg>
  );
}

export default function SocialLinks() {
  useEffect(() => {
    document.title = 'Links | Mara';
  }, []);

  return (
    <main className="social-page">
      <div className="container social-shell">
        <header className="social-navigation">
          <span className="social-wordmark">Mara</span>
          <span className="eyebrow">The link collection</span>
        </header>

        <div className="social-layout">
          <header className="social-intro">
            <img
              className="social-portrait"
              src={portrait}
              width="160"
              height="160"
              alt="Mara drinking juice at brunch"
            />
            <p className="eyebrow social-eyebrow">A few of my favorite things</p>
            <h1 className="social-title">Hi, I’m Mara.</h1>
            <p className="social-description">
              Welcome to my little corner of the internet. Here are a few places
              to find me, and a few things I love.
            </p>
            <p className="social-signature">Thanks for being here.</p>
            <nav className="social-profile-links" aria-label="Social profiles">
              {socialProfiles.map((profile) => (
                <SocialLink
                  key={profile.id}
                  className="social-profile-icon"
                  href={profile.href}
                  aria-label={profile.title}
                  aria-describedby="social-new-tab"
                  title={profile.description}
                >
                  <ProfileIcon platform={profile.id} />
                </SocialLink>
              ))}
            </nav>
            <div className="social-contact">
              <p className="eyebrow">Collaborations & inquiries</p>
              <a className="text-link" href="mailto:pr@mara.fyi">pr@mara.fyi</a>
            </div>
          </header>

          <section className="social-collection" aria-labelledby="social-links-heading">
            <div className="social-collection-heading">
              <h2 id="social-links-heading">The good things, gathered.</h2>
              <p id="social-new-tab">Links open in a new tab.</p>
            </div>
            <ul className="social-list">
              {socialLinks.map((item, index) => (
                <li key={item.id}>
                  <SocialLink
                    className="social-card"
                    href={item.href}
                    affiliate={item.affiliate}
                    aria-labelledby={`social-${item.id}-title`}
                    aria-describedby={`social-${item.id}-description social-new-tab`}
                  >
                    <span className="social-card-number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="social-card-copy">
                      <h3 id={`social-${item.id}-title`}>{item.title}</h3>
                      <p id={`social-${item.id}-description`}>
                        {item.description}
                        {item.affiliate && <span className="social-affiliate-label">Affiliate link</span>}
                      </p>
                    </div>
                    <svg
                      className="social-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M6 18 18 6M6 6h12v12" />
                    </svg>
                  </SocialLink>
                </li>
              ))}
            </ul>
            <AffiliateDisclosure />
          </section>
        </div>
      </div>
    </main>
  );
}
