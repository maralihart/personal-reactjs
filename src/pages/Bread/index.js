import { useEffect, useRef } from 'react';
import { Link, Route, Switch, useLocation, useParams } from 'react-router-dom';
import { products, recipes, starterSteps } from './content';
import Illustration from './Illustration';
import useBreadMotion from './useBreadMotion';
import './Bread.css';

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  );
}

function GrainMark() {
  return (
    <svg viewBox="0 0 32 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M16 45V11m0 5C5 17 3 8 5 4c7 0 11 5 11 12Zm0 10C4 26 2 19 3 15c7-1 13 5 13 11Zm0 10C4 36 2 29 3 25c7-1 13 5 13 11Zm0-20C27 17 29 8 27 4c-7 0-11 5-11 12Zm0 10c12 0 14-7 13-11-7-1-13 5-13 11Zm0 10c12 0 14-7 13-11-7-1-13 5-13 11Z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="bread-header container">
      <Link className="bread-brand" to="/bread" aria-label="Bread by Mara home">
        <GrainMark />
        <span>bread<span className="bread-brand-by">by mara</span></span>
      </Link>
      <nav className="bread-nav" aria-label="Bakery">
        <Link to="/bread#bakes">The bakes</Link>
        <Link to="/bread#starter">Your starter</Link>
        <Link to="/bread#recipes">Recipes</Link>
        <Link to="/bread#rewards">Rewards</Link>
        <Link className="bread-order-link" to="/bread#order">Let’s talk bread <Arrow diagonal /></Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bread-footer">
      <div className="container">
        <div className="bread-footer-top">
          <Link className="bread-footer-wordmark" to="/bread">bread by mara<span aria-hidden="true">.</span></Link>
          <p>A little organic unbleached flour.<br />A lot of love.</p>
        </div>
        <div className="bread-footer-bottom">
          <span>© {new Date().getFullYear()} Bread by Mara</span>
          <Link to="/bread#rewards">Loaf loyalty & referrals</Link>
        </div>
      </div>
    </footer>
  );
}

function IngredientNotice() {
  return (
    <p className="bread-notice">
      <strong>A note on allergens:</strong> These products are made in a kitchen where cross-contact
      with allergens may occur. Please review the ingredients and allergens for your chosen
      loaf or flavor, and discuss any dietary needs with Mara before ordering.
    </p>
  );
}

function ProductVisual({ product }) {
  return product.photo ? (
    <img className="bread-product-photo" src={product.photo.src} alt={product.photo.alt} width={product.photo.width} height={product.photo.height} loading="lazy" decoding="async" />
  ) : <Illustration kind={product.art} />;
}

function Home() {
  return (
    <>
      <section className="bread-hero container">
        <div className="bread-hero-copy">
          <p className="eyebrow" data-reveal>Small-batch sourdough, made to order.</p>
          <h1 data-reveal>Good bread.<br /><em>Better days.</em></h1>
          <p className="bread-hero-description" data-reveal>For the toast people. The crust people.<br className="desktop-break" /> The just-one-more-slice people.<br />A little something good, by Mara.</p>
          <div className="bread-hero-actions" data-reveal>
            <Link className="button" to="/bread#order">Let’s get you some bread <Arrow /></Link>
            <Link className="text-link" to="/bread#bakes">Meet the bakes</Link>
          </div>
          <div className="bread-hero-footnote"><span className="bread-small-line" /> Slowly made. Happily shared.</div>
        </div>
        <figure className="bread-hero-photo">
          <img
            src="/images/bread/sandwich-loaves.webp"
            alt="Three freshly baked sourdough sandwich loaves cooling on a rack"
            width="585"
            height="323"
          />
          <div className="bread-photo-stamp" aria-hidden="true"><GrainMark /><span>organic unbleached flour,<br /><em>water, time & care</em></span></div>
          <figcaption>From my kitchen to your table.</figcaption>
        </figure>
      </section>

      <div className="bread-values" aria-label="Our bread philosophy">
        <div className="container"><span>Simple ingredients</span><span aria-hidden="true">✳</span><span>Time to rise</span><span aria-hidden="true">✳</span><span>Made to be shared</span><span aria-hidden="true">✳</span><span>Every crumb counts</span></div>
      </div>

      <section className="bread-section container" id="bakes">
        <div className="bread-section-heading" data-reveal>
          <div><p className="eyebrow">01 / Fresh from the kitchen</p><h2>Your new<br /><em>daily bread.</em></h2></div>
          <p>Nothing too fancy. Just the kind of bread<br className="desktop-break" /> that makes a regular day a little better.</p>
        </div>
        <div className="bread-product-grid">
          {products.map((product) => (
            <article className={`bread-product bread-product-${product.id}`} key={product.id} data-reveal>
              <Link className="bread-product-art" to={`/bread/ingredients#${product.id}`} aria-label={`See ${product.type.toLowerCase()} ingredients`}>
                <span className="eyebrow">{product.number} / The good stuff</span>
                <div className="bread-product-media"><Illustration kind={product.art} /></div>
                <span className="bread-art-label">{product.type}<Arrow diagonal /></span>
              </Link>
              <div className="bread-product-copy">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                {product.variations && <p>Also available in {product.variations.map((variation) => variation.name).join(' and ')}.</p>}
                <Link className="text-link" to={`/bread/ingredients#${product.id}`}>What’s in it? <Arrow /></Link>
              </div>
            </article>
          ))}
        </div>
        <IngredientNotice />
      </section>

      <section className="bread-starter-section" id="starter">
        <div className="container bread-starter-grid">
          <div className="bread-starter-art" data-reveal>
            <span className="bread-handwritten">Meet your new<br />kitchen companion.</span>
            <Illustration kind="starter" />
            <span className="eyebrow">A tiny jar. A whole lot of possibility.</span>
          </div>
          <div className="bread-starter-copy" data-reveal>
            <p className="eyebrow">02 / It starts with a starter</p>
            <h2>A little care.<br /><em>A lot of life.</em></h2>
            <p>Got a dehydrated starter? Let’s wake it up. All you need is organic unbleached flour, water, a clean jar, and a little patience. We’ll take it one feeding at a time.</p>
            <div className="bread-starter-mini"><span><b>01</b> Rehydrate</span><span><b>02</b> Feed</span><span><b>03</b> Watch it rise</span></div>
            <Link className="button" to="/bread/starter">Bring your starter to life <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="bread-section container" id="recipes">
        <div className="bread-section-heading" data-reveal>
          <div><p className="eyebrow">03 / Beyond the butter</p><h2>Good things<br /><em>come from bread.</em></h2></div>
          <p>A couple of ideas for slow weekends,<br className="desktop-break" /> busy mornings, and everything in between.</p>
        </div>
        <div className="bread-recipe-grid">
          {Object.entries(recipes).map(([slug, recipe], index) => (
            <Link className="bread-recipe-card" key={slug} to={`/bread/recipes/${slug}`} data-reveal>
              <div className={`bread-recipe-art bread-recipe-art-${index}`}><Illustration kind={recipe.art} /><span className="bread-round-arrow"><Arrow diagonal /></span></div>
              <div className="bread-recipe-meta eyebrow"><span>{recipe.tag}</span><span>{recipe.time}</span></div>
              <h3>{recipe.title}</h3>
              <p>{recipe.subtitle}</p>
              <span className="text-link">Make something good <Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bread-rewards-section" id="rewards" aria-labelledby="rewards-heading">
        <div className="container">
          <div className="bread-section-heading" data-reveal>
            <div><p className="eyebrow">04 / A little thank-you</p><h2 id="rewards-heading">Good bread.<br /><em>Better together.</em></h2></div>
            <p>For sharing the good stuff,<br className="desktop-break" /> and coming back for another slice.</p>
          </div>
          <div className="bread-rewards-grid">
            <figure className="bread-rewards-photo" data-reveal>
              <img src="/images/bread/date-loaf-packaged.webp" alt="Mara's date and date syrup sourdough loaf in its labeled paper packaging" width="1000" height="750" loading="lazy" decoding="async" />
              <figcaption>A loaf to share. A reason to come back.</figcaption>
            </figure>
            <div className="bread-rewards-offers">
              <article data-reveal>
                <p className="eyebrow">Refer a friend</p>
                <h3>They get an upgrade.<br />You get $3 credit.</h3>
                <p>For every friend you refer, they get a <strong>free upgrade</strong> and you get <strong>$3 in credit</strong>.</p>
              </article>
              <article data-reveal>
                <p className="eyebrow">Loaf loyalty</p>
                <h3>Buy 10 loaves.<br />Enjoy a classic on us.</h3>
                <p>For every <strong>10 loaves you buy</strong>, you get a <strong>free classic loaf</strong>. A little thank-you for making our bread part of your everyday.</p>
              </article>
              <p className="bread-rewards-note">Ask Mara about referrals and your loaf count when placing your order.</p>
              <Link className="text-link" to="/bread#order">Order & ask about rewards <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bread-order-section" id="order">
        <div className="container bread-order-grid">
          <div data-reveal><p className="eyebrow">05 / Save yourself a slice</p><h2>Your next good day<br /><em>starts here.</em></h2></div>
          <div className="bread-order-copy" data-reveal>
            <p>Craving a loaf? Planning a table full of people? Send me a note. We’ll talk bakes, availability, and how to get something good into your hands.</p>
            <a className="button" href="https://www.instagram.com/breadbymara/" target="_blank" rel="noreferrer">Message @breadbymara <Arrow diagonal /></a>
            <a className="text-link" href="mailto:bread@mara.fyi">Or email bread@mara.fyi <Arrow /></a>
            <p className="bread-order-note">All bread is made to order, arranged directly with Mara.<br />Ask about pricing, pickup, and any dietary needs.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailHeading({ eyebrow, title, children, backTo = '/bread', backLabel = 'Back to the kitchen' }) {
  return (
    <div className="bread-detail-heading">
      <Link className="text-link bread-back-link" to={backTo}><span aria-hidden="true">←</span> {backLabel}</Link>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

function Starter() {
  return (
    <article className="container bread-detail">
      <DetailHeading eyebrow="The starter notebook" title="Let’s wake up your starter." backTo="/bread#starter">
        <p>A little organic unbleached flour, a little water, and a rhythm you’ll soon know by heart. This guide starts with 10 g of dehydrated sourdough starter.</p>
      </DetailHeading>
      <div className="bread-guide-layout">
        <aside className="bread-guide-aside">
          <Illustration kind="starter" />
          <h2>Gather the little things.</h2>
          <ul><li>10 g dehydrated starter</li><li>Organic unbleached flour</li><li>Lukewarm drinking water</li><li>A clean jar with a loose-fitting lid</li><li>A kitchen scale and a rubber band</li></ul>
          <p>Use a jar with room to triple. Never seal an active starter airtight.</p>
        </aside>
        <div className="bread-guide-steps">
          {starterSteps.map((step, index) => (
            <section className="bread-guide-step" key={step.day}>
              <span className="bread-step-number" aria-hidden="true">0{index + 1}</span>
              <div><p className="eyebrow">{step.day}</p><h2>{step.title}</h2><p>{step.text}</p></div>
            </section>
          ))}
        </div>
      </div>
      <section className="bread-faq">
        <p className="eyebrow">A few things worth knowing</p>
        <h2>A happy jar, for the long run.</h2>
        <details><summary>How do I keep it going?</summary><p>Once reliably active, keep feeding at room temperature if baking daily. For less frequent baking, feed it, let activity begin, cover, and refrigerate. Feed roughly weekly; before baking, give it room-temperature feedings until it reliably doubles again. Keep a little starter back before mixing your dough.</p></details>
        <details><summary>What if it seems quiet?</summary><p>Keep it comfortably warm, not on a hot surface. Check your organic unbleached flour and water measurements and give it time. Cool kitchens can slow recovery considerably. If there’s no activity after a week of consistent feeding, contact Mara for help rather than baking with an inactive starter.</p></details>
        <details><summary>When should I start over?</summary><p>If you see fuzzy mold, pink or orange streaks, or notice a putrid smell, discard the entire starter and clean the container thoroughly. Don’t scrape off mold or try to revive it. Organic unbleached flour is raw: don’t taste starter or uncooked dough. Discard from this reactivation stage should be thrown away, not saved for recipes.</p></details>
      </section>
      <div className="bread-detail-bottom"><p>A question about your little jar?</p><a className="text-link" href="mailto:bread@mara.fyi?subject=Starter%20question">Ask Mara <Arrow /></a></div>
    </article>
  );
}

function Ingredients() {
  return (
    <article className="container bread-detail">
      <DetailHeading eyebrow="Nothing hidden" title="The little things that go in." backTo="/bread#bakes">
        <p>The ingredients in our sandwich loaf, its flavors, and our focaccia. Each sandwich loaf flavor starts with the same base, with its additions listed below.</p>
      </DetailHeading>
      <IngredientNotice />
      <div className="bread-ingredient-list">
        {products.map((product) => (
          <section className="bread-ingredient-item" id={product.id} key={product.id}>
            <ProductVisual product={product} />
            <div>
              <p className="eyebrow">Ingredients / {product.number}</p>
              <h2>{product.type}</h2>
              <p>{product.ingredients}</p>
              <p className="bread-allergen"><strong>Allergens:</strong> {product.allergens}</p>
              {product.variations && product.variations.map((variation) => (
                <section className="bread-allergen" aria-label={`${variation.name} loaf`} key={variation.name}>
                  <p><strong>{variation.name}</strong></p>
                  <p>{variation.ingredients}</p>
                  <p><strong>Allergens:</strong> {variation.allergens}</p>
                </section>
              ))}
            </div>
          </section>
        ))}
        <section className="bread-ingredient-item">
          <Illustration kind="starter" />
          <div><p className="eyebrow">Ingredients / 03</p><h2>Dehydrated starter</h2><p>Organic unbleached flour and water, fermented and dehydrated.</p><p className="bread-allergen"><strong>Allergens:</strong> Contains wheat.</p></div>
        </section>
      </div>
      <div className="bread-detail-bottom"><p>Questions about an ingredient or a dietary need?</p><a className="text-link" href="mailto:bread@mara.fyi?subject=Ingredients%20and%20allergens">Check with Mara before ordering <Arrow /></a></div>
    </article>
  );
}

function Recipe() {
  const { slug } = useParams();
  if (!Object.prototype.hasOwnProperty.call(recipes, slug)) return <NotFound />;
  const recipe = recipes[slug];
  return (
    <article className="container bread-detail">
      <DetailHeading eyebrow={`The recipe notebook / ${recipe.tag}`} title={recipe.title} backTo="/bread#recipes">
        <p>{recipe.intro}</p>
        <div className="bread-recipe-facts"><span>{recipe.time}</span><span>{recipe.yield}</span></div>
      </DetailHeading>
      <div className="bread-guide-layout">
        <aside className="bread-guide-aside">
          <Illustration kind={recipe.art} />
          <h2>What you’ll need</h2>
          <ul>{recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul>
        </aside>
        <section className="bread-method">
          <h2>Let’s make it.</h2>
          <ol>{recipe.method.map((step) => <li key={step}>{step}</li>)}</ol>
          <p className="bread-notice">{recipe.note}</p>
        </section>
      </div>
      <div className="bread-detail-bottom"><p>A little prep. A very good breakfast.</p><Link className="text-link" to="/bread#recipes">More from the recipe notebook <Arrow /></Link></div>
    </article>
  );
}

function NotFound() {
  return <section className="container bread-detail"><DetailHeading eyebrow="A crumb out of place" title="This page isn’t in the oven." /><Link className="button" to="/bread">Back to bread <Arrow /></Link></section>;
}

export default function Bread() {
  const root = useRef(null);
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  useBreadMotion(root, location.pathname);

  useEffect(() => {
    const titles = {
      '/bread': 'Bread by Mara | Good bread. Better days.',
      '/bread/starter': 'Your starter guide | Bread by Mara',
      '/bread/ingredients': 'Ingredients & allergens | Bread by Mara',
      '/bread/recipes/pancakes': 'Sourdough pancakes | Bread by Mara',
      '/bread/recipes/french-toast': 'Meal-prep French toast | Bread by Mara',
    };
    document.title = titles[location.pathname.replace(/\/$/, '')] || 'Page not found | Bread by Mara';
    const frame = requestAnimationFrame(() => {
      const target = location.hash && document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
      if (previousPath.current !== location.pathname) {
        const heading = target || root.current.querySelector('h1');
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
        }
      }
      previousPath.current = location.pathname;
    });
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <div className="bread-site" ref={root}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Switch>
          <Route exact path="/bread" component={Home} />
          <Route exact path="/bread/starter" component={Starter} />
          <Route exact path="/bread/ingredients" component={Ingredients} />
          <Route exact path="/bread/recipes/:slug" component={Recipe} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
