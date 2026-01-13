const descricao = document.getElementById("descricao");

const descriptions = [
    "<span class='destaque-roma'>👑 Patrícios</span> <br> <br> <p>Eram a elite rica e influente da sociedade romana. Proprietários de grandes terras, ocupavam cargos políticos e religiosos importantes. Acreditava-se que descendiam dos fundadores de Roma.</p>",
    "<span class='destaque-roma'>🤝 Clientes</span> <br><br> <p>Eram pessoas livres, mas sem muitos recursos. Estabeleciam uma relação de dependência com os patrícios, a quem ofereciam apoio em troca de proteção, ajuda financeira ou jurídica. Essa relação era baseada na lealdade.</p>",
    "<span class='destaque-roma'>🧑‍🔧 Plebeus</span> <br><br> <p>Formavam a maior parte da população. Eram trabalhadores livres, como artesãos, camponeses e comerciantes. Apesar de serem cidadãos, inicialmente tinham poucos direitos políticos, mas com o tempo conquistaram mais participação. </p>",
    "<span class='destaque-roma'>⛓️ Escravos</span> <br><br>  <p>Não tinham direitos e eram considerados propriedade. Podiam ser prisioneiros de guerra, pessoas endividadas ou filhos de escravos. Trabalhavam nas casas, campos ou construções, e sua condição era muito difícil.</p>"
];

document.querySelectorAll(".camada").forEach(camada => {
    camada.addEventListener("click", () => {
        const index = camada.getAttribute("data-index");
        descricao.innerHTML = descriptions[index];
    });
});
