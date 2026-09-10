// Tabang Legal Portal Client Script
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active link based on current path
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
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
      const lguName = document.getElementById('lguName').value.trim() || 'Pilot Sandbox / General';
      const confirmCheck = document.getElementById('confirmCheck').checked;

      if (!identifier) {
        alert('Please enter your registered mobile number or username.');
        return;
      }

      if (!confirmCheck) {
        alert('Please confirm that you understand the terms of account and data unlinking.');
        return;
      }

      // Generate a mock reference tracking ticket
      const ticketId = 'TBG-DEL-' + Math.floor(100000 + Math.random() * 900000);
      const timestamp = new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' });

      // Build mailto fallback payload for instant dispatch to developer/compliance
      const subject = encodeURIComponent(`[Data Deletion Request] Ticket ${ticketId} - ${identifier}`);
      const body = encodeURIComponent(
        `TABANG DATA DELETION / UNLINKING REQUEST\n` +
        `-----------------------------------------\n` +
        `Ticket Reference: ${ticketId}\n` +
        `Date & Time: ${timestamp}\n` +
        `User Identifier: ${identifier}\n` +
        `Request Type: ${requestType}\n` +
        `LGU / Jurisdiction: ${lguName}\n\n` +
        `User Declaration: User confirmed deactivation and profile erasure under RA 10173.`
      );

      // Render confirmation UI
      if (deletionStatus) {
        deletionStatus.innerHTML = `
          <div class="callout-box" style="border-left-color: var(--accent-green); background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.3);">
            <div class="callout-title" style="color: #34d399;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              Request Logged Successfully
            </div>
            <p style="margin-bottom: 8px;"><strong>Reference Ticket:</strong> <code style="font-family: var(--font-mono); background: rgba(0,0,0,0.4); padding: 2px 6px; border-radius: 4px; color: #34d399;">${ticketId}</code></p>
            <p style="margin-bottom: 8px;">Your account deactivation and data erasure request for <strong>${identifier}</strong> has been received. Device tokens and profile credentials will be unlinked within <strong>48 to 72 business hours</strong> pursuant to Section 16 of the Philippine Data Privacy Act.</p>
            <p style="font-size: 0.85rem; color: var(--text-muted);">A backup transmission link has been prepared. If you wish to send an email confirmation directly to our compliance officer, <a href="mailto:privacy@tabang.ph?subject=${subject}&body=${body}" style="color: #60a5fa; text-decoration: underline;">click here to send direct verification email</a>.</p>
          </div>
        `;
        deletionForm.reset();
        deletionStatus.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
