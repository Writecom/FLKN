// A function that either adds or remove a class name
// to an element with the id #menu
function toggleMobile()
{
  var menu = document.getElementById("menu");
  var hasAnyClass = (menu.className !== "")
  var nextClass = (hasAnyClass ? "" : "show");
  menu.className = nextClass;
}
