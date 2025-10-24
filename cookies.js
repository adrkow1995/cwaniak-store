if (!localStorage.getItem('cookiesAccepted')) {
  const banner = document.createElement('div');
  banner.innerHTML = `
    <div style="
      position:fixed;
      bottom:0;
      width:100%;
      background:#0f172a;
      color:#e5e7eb;
      text-align:center;
      padding:1rem;
      font-family:Inter,Arial,sans-serif;
      border-top:1px solid #22d3ee44;
      z-index:1000;
    ">
      Ta strona używa cookies 🍪, aby działała lepiej.
      <button id="acceptCookies" style="
        margin-left:1rem;
        background:linear-gradient(90deg,#22d3ee,#22c55e);
        color:#fff;
        border:none;
        padding:.5rem 1rem;
        border-radius:.5rem;
        cursor:pointer;
        font-weight:600;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('acceptCookies').onclick = () => {
    localStorage.setItem('cookiesAccepted', true);
    banner.remove();
  };
}
