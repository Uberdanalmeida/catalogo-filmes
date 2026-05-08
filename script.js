let filmes = catalogoFilmes;

const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".search-container button");
const movieListSection = document.getElementById("movieList");

function criarCardFilme(filme) {
  return `
        <article class="movie-card">
            <img src="${filme.imagem}" alt="Pôster do filme ${filme.titulo}" onerror="this.src='https://via.placeholder.com/150'">
            <div class="movie-info">
                <h3>${filme.titulo} (${filme.ano})</h3>
                <p><strong>Gênero:</strong> ${filme.genero}</p>
                <p class="sinopse">${filme.sinopse}</p>
                <a href="${filme.link}" target="_blank" rel="noopener noreferrer">Saiba mais</a>
            </div>
        </article>`;
}

function exibirFilmes(filmesParaExibir) {
  movieListSection.innerHTML = "";

  if (filmesParaExibir.length === 0) {
    movieListSection.innerHTML =
      '<p class="no-results">Nenhum filme encontrado com esse critério.</p>';
    return;
  }

  const filmesHTML = filmesParaExibir
    .map((filme) => criarCardFilme(filme))
    .join("");
  movieListSection.innerHTML = filmesHTML;
}

function buscarFilmes() {
  const termoBusca = searchInput.value.trim().toLowerCase();

  if (!termoBusca) {
    movieListSection.innerHTML =
      '<p class="no-results">Digite o nome de um filme para buscar.</p>';
    return;
  }

  const filmesFiltrados = filmes.filter((filme) => {
    return filme.titulo.toLowerCase().includes(termoBusca);
  });

  exibirFilmes(filmesFiltrados);
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  searchButton.addEventListener("click", buscarFilmes);
  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      buscarFilmes();
    }
  });
});
