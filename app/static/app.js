/**
 * Sidebar elements
 * @type {{left: Element, right: Element}}
 */
const sidebars = {
  left: document.getElementsByClassName("sidebar-left")[0],
  right: document.getElementsByClassName("sidebar-right")[0],
};

/**
 * Toggle sidebars, used for sidebar buttons
 * @param sidebar {string}
 */
const toggleSidebar = (sidebar) => {
  sidebars[sidebar].classList.toggle('sidebar-open');
};

/**
 * On page load
 */
(() => {
  document.getElementById("main").style.minHeight = window.innerHeight - 72 + "px";
})();
