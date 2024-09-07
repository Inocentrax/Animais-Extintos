function pesquisar() {
    //console.log(dados)
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado! Precisa digitar algo!</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let titulo = "";
    let descricao = "";
    let tags = ""
    let resultados = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Link Wiki para mais</a>
            </div>
            `;
        }
    };
    if (!resultados) {
        resultados="<p> Nada foi encontrado, Digite novamente </p>"
    }
    section.innerHTML = resultados;
}