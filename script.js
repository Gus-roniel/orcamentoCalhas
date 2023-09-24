const select = document.querySelector("#servico");
let selectIndice = select.selectedIndex;
console.log(selectIndice);
let selectText = select.options[selectIndice].text;
console.log(selectText);

let metragem = document.getElementById("metragem");
console.log(metragem);

const valueMetragem = metragem.value;

let algerosa = [];
let calha = [];
let capamuro = [];

function selectService() {
  let selectIndice = select.selectedIndex;
  let selectText = select.options[selectIndice].text;
  const valueMetragem = metragem.value;

  console.log(selectText);

  if (selectText == "calha") {
    calha.push(Number(valueMetragem));
  } else if (selectText == "capamuro") {
    capamuro.push(Number(valueMetragem));
  } else {
    algerosa.push(Number(valueMetragem));
  }

  console.log(calha);
  console.log(algerosa);
  console.log(capamuro);

  let somaCalha = 0;
  for (let i = 0; i < calha.length; i++) {
    somaCalha += (calha[i])*80;
  }
  console.log(somaCalha);

  let somaAlgerosa = 0;
  for (let i = 0; i < algerosa.length; i++) {
    somaAlgerosa += (algerosa[i])*40;
  }
  console.log(somaAlgerosa);

  let somaCapamuro = 0;
  for (let i = 0; i < capamuro.length; i++) {
    somaCapamuro += (capamuro[i])*40;
  }
  console.log(somaCapamuro);

  document.getElementById("calha").innerHTML = calha;
  document.getElementById("algerosa").innerHTML = algerosa;
  document.getElementById("capamuro").innerHTML = capamuro;

  document.getElementById("totalCalha").innerHTML = 'Valor Total: R$ ' +somaCalha;
  document.getElementById("totalAlgerosa").innerHTML = 'Valor Total: R$ ' +somaAlgerosa;
  document.getElementById("totalCapamuro").innerHTML = 'Valor Total: R$ ' + somaCapamuro;

  document.getElementById("valorTotal").innerHTML = 'Valor Total: R$ ' + (somaCapamuro+somaCalha+somaAlgerosa);


}
