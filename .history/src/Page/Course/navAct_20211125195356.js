document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
    toggle.addEventListener('click', e => {
      const sidebarID = toggle.dataset.toggleSidebar;
      const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
      if (sidebarElement) {
         let sidebarState = sidebarElement.getAttribute('aria-hidden');
         sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true); 
      }
    });
 });