function esconderLoader() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("container");
    loader.style.display = "none";
    content.style.display = "block";
  }

  // Defina o tempo de atraso em milissegundos (5000 ms = 5 segundos)
  const delayEmMilissegundos = 5000;

  // Agende a execução da função após o tempo de atraso
  setTimeout(esconderLoader, delayEmMilissegundos);