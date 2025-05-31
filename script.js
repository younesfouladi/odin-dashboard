const root = document.documentElement;
const themeSwitchButton = document.querySelector(".switch-theme-btn");
const activeThemeIndicator = document.querySelector(".toggle-theme-switch");
// theme icon mode on switch button
const themeModeIcon = document.querySelector(".theme-mode-icon");

// تابعی برای اعمال تم (تاریک یا روشن) و به‌روزرسانی نمایشگر دکمه
function applyTheme(isDark) {
  if (isDark) {
    root.classList.add("dark-mode");
    root.classList.remove("light-mode");
    themeModeIcon.classList.add("bi-moon-stars");
    themeModeIcon.classList.remove("bi-brightness-high");
    if (activeThemeIndicator) {
      activeThemeIndicator.style.transform = "translateX(1.4rem)";
    }
  } else {
    root.classList.add("light-mode");
    root.classList.remove("dark-mode");
    themeModeIcon.classList.remove("bi-moon-stars");
    themeModeIcon.classList.add("bi-brightness-high");
    if (activeThemeIndicator) {
      activeThemeIndicator.style.transform = "translateX(0)";
    }
  }
}

// مدیریت دکمه تغییر دستی تم
if (themeSwitchButton) {
  themeSwitchButton.addEventListener("click", () => {
    // وضعیت فعلی تم را بررسی می‌کنیم
    // اگر کلاس 'light-mode' وجود داشته باشد، یعنی تم فعلی روشن است
    const isCurrentlyLight = root.classList.contains("light-mode");

    if (isCurrentlyLight) {
      // اگر تم فعلی روشن است، به تم تاریک تغییر می‌دهیم
      applyTheme(true); // true به معنای فعال کردن حالت تاریک است
    } else {
      // اگر تم فعلی تاریک است، به تم روشن تغییر می‌دهیم
      applyTheme(false); // false به معنای فعال کردن حالت روشن است
    }
  });
} else {
  // اگه دکمه پیدا نشه، برای اشکال‌زدایی در کنسول لاگ بشه
  console.warn("دکمه تغییر تم با کلاس '.switch-theme-btn' پیدا نشد.");
}

//  بررسی وجود نشانگر تم
if (!activeThemeIndicator) {
  console.warn("نشانگر فعال تم با کلاس '.toggle-theme-switch' پیدا نشد.");
}

// تشخیص خودکار ترجیح تم سیستم عامل
const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

// 1. تنظیم تم اولیه بر اساس ترجیح سیستم عامل هنگام بارگذاری صفحه
applyTheme(prefersColorScheme.matches);

// 2. گوش دادن به تغییرات بعدی در تنظیمات تم سیستم عامل
prefersColorScheme.addEventListener("change", (event) => {
  applyTheme(event.matches);
});

// ********************* Search box ***************************888
const searchBoxTemoveTextBtn = document.querySelector(
  ".search-box-remove-text"
);
const searchBoxText = document.querySelector(".search-box-text");

searchBoxTemoveTextBtn.addEventListener("click", () => {
  searchBoxText.value = "";
});

// SIDEBAR OPEN CLOSE BUTTON ********************

const sideBar = document.querySelector(".sidebar-container");
const sidebarCloser = document.querySelector(".sidebar-closer");
const sidebarOpener = document.querySelector(".sidebar-opener-button");

sidebarOpener.addEventListener("click", () => {
  sideBar.style.display = "flex";
});

sidebarCloser.addEventListener("click", () => {
  sideBar.style.display = "none";
});
