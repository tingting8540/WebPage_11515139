document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  if (!menuButton || !navigation) return;

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };

  const toggleMenu = () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  };

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // 點擊選單內部連結時自動關閉選單
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  // 點擊選單外部時關閉
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });

  // 按下 Escape 鍵關閉選單並將焦點歸還按鈕
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  // 螢幕寬度改變超過行動裝置斷點時自動關閉
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
});
