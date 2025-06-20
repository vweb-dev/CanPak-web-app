document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('student-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const entries = Object.fromEntries(data.entries());
      console.log('Form submitted:', entries);
      alert('Form submitted! Check the console for data.');
    });
  }
});

