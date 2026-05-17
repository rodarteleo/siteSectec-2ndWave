/* ==========================================================================
   script.js - Controle de Interatividade e Validação do Formulário
   Objetivo: Capturar os dados digitados pelo usuário, validar as regras de
   negócio e simular o envio sem recarregar a página (comportamento SPA).
   ========================================================================== */

// PASSO 1: Localizar os elementos na Árvore do DOM que precisamos monitorar ou ler.
// "Pegamos as caixas" do HTML usando seletores de classe ou tag.
const formulario = document.querySelector(".contato_formulario");
const campoNome = document.querySelector("#form_nome");
const campoEmail = document.querySelector("#form_email");
const campoMensagem = document.querySelector("#form_mensagem");

// PASSO 2: Adicionar um "escutador de eventos" (Event Listener) no formulário.
// Ele fica de prontidão esperando o usuário disparar o gatilho de envio ('submit').
formulario.addEventListener("submit", function (event) {
  
  /* event.preventDefault(): Comando vital no desenvolvimento moderno.
     Por padrão, o navegador tenta recarregar a página ou navegar para outra URL ao dar submit.
     Esse método diz: "Pare! O JavaScript vai assumir o controle do envio a partir de agora". */
  event.preventDefault();

  // PASSO 3: Extrair e limpar os valores textuais digitados pelo usuário.
  /* .value extrai o conteúdo string de dentro do input.
     .trim() é uma função de higienização de string; ela remove espaços em branco 
     inúteis que o usuário possa ter digitado por engano no início ou no fim. */
  const nomeDigitado = campoNome.value.trim();
  const emailDigitado = campoEmail.value.trim();
  const mensagemDigitada = campoMensagem.value.trim();

  // PASSO 4: Validação Lógica Avançada (Regra de Negócio)
  // O HTML valida se está vazio (required), mas o JS pode validar consistência.
  if (nomeDigitado.length < 3) {
    alert("Por favor, insira um nome válido com pelo menos 3 caracteres.");
    campoNome.focus(); // Coloca o cursor piscando de volta no campo com erro
    return; // Interrompe a execução da função imediatamente
  }

  // PASSO 5: Simulação de Processamento com Visão Sistêmica
  // Aqui os dados seriam empacotados para envio a uma API Back-End (via fetch ou axios).
  console.log("=== PAYLOAD DE ENVIO COMPILADO ===");
  console.log("Destino da API: /api/agendamentos");
  console.log("Dados Estruturados:", {
    nome: nomeDigitado,
    email: emailDigitado,
    mensagem: mensagemDigitada,
    enviadoEm: new Date().toISOString() // Registra o carimbo de data/hora do envio
  });

  // PASSO 6: Feedback Visual para o Usuário (UX)
  alert(`Obrigado, ${nomeDigitado}! Sua mensagem foi capturada e enviada para a AuraPet com sucesso.`);

  // PASSO 7: Limpeza do Ambiente
  formulario.reset(); // Reseta todos os campos do formulário de forma limpa
});