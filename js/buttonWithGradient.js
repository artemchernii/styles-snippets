export const buttonWithGradientAnimation = () => {
  const btnWithGradient = document.querySelector(
    '.mouse-cursor-gradient-tracking'
  );
  btnWithGradient.addEventListener('mousemove', (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    btnWithGradient.style.setProperty('--x', x + 'px');
    btnWithGradient.style.setProperty('--y', y + 'px');
  });
};
