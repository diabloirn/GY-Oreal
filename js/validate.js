document.addEventListener('DOMContentLoaded', () => {

  const form         = document.getElementById('subscribeForm');
  const successPanel = document.getElementById('formSuccess');

  if (!form) return;

  function showError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (!field || !error) return;
    field.classList.add('invalid');
    error.textContent = message;
    error.classList.add('visible');
  }

  function clearError(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (!field || !error) return;
    field.classList.remove('invalid');
    error.classList.remove('visible');
  }

  document.getElementById('fullName').addEventListener('input', () => {
    clearError('fullName', 'nameError');
  });
  document.getElementById('emailAddress').addEventListener('input', () => {
    clearError('emailAddress', 'emailError');
  });
  document.getElementById('productCategory').addEventListener('change', () => {
    clearError('productCategory', 'categoryError');
  });

  function validateName(name) {
    if (name.trim().length === 0) {
      showError('fullName', 'nameError', 'Please enter your full name.');
      return false;
    }
    if (name.trim().length < 3) {
      showError('fullName', 'nameError', 'Name must be at least 3 characters long.');
      return false;
    }
    clearError('fullName', 'nameError');
    return true;
  }

  function validateEmail(email) {
    const trimmed = email.trim();
    if (trimmed.length === 0) {
      showError('emailAddress', 'emailError', 'Please enter your email address.');
      return false;
    }
    const atIndex = trimmed.indexOf('@');
    if (atIndex < 1) {
      showError('emailAddress', 'emailError', 'Email must contain an "@" symbol.');
      return false;
    }
    const afterAt = trimmed.split('@')[1];
    if (!afterAt || afterAt.length === 0) {
      showError('emailAddress', 'emailError', 'Email must have a domain after "@".');
      return false;
    }
    const dotIndex = afterAt.lastIndexOf('.');
    if (dotIndex < 1) {
      showError('emailAddress', 'emailError', 'Email must have a valid domain (e.g. .com).');
      return false;
    }
    const extension = afterAt.slice(dotIndex + 1);
    if (extension.length < 2) {
      showError('emailAddress', 'emailError', 'Email extension must be at least 2 characters.');
      return false;
    }
    clearError('emailAddress', 'emailError');
    return true;
  }

  function validateCategory(value) {
    if (value === '' || value === null) {
      showError('productCategory', 'categoryError', 'Please select a product category.');
      return false;
    }
    clearError('productCategory', 'categoryError');
    return true;
  }

  function validateRadio() {
    const radios  = document.querySelectorAll('input[name="frequency"]');
    const errorEl = document.getElementById('frequencyError');
    let selected  = false;
    radios.forEach(r => { if (r.checked) selected = true; });
    if (!selected) {
      if (errorEl) {
        errorEl.textContent = 'Please select a newsletter frequency.';
        errorEl.classList.add('visible');
      }
      return false;
    }
    if (errorEl) errorEl.classList.remove('visible');
    return true;
  }

  function validateTerms() {
    const checkbox = document.getElementById('agreeTerms');
    const errorEl  = document.getElementById('termsError');
    if (!checkbox.checked) {
      if (errorEl) {
        errorEl.textContent = 'You must agree to the terms and privacy policy.';
        errorEl.classList.add('visible');
      }
      return false;
    }
    if (errorEl) errorEl.classList.remove('visible');
    return true;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name     = document.getElementById('fullName').value;
    const email    = document.getElementById('emailAddress').value;
    const category = document.getElementById('productCategory').value;

    const v1 = validateName(name);
    const v2 = validateEmail(email);
    const v3 = validateCategory(category);
    const v4 = validateRadio();
    const v5 = validateTerms();

    if (v1 && v2 && v3 && v4 && v5) {
      form.classList.add('form--hidden');
      if (successPanel) successPanel.classList.add('visible');
    }
  });

});