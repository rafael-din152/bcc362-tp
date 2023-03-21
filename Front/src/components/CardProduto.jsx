import React, { useState } from "react";
import api from "../services/api";

export default function CardProduto({produto}){

    const comprarProduto = async (e) => {
        await api.patch(`/produtos/${produto.id}/${produto.quantidade - 1}`).then((response) => console.log(response)).catch((err) => console.error(err))
        alert(`Produto ${produto.nome} comprado com sucesso!`)
        e.preventDefault()
    }

    return (
        <div className="produtoContainer">
            <p className="produtoNome">{produto.nome}</p>
            <p className="qtdeEstoque">Quantidade em estoque: {produto.quantidade}</p>
            <p className="produtoValor">R${produto.valor}</p>
            <button className="produtoComprar" onClick={(e) => comprarProduto(e)}>Comprar</button>
        </div>
    )
}