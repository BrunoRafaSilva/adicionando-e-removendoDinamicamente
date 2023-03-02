let tabela,index;

let formulariocatch = document.getElementById("formulario")

/* EVITA REFRESH DA PÁGINA QUE ESTAVA ACONTECENDO*/
formulariocatch.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log('click');
})

/* CAPTURA OS VALORES PREENCHIDOS NOS INPUTS */
function inserir(produto, descricao, quantidade, valor) {
    tabela = document.getElementById('tabela');
    let qtdLinhas = tabela.rows.length;
    let linha = tabela.insertRow(qtdLinhas);
    let linhaParam;

    let cellProduto = linha.insertCell(0);
    let cellDesc = linha.insertCell(1);
    let cellQuantidade = linha.insertCell(2);
    let cellValor = linha.insertCell(3);

    cellProduto.innerHTML = produto;
    cellDesc.innerHTML = descricao;
    cellQuantidade.innerHTML = quantidade;
    cellValor.innerHTML = valor;

    preencheCamposForm();
}

/* INSERE OS ITENS NOS CAMPOS*/
function preencheCamposForm() {
    for (var i = 0; i < tabela.rows.length; i++) {
        tabela.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById('produto').value = tabela.rows[index].cells[0].innerText;
            document.getElementById('descricao').value = tabela.rows[index].cells[1].innerText;
            document.getElementById('quantidade').value = tabela.rows[index].cells[2].innerText;
            document.getElementById('valor').value = tabela.rows[index].cells[3].innerText;
        }
    }
}