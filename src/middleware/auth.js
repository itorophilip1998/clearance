
/* eslint-disable */

function setAuth() { 

  try {
    const auth = localStorage.getItem("token");
    const path = window.location.pathname;
    const role = localStorage.getItem("role");

    //   not logged in
    if (auth == null && (path == "/dashboard" || path.match("/admin"))) {
      window.location.href = "/login";
    }
    // admin
    else if (auth != null && path == "/dashboard" && role != "user") {
      window.location.href = "/admin/dashboard";
    }
    //   user
    else if (auth != null && path.match("/admin") && role != "admin") {
      window.location.href = "/dashboard";
    }
  } catch (error) {}
}
setAuth();
