// Initialize MDC js
mdc.autoInit();

// Ensure main content adjusts to the height of the fixed toolbar correctly
var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

// Add event listeners for toolbar menus
let userMenu = new mdc.menu.MDCSimpleMenu(document.querySelector('.kb-user-menu'));
document.querySelector('.toggle__user-menu').addEventListener('click', () => userMenu.open = !userMenu.open);

let groupMenu = new mdc.menu.MDCSimpleMenu(document.querySelector('.kb-group-space-menu'));
document.querySelector('.toggle__group-space').addEventListener('click', () => groupMenu.open = !groupMenu.open);

// Add event listeners for collapsible stats and word cloud
let statsForGroup = document.querySelector('.kb-stats__docs-for-group');
let statsForUser = document.querySelector('.kb-stats__docs-for-user');
let wordCloudStats = document.querySelector('.kb-stats__search-word-cloud');
document.querySelector('.kb-toggle__docs-for-group').addEventListener('click', () => statsForGroup.classList.toggle('collapsed'));
document.querySelector('.kb-toggle__docs-for-user').addEventListener('click', () => statsForUser.classList.toggle('collapsed'));
document.querySelector('.kb-toggle__search-word-cloud').addEventListener('click', () => wordCloudStats.classList.toggle('collapsed'));