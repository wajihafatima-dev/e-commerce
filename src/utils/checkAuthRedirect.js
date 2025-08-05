// utils/checkAuthRedirect.js

const protectedRoutes = ["/", "/menu", "/order","/cart"];

export const checkAuthRedirect = () => {
  if (typeof window === "undefined") return;

  const userId = localStorage.getItem("userId");
  const currentPath = window.location.pathname;

  if (protectedRoutes.includes(currentPath) && !userId) {
    window.location.replace("/authentication/login");
  }
};
