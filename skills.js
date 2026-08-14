function drawSkillLines (container) {
  const svg = container.querySelector('.pack-line');
  const icons = Array.from(container.querySelectorAll('.skill i'));
  if(!svg||icons.length < 2) return;

  const rect = container.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`)
}