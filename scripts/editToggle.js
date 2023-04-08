function editToggle() {
    const button = document.querySelectorAll('.edit-graph');
    // console.log(button);
    
    button.forEach(button => {
      if (button.style.display === "none") {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
}
