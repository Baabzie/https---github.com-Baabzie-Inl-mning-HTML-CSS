document.addEventListener('DOMContentLoaded', function() {
    var sel = document.querySelectorAll('select');
    M.FormSelect.init(sel);
  });

const slideMenu = document.querySelectorAll(".sidenav");
M.Sidenav.init(slideMenu, {});
