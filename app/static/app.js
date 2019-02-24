/**
 * Toggle sidebars, used for sidebar buttons
 * @param sidebar {string}
 */
const toggleSidebar = (sidebar) => {
  document.getElementsByClassName("sidebar-" + sidebar)[0].classList.toggle('sidebar-open');
};
