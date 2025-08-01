<script>
  const links = document.querySelectorAll('.nav-link');
  const currentUrl = window.location.href;

  links.forEach(link => {
    if (currentUrl.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
</script>
