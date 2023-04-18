window.onload = () => {

    var canvas = document.querySelectorAll('[id=dummy]')
    canvas.forEach(canvas => {
      fetch('../configs/graphs/defultGraph.json')
        .then((response) => response.json())
        .then((data) => {
          var ctx = canvas.getContext('2d');
          return window.Chart = new Chart(ctx, data);

        })
    });

}