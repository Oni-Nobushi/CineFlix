// Seleccionar elementos del DOM
const movies_grid = document.querySelector('#moviesGrid');

let movies = [
    { 
        id: 1, 
        title: "Red Notice", 
        genre: "Action/Comedy", 
        year: 2021, 
        rating: 6.4, 
        image: "./assets/img/movies/red-notice.jpg" 
    },
    { id: 2, title: "Spider-Man: Homecoming", genre: "Action/Adventure", year: 2017, rating: 6.4, image: "./assets/img/movies/spider-men.jpg" },
    { id: 3, title: "The Matrix Resurrections", genre: "Sci-fi/Action", year: 2021, rating: 6.4, image: "./assets/img/movies/matrix.jpg" },
    { id: 4, title: "Eternals", genre: "Adventure/Action", year: 2021, rating: 6.4, image: "./assets/img/movies/eternals.jpg" },
    { id: 5, title: "Dune", genre: "Sci-fi/Adventure", year: 2021, rating: 6.4, image: "./assets/img/movies/dune.jpg" },
    { id: 6, title: "1917", genre: "War/Drama", year: 2019, rating: 6.4, image: "./assets/img/movies/1917.jpg" },
    { id: 7, title: "Shang-Chi and The Legend of The Ten Rings", genre: "Action/Fantasy", year: 2021, rating: 6.4, image: "./assets/img/movies/shang-chi.jpg" },
    { id: 8, title: "Casino Royale", genre: "Action/Adventure", year: 2006, rating: 6.4, image: "./assets/img/movies/casino-royale.jpg" },
    { id: 9, title: "The Dark Knight", genre: "Action/Adventure", year: 2008, rating: 6.4, image: "./assets/img/movies/dark-knight.jpg" },
    { id: 10, title: "Black Panther", genre: "Action/Adventure", year: 2018, rating: 6.4, image: "./assets/img/movies/panther.jpg" },
    { id: 11, title: "Venom", genre: "Action/Adventure", year: 2018, rating: 6.4, image: "./assets/img/movies/venom.jpg" }
];

// Función para inicializar la aplicación
function initApp() {
    // Crear elementos HTML para cada movie y mostrarlos en la lista
    movies.forEach((value) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('movie-card');
        newDiv.innerHTML =  `
        
          <div class="card-head">
            <img src="${value.image}" alt="" class="card-img">
            <div class="card-overlay">
              <div class="bookmark"><i class='bx bx-bookmark'></i></div>
              <div class="rating"><i class='bx bx-star'></i><span>${value.rating}</span></div>
              <div class="play"><i class='bx bx-play-circle'></i></div>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">${value.title}</h3>
            <div class="card-info">
              <span class="genre">${value.genre}</span>
              <span class="year">${value.year}</span>
            </div>
          </div>
        
      `,    movies_grid.appendChild(newDiv);
    });
}

// Llamar a la función de inicialización al cargar la página
initApp();