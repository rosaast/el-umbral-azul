// Interacciones locales: no se almacenan ni envían respuestas.
const progress = document.getElementById('reading-progress');
const reflect = document.getElementById('choice-reflection');
const choices = [...document.querySelectorAll('[data-answer]')];

let rafPending = false;
function updateReadingProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxScroll > 0 ? Math.max(0, Math.min(100, (window.scrollY / maxScroll) * 100)) : 0;
  progress.style.width = `${percentage}%`;
  rafPending = false;
}
window.addEventListener('scroll', () => {
  if (rafPending) return;
  rafPending = true;
  window.requestAnimationFrame(updateReadingProgress);
}, { passive: true });
window.addEventListener('resize', updateReadingProgress);
updateReadingProgress();

const reflections = {
  decision: 'Elegir entre alternativas puede indicar autonomía funcional. Pero, como plantea el regreso de Zima a la piscina, elegir no revela por sí mismo si existe una experiencia interior o cuánto pesa la programación de origen.',
  emotion: 'Una emoción expresada con palabras o gestos puede conmovernos de verdad, aunque no demuestre que quien la expresa la esté viviendo. La apariencia y la experiencia siguen siendo preguntas diferentes.',
  self: 'Reconocerse a sí misma se acerca al modelo del mundo y del yo que proponen Blum y Blum. Aun así, una representación de sí no resuelve por completo el problema de la experiencia subjetiva.'
};

choices.forEach((button) => {
  button.addEventListener('click', () => {
    choices.forEach((choice) => choice.setAttribute('aria-pressed', String(choice === button)));
    reflect.textContent = reflections[button.dataset.answer];
  });
});

// Cursor cuadrado. Se activa únicamente con mouse/trackpad, nunca en pantallas táctiles.
const customCursor = document.getElementById('custom-cursor');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
if (customCursor && finePointer.matches) {
  document.body.classList.add('custom-cursor-enabled');
  let targetX = -50;
  let targetY = -50;
  let x = -50;
  let y = -50;
  let isActive = false;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function followPointer() {
    const ease = reduceMotion ? 1 : 0.32;
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    customCursor.style.left = `${x}px`;
    customCursor.style.top = `${y}px`;
    if (isActive) window.requestAnimationFrame(followPointer);
  }

  document.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    targetX = event.clientX;
    targetY = event.clientY;
    if (!isActive) {
      x = targetX;
      y = targetY;
      isActive = true;
      window.requestAnimationFrame(followPointer);
    }
    customCursor.classList.add('visible');
    const underPointer = document.elementFromPoint(event.clientX, event.clientY);
    const dark = underPointer?.closest('.entry-art, .hero-visual, .pool-art, .chapter-bridge, .closing, .site-footer');
    customCursor.classList.toggle('on-dark', Boolean(dark));
    customCursor.classList.toggle('over-control', Boolean(underPointer?.closest('a, button')));
  }, { passive: true });

  document.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') customCursor.classList.add('pressed');
  });
  document.addEventListener('pointerup', () => customCursor.classList.remove('pressed'));
  document.addEventListener('pointercancel', () => customCursor.classList.remove('pressed'));
  document.addEventListener('mouseout', (event) => {
    if (event.relatedTarget === null) {
      customCursor.classList.remove('visible', 'pressed');
      isActive = false;
    }
  });
  window.addEventListener('blur', () => {
    customCursor.classList.remove('visible', 'pressed');
    isActive = false;
  });
}
