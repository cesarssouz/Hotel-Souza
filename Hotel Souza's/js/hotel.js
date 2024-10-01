var user = ""
var quartos = [
    ["quarto 1", "livre"],
    ["quarto 2", "livre"],
    ["quarto 3", "livre"],
    ["quarto 4", "livre"],
    ["quarto 5", "livre"],
    ["quarto 6", "livre"],
    ["quarto 7", "livre"],
    ["quarto 8", "livre"],
    ["quarto 9", "livre"],
    ["quarto 10", "livre"],
    ["quarto 11", "livre"],
    ["quarto 12", "livre"],
    ["quarto 13", "livre"],
    ["quarto 14", "livre"],
    ["quarto 15", "livre"],
    ["quarto 16", "livre"],
    ["quarto 17", "livre"],
    ["quarto 18", "livre"],
    ["quarto 19", "livre"],
    ["quarto 20", "livre"]
];
var listadehospedes = []



function usuario() {
    user = prompt("Ola usuario(a), qual o seu nome?")
    if (!isNaN(user) || user === "") {
        alert("Por favor, insira um nome valido")
    } else {
        alert(`Bem vindo ao Hotel Souza🥥! ${user}.`)
        senha()
    }
}
function senha() {
    var senha = parseInt(prompt(`Olá ${user}, insira sua senha por favor!`))
    if (isNaN(senha) || senha === "") {
        alert("Por favor, insira a senha correta")
        usuario()
    } else if (senha === 2678) {
        alert("Bem vindo(a) ao Hotel Souza🥥 é um prazer em ter você por aqui.")
        inicio()
    } else {
        alert("Por favor, insira a senha correta")
        usuario()
    }
}


function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Eventos 4.) Abastecer 5.) Manutenção 6.) Sair'));

    switch (escolha) {
        case 1:
            reserva_quartos()
            break;
        case 2:
            cadastro_hospedes()
            break;
        case 3:
            eventos()
            break
        case 4:
            abastecer_carros()
            break;
        case 5:
            manutencao()
            break;
        case 6:
            sair()
            break;
        default:
            erro()
            break
    }
}

function reserva_quartos() {
    alert('Hotel Souza🥥 - Reserva de quartos');
    var valor_diaria = Number(prompt(`Olá senhor(a) ${user}, qual o valor da diaria?`))
    if (valor_diaria < 0 || isNaN(valor_diaria)) {
        alert("Valor invalido")
        inicio()
    }
    var dias = parseInt(prompt(`Insira os dias hospedados`))
    if (dias > 30 || dias < 0 || isNaN(dias)) {
        alert("Valor invalido")
        inicio()
    }
    var calculohospedagem = valor_diaria * dias
    alert(`O valor de ${dias} dias hospedados, será de ${calculohospedagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

    var hospedado = prompt("Qual o nome do hospede?")
    if (!isNaN(hospedado) || hospedado === "") {
        alert("Insira um nome valido")
        reserva_quartos()
    }
    var escolhadequartos = parseInt(prompt("Insira um numero do quarto de (1-20)")) - 1;
    if (escolhadequartos < 0 || escolhadequartos > 20 || isNaN(escolhadequartos)) {
        alert("Por favor insira um quarto valido")
        reserva_quartos()
    }
    if (quartos[escolhadequartos][1] === "ocupado") {
        alert("Quarto ocupado")
        escolhadequartos = parseInt(prompt("Insira um numero do quarto de (1-20)")) - 1;
    } else {
        quartos[escolhadequartos][1] = "ocupado"
        alert("Quarto disponivel!")
    }
    var confirmando = prompt(`Senhor(a) ${user}, você confirma a hospedagem para ${hospedado} por ${dias} dias no quarto ${escolhadequartos + 1} no valor de ${calculohospedagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}? sim ou não`);
    if (confirmando.toLowerCase() === "sim") {
        alert(`O quarto para o hóspede ${hospedado} foi reservado com sucesso! 🍷`);
        alert(quartos.join(" - "));
        alert("Obrigado por usar nossos serviços 🍷");
    } else if (confirmando.toLowerCase() === "não") {
        alert("Obrigado por usar nossos serviços 🍷");
    }
    inicio();
}

function cadastro_hospedes() {
    alert('Hotel Souza🥥 - Cadastro de hóspedes');

    var opccadastros = parseInt(prompt("Selecione uma opção 1.) Cadastrar 2.)Pesquisar 3.)Listar 4.)Sair "))

    switch (opccadastros) {
        case 1:
            cadastrar()
            break;
        case 2:
            pesquisar()
            break;
        case 3:
            listar()
            break;
        case 4:
            inicio()
        default:
            erro()
            break;
    }
    inicio();
}
function cadastrar() {
    var diariapadrao = Number(prompt("Qual o valor padrão da diaria?"))
    if (diariapadrao < 0 || isNaN(diariapadrao)) {
        alert("Dados invalidos")
        cadastro_hospedes()
    }
    var totalhosp = 0
    var gratuidade = 0
    var meia = 0

    while (true) {
        var nomehospede = prompt("Qual o nome do hospede? se quiser parar, digite PARE")
        if (!isNaN(nomehospede) || nomehospede === "") {
            alert("Digite hospedes validos ")
            continue
        }
        if (nomehospede.toUpperCase() === "PARE") {
            alert("Cadastro finalizdo !")
            break;
        }

        var idadehospede = parseInt(prompt("Qual a idade do hóspede?"))
        if (idadehospede <= 6) {
            "Hospede"; nomehospede,
                "Idade"; idadehospede,
                    "Tipo de Pagamento"; "Gratuito",
                        "Valor a ser pago"; (diariapadrao - diariapadrao)

        } else if (idadehospede > 60) {
            "Hospede"; nomehospede,
                "Idade"; idadehospede,
                    "Tipo de Pagamento"; "Meia",
                        "Valor a ser pago"; (diariapadrao / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else {
            "Hospede"; nomehospede,
                "Idade"; idadehospede,
                    "Tipo de Pagamento"; "Meia",
                        "Valor a ser pago"; (diariapadrao).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
        if (isNaN(idadehospede) || idadehospede < 0) {
            alert("Idade invalida")
            continue
        }
        if (idadehospede <= 6) {
            gratuidade++

            alert(`Cadastrado com sucesso ${nomehospede} possui gratuidade !`)

        } else if (idadehospede > 60) {
            meia++
            totalhosp += diariapadrao / 2

            alert(`Cadastrado com sucesso ${nomehospede} paga meia !`)
        } else {
            totalhosp += diariapadrao

            alert(`${nomehospede} cadastrado com sucesso !`)
        }
        alert(`Senhor(a) ${user}, o valor total da hospedagem é ${totalhosp.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }
}
function pesquisar() {
    nome_hospede = prompt("Qual o nome do Hóspede ?");

    var hospedepesquisa = listadehospedes.find(hospede => hospede.nome.toLowerCase() === nome_hospede.toLowerCase());

    if (hospedepesquisa) {
        alert(`Hóspede ${hospedepesquisa.nome} foi encontrado(a)!`);
    }
    else {
        alert("Hóspede não encontrado(a)!");

    }
}
function listar() {
    if (listadehospedes.length === 0) {
        alert("Nenhum hóspede cadastrado!");

    }
    else {
        alert(listadehospedes.join("  |  "));

    }
}
function eventos() {
    alert(`Bem vindo ao Hotel Souza🥥! ${user} - Eventos.`)

    var auditorio = ""
    var auditoriolaranja = 150
    var auditoriocolorado = 350

    var convidados = parseInt(prompt("Qual a quantidade de convidados?"))

    if (convidados > 350 || convidados < 0 || isNaN(convidados)) {
        alert("Numero de convidados invalidos ")
    } else if (convidados > auditoriolaranja && auditoriolaranja <= 220) {
        var cadeiras = convidados - auditoriolaranja

        auditorio = "Auditorio Laranja"

        alert(`Use o auditorio laranja(inclue ${cadeiras} a mais )`)
        alert("Agenda de Eventos 🍋 ")
    } else if (convidados <= auditoriolaranja) {
        auditorio = "Auditorio Laranja"

        alert("Use o auditorio laranja")
        alert("Agenda de Eventos 🍋 ")
    } else if (convidados > 220 && convidados <= auditoriocolorado) {
        auditorio = "Auditorio Colorado"

        alert("Use o auditorio colorado")
        alert("Agenda de Eventos 🍋 ")
    }
    var diasdoevento = prompt("Quais os dias do evento?")
    var horadoevento = parseInt(prompt("Qual a hora do evento?"))
    var empresa = prompt("Qual a empresa que está organizando o evento?")
    var auditorio2 = false

    if (["segunda", "terça", "terca", "quarta", "quinta", "sexta"].includes(diasdoevento) && horadoevento >= 7 && horadoevento <= 23) {
        auditorio2 = true;

    } else if (["sabado", "domingo"].includes(diasdoevento) && horadoevento >= 7 && horadoevento <= 15) {
        auditorio2 = true;
    }
    if (auditorio2) {
        alert(`Auditório reservado para ${empresa} na ${diasdoevento} às ${horadoevento} horas`)

    } else {
        alert("Auditório Indisponível!")

    }
    var custogarcomhora = 10.50
    var duracao = parseInt(prompt("Qual a duração do evento em horas?"))

    var garcomporconv = Math.ceil(convidados / 12)
    var custogarcom = garcomporconv * duracao * custogarcomhora

    alert(`São necessarios ${garcomporconv} garçons. `)
    alert(`Custo de ${custogarcom.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    alert("Vejamos o custo do buffet")

    var cafe = (convidados * 0.2)
    var agua = (convidados * 0.5)
    var salgados = (convidados * 7)

    var custocafe = (cafe * 0.80)
    var custoagua = (agua * 0.40)
    var custosalgado = Math.ceil(salgados / 100) * 34

    var buffet = custocafe + custoagua + custosalgado

    var totalevento = custogarcom + buffet

    alert(`Evento no ${auditorio2}
        Nome da Empresa: ${empresa}
        Dia do evento: ${diasdoevento}
        Hora do evento: ${horadoevento}horas
        Duração do evento: ${duracao} horas
        Total de convidados: ${convidados}
        Total de garçons: ${garcomporconv}
        Preço do total de garçons: ${custogarcom.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        Custo do buffet: ${buffet}
        Custo total do evento: ${totalevento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    )

    var confirmado = prompt("Gostaria de confirmar a reserva? Sim ou Não").toLowerCase()

    if (confirmado === "sim") {
        alert("Reservada efetuada com sucesso ! 🍷")
    } else {
        alert("Reserva sem sucesso, até mais.")
        inicio()
    }
}
function abastecer_carros() {
    alert('Hotel Souza🥥 - Abastecer');

    var alcoolwayne = parseFloat(prompt("Digite o preço do álcool no posto Wayne Oil:"))
    var gasolinawayne = parseFloat(prompt("Digite o preço da gasolina no posto Wayne Oil:"))

    var alcoolstark = parseFloat(prompt("Digite o preço do álcool no posto Stark Petrol:"))
    var gasolinastark = parseFloat(prompt("Digite o preço da gasolina no posto Stark Petrol:"))


    var capacidadetanque = 42

    var custowynealcool = alcoolwayne * capacidadetanque;
    var custowaynegasolina = gasolinawayne * capacidadetanque;
    var custostarkalcool = alcoolstark * capacidadetanque;
    var custostarkgasolina = gasolinastark * capacidadetanque;

    var alcoolmaisbaratowayne = gasolinawayne * 0.7;
    var melhorcombustivelwayne = alcoolwayne <= alcoolmaisbaratowayne ? "Álcool" : "Gasolina";
    var melhorcombustivelstark = alcoolstark <= alcoolmaisbaratostark ? "Álcool" : "Gasolina";

    var menorcusto = Math.min(custowynealcool, custowaynegasolina, custostarkalcool, custostarkgasolina);
    var postomaisbarato;

    if (menorcusto === custowynealcool) {
        postomaisbarato = `Wayne Oil (Álcool)`;
    } else if (menorcusto === custowaynegasolina) {
        postomaisbarato = `Wayne Oil (Gasolina)`;
    } else if (menorcusto === custostarkalcool) {
        postomaisbarato = `Stark Petrol (Álcool)`;
    } else {
        postomaisbarato = `Stark Petrol (Gasolina)`;
    }

    alert(`Resultados:
        Melhor combustível no Wayne Oil: ${melhorcombustivelwayne}
        Melhor combustível no Stark Petrol: ${melhorcombustivelstark}
        Posto mais barato: ${postomaisbarato} com custo total de R$ ${menorcusto.toFixed(2)}`);
}

function manutencao() {
    var menorValor = null;
    var empresaMenorValor = "";
    var continuar = "S";

    while (continuar.toUpperCase() === "S") {
        var nomeempresa = prompt("Qual o nome da empresa?");
        var valoraparelho = parseFloat(prompt("Qual o valor por aparelho?"));
        var quantidadeaparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
        var desconto = parseFloat(prompt("Qual a porcentagem do desconto?"));
        var quantidademinima = parseInt(prompt("Qual a quantidade mínima para conseguir o desconto?"));

        var valortotal = valoraparelho * quantidadeaparelho;

        var valoraanutencao;
        if (quantidadeaparelho >= quantidademinima) {
            var valordesconto = (valortotal * desconto) / 100;
            valormanutencao = valortotal - valordesconto;
        } else {
            valormanutencao = valortotal;
        }

        alert(`O serviço da ${nomeempresa} custará ${valormanutencao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

        if (menorvalor === null || valormanutencao < menorvalor) {
            menorValor = valorManutencao;
            empresamenorValor = nomeempresa;
        }
        continuar = prompt("Deseja informar novos dados? (S/N)");
    }
    alert(`O orçamento de menor valor é o de ${empresaMenorValor} por ${menorValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}
function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}


usuario()
inicio();