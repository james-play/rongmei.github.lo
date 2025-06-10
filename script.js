document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('rechargeForm');
  const confirmation = document.getElementById('confirmation');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Normally here you'd send data to a backend
    form.classList.add('hidden');
    confirmation.classList.remove('hidden');
  });
});