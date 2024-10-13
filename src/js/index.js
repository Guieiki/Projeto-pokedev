const ListaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(ListaSelecaoPokedevs);


ListaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
        cartaoPokedevParaAbrir.classList.add ("aberto");

        const pokedevAtivoNaListagem = document.querySelector (".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");

        const pokedeveSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedeveSelecionadoNaListagem.classList.add("ativo");
    })
    
})