import React, { useState, useEffect } from 'react'
import CardProduto from './components/CardProduto'
import api from './services/api'
import './App.css'

function App() {

  const [produtos, setProdutos] = useState([])

  const [nomeProduto, setNomeProduto] = useState("")
  const [descricaoProduto, setDescricaoProduto] = useState("")
  const [valorProduto, setValorProduto] = useState("")
  const [qtdProduto, setQtdProduto] = useState(0)

  useEffect(() => {
    getProdutos()
  }, [])

  const getProdutos = () => {
    api.get("/produtos").then((response) => setProdutos(response.data["produtos"])).catch((err) => console.error(err))
  }

  const cadastrarProduto = (e) => {
    api.post("/produtos", {
      nome: nomeProduto,
      descricao: descricaoProduto,
      valor: valorProduto,
      quantidade: qtdProduto
    })
    e.preventDefault()
    setNomeProduto("")
    setDescricaoProduto("")
    setValorProduto("")
    setQtdProduto(0)
  }
  
  return (
    <div className="App">
      <div className="cadastroProdutosContainer">
        <h3>Novo Produto</h3>
        <form className="cadastroProduto" onSubmit={(e) => cadastrarProduto(e)}>
          <label>
            Nome:
            <input type="text" value={nomeProduto} onChange={e => setNomeProduto(e.target.value)}/>
          </label>
          <label>
            Descrição do produto:
            <input type="text" value={descricaoProduto} onChange={e => setDescricaoProduto(e.target.value)}/>
          </label>
          <label>
            Valor:
            <input type="text" value={valorProduto} onChange={e => setValorProduto(e.target.value)}/>
          </label>
          <label>
            Quantidade em estoque:
            <input type="number" value={qtdProduto} onChange={e => setQtdProduto(e.target.value)}/>
          </label>
          <input className="buttonSubmit" type="submit" value="Cadastrar"/>
        </form>
      </div>
      <div className="produtosContainer">
        <div className="listProdutos">
          {
            produtos.map((produto, index) => (
              <CardProduto key={index} produto={produto}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
