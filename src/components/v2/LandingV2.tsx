import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ARC, CONTACT, HERO, LABELS, NOW_V2, WORK } from "./copy";

/**
 * /landing-v2 sections. Five sections, five layout families:
 * split hero, asymmetric bento, wide-image + four-up text, diptych, two-column
 * contact. No eyebrows; headlines carry the hierarchy on their own.
 */
export function LandingV2() {
  return (
    <>
      <Hero />
      <Work />
      <Now />
      <Arc />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="v2-hero" aria-labelledby="v2-hero-title">
      <div className="v2-container v2-hero-grid">
        <div className="v2-hero-copy">
          <Reveal>
            <p className="v2-byline">
              <b>{HERO.byline.split(",")[0]}</b>, {HERO.byline.split(",").slice(1).join(",").trim()}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 id="v2-hero-title" className="v2-display">
              {HERO.headline}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="v2-hero-sub">{HERO.sub}</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="v2-row">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="v2-btn">
                {LABELS.message}
              </a>
              <Link href="/projects" className="v2-link">
                {LABELS.projects} <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="v2-hero-media">
          <div className="v2-portrait">
            <Image
              src={HERO.portrait.src}
              alt={HERO.portrait.alt}
              fill
              priority
              sizes="(max-width: 900px) 88vw, 360px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  const [apps, infra, ai] = WORK.pillars;
  return (
    <section className="v2-section" aria-labelledby="v2-work-title">
      <div className="v2-container">
        <Reveal>
          <h2 id="v2-work-title" className="v2-h2 v2-h2-gap">
            {WORK.title}
          </h2>
        </Reveal>

        <div className="v2-bento">
          <Reveal as="article" className="v2-cell v2-cell-a">
            <h3 className="v2-h3">{apps.title}</h3>
            <p className="v2-small">{apps.blurb}</p>
            <div className="v2-shot">
              <Image
                src={WORK.flagship.image}
                alt={WORK.flagship.alt}
                fill
                sizes="(max-width: 900px) 92vw, 640px"
              />
            </div>
            <div className="v2-stack v2-tight">
              <p className="v2-flag-name">{WORK.flagship.name}</p>
              <p className="v2-flag-tagline">{WORK.flagship.tagline}</p>
              <p className="v2-small">{WORK.flagship.description}</p>
            </div>
            <div className="v2-tags">
              {WORK.flagship.tags.map((t) => (
                <span key={t} className="v2-tag">
                  {t}
                </span>
              ))}
            </div>
            <Link href="/projects" className="v2-link v2-push">
              {LABELS.projects} <Icon name="arrow-right" size={16} />
            </Link>
          </Reveal>

          <Reveal as="article" delay={80} className="v2-cell v2-cell-b">
            <h3 className="v2-h3">{infra.title}</h3>
            <p className="v2-small">{infra.blurb}</p>
            <ul className="v2-list">
              {WORK.ecosystem.map((p) => (
                <li key={p.name}>
                  <span className="v2-list-name">
                    {p.name}
                    <small>{p.live ? "live" : "internal"}</small>
                  </span>
                  <span className="v2-small">{p.line}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="article" delay={140} className="v2-cell v2-cell-c">
            <h3 className="v2-h3">{ai.title}</h3>
            <p className="v2-small">{ai.blurb}</p>
            <Link href={WORK.aiLink.href} className="v2-link v2-push">
              {WORK.aiLink.label} <Icon name="arrow-right" size={16} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="v2-stackrow">
            <span className="v2-mono v2-muted">Stack</span>
            {WORK.stack.map((s) => (
              <span key={s} className="v2-chip">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Now() {
  return (
    <section className="v2-section" aria-labelledby="v2-now-title">
      <div className="v2-container v2-stack v2-stack-lg">
        <Reveal>
          <div className="v2-stack">
            <h2 id="v2-now-title" className="v2-h2 v2-measure">
              {NOW_V2.title}
            </h2>
            <p className="v2-lead">{NOW_V2.lead}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <figure>
            <div className="v2-wide">
              <Image src={NOW_V2.image.src} alt={NOW_V2.image.alt} fill sizes="(max-width: 900px) 92vw, 1100px" />
            </div>
            <figcaption className="v2-caption">{NOW_V2.image.caption}</figcaption>
          </figure>
        </Reveal>

        <div className="v2-caps">
          {NOW_V2.capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 60} className="v2-cap">
              <h3>{c.title}</h3>
              <p>{c.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="v2-italic">{NOW_V2.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Arc() {
  return (
    <section className="v2-section" aria-labelledby="v2-arc-title">
      <div className="v2-container v2-stack v2-stack-lg">
        <Reveal>
          <div className="v2-stack">
            <h2 id="v2-arc-title" className="v2-h2 v2-measure">
              {ARC.title}
            </h2>
            <p className="v2-lead">{ARC.body}</p>
            <Link href={ARC.link.href} className="v2-link v2-self-start">
              {ARC.link.label} <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="v2-diptych">
          {ARC.photos.map((p, i) => (
            <Reveal key={p.src} as="div" delay={i * 90}>
              <figure>
                <div className="v2-photo">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 92vw, 540px" />
                </div>
                <figcaption className="v2-caption">{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="v2-section" aria-labelledby="v2-contact-title">
      <div className="v2-container v2-grid">
        <Reveal className="v2-col-6">
          <div className="v2-stack v2-stack-lg">
            <div className="v2-stack">
              <h2 id="v2-contact-title" className="v2-h2">
                {CONTACT.title}
              </h2>
              <p className="v2-lead">{CONTACT.body}</p>
            </div>
            <div className="v2-row">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="v2-btn">
                <Icon name="whatsapp" size={16} /> {LABELS.message}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="v2-link v2-mono">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="v2-col-start-8">
          <ul className="v2-socials">
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="v2-social">
                  <span>{s.label}</span>
                  <span>
                    <em>{s.host}</em>
                    <Icon name="arrow-up-right" size={14} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
