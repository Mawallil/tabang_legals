// Tabang Legal & Compliance Portal Script
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active navigation link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-cta');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('/tabang_legals/'))))) {
      link.classList.add('active');
    }
  });

  // Handle Deletion Form Submission
  const deletionForm = document.getElementById('deletionForm');
  const deletionStatus = document.getElementById('deletionStatus');

  if (deletionForm) {
    deletionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const identifier = document.getElementById('userIdentifier').value.trim();
      const requestType = document.getElementById('requestType').value;
      const lguName = document.getElementById('lguName').value.trim() || 'Pilot Evaluation';
      const confirmCheck = document.getElementById('confirmCheck').checked;

      if (!identifier) {
        alert('Please enter your registered identifier.');
        return;
      }

      if (!confirmCheck) {
        alert('Please confirm the deactivation acknowledgment.');
        return;
      }

      const ticketId = 'TBG-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' });

      const subject = encodeURIComponent(`[Data Deletion Request] ${ticketId} - ${identifier}`);
      const body = encodeURIComponent(
        `TABANG DATA DELETION / UNLINKING REQUEST\n` +
        `-----------------------------------------\n` +
        `Reference ID: ${ticketId}\n` +
        `Date: ${timestamp}\n` +
        `Identifier: ${identifier}\n` +
        `Type: ${requestType}\n` +
        `LGU / Region: ${lguName}\n\n` +
        `Acknowledgment: User confirmed deactivation and profile erasure under RA 10173.`
      );

      if (deletionStatus) {
        deletionStatus.innerHTML = `
          <div class="notice" style="border-color: rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.04);">
            <div class="notice-title" style="color: #34d399;">Request Recorded</div>
            <p><strong>Reference:</strong> <code style="font-family: var(--font-mono); color: #34d399;">${ticketId}</code></p>
            <p style="margin-top: 6px;">Your account deactivation and unlinking request for <strong>${identifier}</strong> has been logged. Active profile data and device tokens will be purged within <strong>48 to 72 business hours</strong> under the Philippine Data Privacy Act.</p>
            <p style="margin-top: 6px; font-size: 0.85rem; color: var(--text-muted);">
              Optional: <a href="mailto:tabang.emergency@gmail.com?subject=${subject}&body=${body}" style="text-decoration: underline; color: var(--text);">Click here to send direct verification email to tabang.emergency@gmail.com</a>.
            </p>
          </div>
        `;
        deletionForm.reset();
        deletionStatus.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
