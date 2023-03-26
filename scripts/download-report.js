
const downloadButtons = document.querySelectorAll('.download-btn');
downloadButtons.forEach(button => {
  button.addEventListener('click', () => {
    const reportId = button.getAttribute('data-report-id');
    window.location.href = `../report_pages/download-report.php?report=${reportId}`;
  });
});
