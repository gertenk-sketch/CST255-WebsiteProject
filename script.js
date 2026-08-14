document.addEventListener('DOMContentLoaded', function () {

  // ========== Image Toggle Buttons ==========

  // About Me page - Tiffin image
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

  // My Future page - Computer image
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

  // My Family page - Pets image
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

  // Hello button (About Me page)
  const helloBtn = document.getElementById('hello-btn');
  if (helloBtn) {
    helloBtn.addEventListener('click', function () {
      alert("Fun Fact: I have gone by Katie for so long that the name Katherine feels like it belongs to a different person");
    });
  }

  // ========== Learning Form Validation & Interaction ==========

  const form = document.getElementById('learning-form');
  const successMsg = document.getElementById('form-success');
  const clearBtn = document.getElementById('clear-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // always prevent real submit for this demo

      // Reset previous errors and success
      hideAllErrors();
      if (successMsg) {
        successMsg.classList.remove('visible');
      }

      let isValid = true;

      // Validate behavior notes (at least 10 characters)
      const behaviorInput = document.getElementById('behavior-notes');
      const behaviorError = document.getElementById('behavior-error');
      if (behaviorInput && behaviorError) {
        if (!behaviorInput.value.trim() || behaviorInput.value.trim().length < 10) {
          showError(behaviorError);
          isValid = false;
        }
      }

      if (isValid) {
        // Show success message
        if (successMsg) {
          successMsg.classList.add('visible');
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          alert('Form submitted successfully! (Demo only — nothing was sent.)');
        }
      } else {
        // Scroll to first visible error
        const firstError = document.querySelector('.error-message.visible');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // Clear form button
  if (clearBtn && form) {
    clearBtn.addEventListener('click', function () {
      form.reset();
      hideAllErrors();
      if (successMsg) {
        successMsg.classList.remove('visible');
      }
    });
  }

  // Helper functions
  function showError(el) {
    if (el) {
      el.classList.add('visible');
    }
  }

  function hideAllErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(function (err) {
      err.classList.remove('visible');
    });
  }

});
