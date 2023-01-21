import React from "react";
import "./SectionPrincipal.css";
import ImgIconeInputAddTarefa from "../img/iconeInputAddTarefa.png";
import ImgIconeCheckBox from "../img/iconeCheckBox.png";
import ImgIconeChecked from "../img/iconeChecked.png";
import ImgIconeDeletar from "../img/iconeDeletar.png";
import {useEffect} from "react";

function SectionPrincipal() {

  useEffect(() => {
    let botaoAddTarefa = document.getElementById('botaoAddTarefa');
    let inputAddTarefa = document.getElementById('inputAddTarefa');

    botaoAddTarefa.addEventListener('click', function novaTarefa() {
      const valorInputAddTarefa = inputAddTarefa.value;
      inputAddTarefa.value = '';

      const containerNovaTarefa = document.getElementById('containerNovaTarefa');

      const containerTarefa = document.createElement('div');
      containerTarefa.setAttribute('id', 'containerTarefa');
      containerNovaTarefa.appendChild(containerTarefa);

      const botaoConcluirTarefa = document.createElement('button');
      botaoConcluirTarefa.setAttribute('id', 'botaoConcluirTarefa');
      containerTarefa.appendChild(botaoConcluirTarefa);

      const iconeCheckBox = document.createElement('img');
      iconeCheckBox.setAttribute('id', 'iconeCheckBox');
      iconeCheckBox.src = ImgIconeCheckBox;
      botaoConcluirTarefa.appendChild(iconeCheckBox);

      const labelNovaTarefa = document.createElement('label');
      labelNovaTarefa.setAttribute('id', 'labelNovaTarefa');
      labelNovaTarefa.innerHTML = valorInputAddTarefa;
      containerTarefa.appendChild(labelNovaTarefa);

      labelNovaTarefa.addEventListener('click', function() {
        iconeCheckBox.src = ImgIconeChecked;
        labelNovaTarefa.style.textDecoration = 'line-through';
      });

      botaoConcluirTarefa.addEventListener('click', function concluirTarefa() {
        iconeCheckBox.src = ImgIconeChecked;
        labelNovaTarefa.style.textDecoration = 'line-through';
      });

      const botaoDeletarTarefa = document.createElement('button');
      botaoDeletarTarefa.setAttribute('id', 'botaoDeletarTarefa');
      containerTarefa.appendChild(botaoDeletarTarefa);

      const iconeBotaoDeletarTarefa = document.createElement('img');
      iconeBotaoDeletarTarefa.setAttribute('id', 'iconeBotaoDeletarTarefa');
      iconeBotaoDeletarTarefa.src = ImgIconeDeletar;
      botaoDeletarTarefa.appendChild(iconeBotaoDeletarTarefa);

      botaoDeletarTarefa.addEventListener('click', function() {
        containerNovaTarefa.removeChild(containerTarefa);
      });
    });

    inputAddTarefa.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        botaoAddTarefa.click()
      };
    });
  });

  return (
    <div id="sectionPrincipal">
        <div className="containerInputAddTarefa">
            <button id="botaoAddTarefa"><img className="iconeInputAddTarefa" src={ImgIconeInputAddTarefa}></img></button>
            <input id="inputAddTarefa" type="text" placeholder="Add Tarefa"/>
        </div>

        <div id="containerNovaTarefa"></div>
    </div>
  );
}

export default SectionPrincipal;