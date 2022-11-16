import React from "react";
import product from "../../data/products";
import "./ProductTable.css"

export default (props) => {

    function getLines(){

        return product.map((product, i) => {
            return (
                <tr key={product.id} className={i % 2 === 0 ? 'Even' : 'Odd'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })

    }

    return (
        <div className="ProductTable">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>     
                </thead>
                <tbody>
                    {getLines()}
                </tbody>
            </table>
        </div>
    )
}