import React, { useState } from 'react';
import carros from './carros.json';
import './App.css';

export default function App() {
  const [indice, setIndice] = useState(0)
  const [imagem, setImagem] = useState(0)
  const carro = carros[indice]
  const setaEsquerda = "<"
  const setaDireita = ">"

  function voltar() {
    if (indice > 0) {
      setIndice(indice - 1)
    } else {
      setIndice(carros.length - 1)
    }
  }

  function avancar() {
    if (indice < carros.length - 1) {
      setIndice(indice + 1)
    } else {
      setIndice(0)
    }
  }

  function voltarImagem() {
    if (imagem  > 0){
      setImagem(imagem - 1)
    } else {
      setImagem(carro.imagens.length - 1)
    }
  }

  function avancarImagem() {
    if (imagem < carro.imagens.length - 1){
      setImagem(imagem + 1)
    } else {
      setImagem(0)
    }
  }

  return (
    <main className="App">
      <div className='filho'>
        <div>
          <h1>Carros</h1>
          <div className="infos">
            <h2>Modelo: <strong>{carro.nome}</strong></h2>
          </div>
          <div className="infos">
            <h2>Marca: <strong>{carro.marca}</strong></h2>
          </div>
          <div className="infos">
            <h2>Categoria: <strong>{carro.categoria}</strong></h2>
          </div>
        </div>
        <div className="passoId">
          <button 
          className="passo" 
          onClick={voltar}>Carro Anterior</button>
          <button 
          className="passo" 
          onClick={avancar}>Proximo Carro</button>
        </div>
        <div className="bla">
          <h3>Ver outro {carro.nome}</h3>
          <div className="passoCarroceu">
            <button className="passoCeu" onClick={voltarImagem}> {setaEsquerda} </button>
            <button className="passoCeu" onClick={avancarImagem}> {setaDireita}</button>
          </div>
        </div>
      </div>
      <div className="filho">
        <div className="botoes">
          <div className="carroceu">
            <img src={carro.imagens[imagem]} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}