document.addEventListener('DOMContentLoaded', function () {

  // About Me page
  const tiffinBtn = document.getElementById('toggle-tiffin');
  const tiffinImg = document.getElementById('tiffin-img');
  if (tiffinBtn && tiffinImg) {
    tiffinBtn.addEventListener('click', function () {
      tiffinImg.classList.toggle('hidden');
      tiffinBtn.textContent = tiffinImg.classList.contains('hidden')
        ? 'Show Image'
        : 'Hide Image';
    });
  }

  // My Future page
  const computerBtn = document.getElementById('toggle-computer');
  const computerImg = document.getElementById('computer-img');
  if (computerBtn && computerImg) {
    computerBtn.addEventListener('click', function () {
      computerImg.classList.toggle('hidden');
      computerBtn.textContent = computerImg.classList.contains('hidden')
        ? 'Show Image'
        : 'Hide Image';
    });
  }

  // My Family page
  const petsBtn = document.getElementById('toggle-pets');
  const petsImg = document.getElementById('pets-img');
  if (petsBtn && petsImg) {
    petsBtn.addEventListener('click', function () {
      petsImg.classList.toggle('hidden');
      petsBtn.textContent = petsImg.classList.contains('hidden')
        ? 'Show Image'
        : 'Hide Image';
    });
  }

  // Hello button
  const helloBtn = document.getElementById('hello-btn');
  if (helloBtn) {
    helloBtn.addEventListener('click', function () {
      alert("I don't know what to write here but I needed another thing. :)");
    });
  }

});
