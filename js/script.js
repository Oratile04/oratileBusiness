// ---------------------------------------------
// Footer year
// ---------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------
// Mobile nav toggle
// ---------------------------------------------
const navToggle = document.getElementById('navToggle');
const siteNav = document.querySelector('.site-nav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------------------------------------------
// Hero ledger animation:
// messy sales rows fade out, then a plain-English
// insight types itself in. Respects reduced motion.
// ---------------------------------------------
const rowsData = [
  ['04/12', 'Beaded earrings', '3', 'R270'],
  ['04/12', 'Tote bag', '1', 'R180'],
  ['04/13', 'Beaded earrings', '2', 'R180'],
  ['04/14', 'Phone case', '4', 'R320'],
  ['04/14', 'Tote bag', '1', 'R180'],
  ['04/15', 'Beaded earrings', '5', 'R450'],
];

const insightSentence = "Beaded earrings drove 41% of revenue this week — restock before the weekend.";

const tbody = document.getElementById('ledgerRows');
const insightEl = document.getElementById('insightText');
const insightBox = document.getElementById('ledgerInsight');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function buildRows() {
  tbody.innerHTML = '';
  rowsData.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach((cell, i) => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function typeInsight(text) {
  insightEl.textContent = '';
  let i = 0;
  const speed = reduceMotion ? 0 : 22;
  function step() {
    if (i <= text.length) {
      insightEl.textContent = text.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

function runLedgerSequence() {
  buildRows();

  if (reduceMotion) {
    insightBox.classList.add('show');
    typeInsight(insightSentence);
    return;
  }

  setTimeout(() => {
    Array.from(tbody.children).forEach((tr, i) => {
      setTimeout(() => tr.classList.add('fading'), i * 60);
    });
  }, 1600);

  setTimeout(() => {
    insightBox.classList.add('show');
    typeInsight(insightSentence);
  }, 2500);
}

// Run once on load, then re-run every time it scrolls into view again
const ledgerSection = document.querySelector('.hero-ledger');
let hasRun = false;

// Always show real data immediately, even before any animation triggers
buildRows();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasRun) {
      hasRun = true;
      runLedgerSequence();
    }
  });
}, { threshold: 0.3 });

observer.observe(ledgerSection);
