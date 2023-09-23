import React, { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { show_alerta } from "../function"

export function ShowProducts(){
        const url = 'http://api-products.run'
        const [products, setProducts] = useState([])
        const [id, setId] = useState("")
        const [name, setName] = useState("")
        const [description, setDescription] = useState("")
        const [price, setPrice] = useState("")
        const [operation, setOperation] = useState("")
        const [title, setTitle] = useState("")

        useEffect(() => {
            getProducts()
        }, [])

        const getProducts = async () => {
            const respuesta = await axios.get(url)
            setProducts(respuesta.data)
        }

    return(
        <div className="App">
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-4 offset-4">
                        <d-grid className="mx-auto">
                            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modalProducts">
                                <i className="fa-solid fa-circle-plus"></i> Añadir
                            </button>
                        </d-grid>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className=" col-12 col-lg-8 offset-0 offset-lg-12">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr><th>#</th> <th>PRODUCTO</th> <th>DESCRIPTION</th> <th>PRECIO</th> <th></th></tr>
                                </thead> 
                                <tbody className="table-group-divider">
                                    {products.map((product, id) =>(
                                        <tr key={product.id}>
                                            <td>{(i+1)}</td>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>${new Intl.NumberFormat("es-mx").format(product.price)}</td>
                                            <td>
                                                <button className="btn btn-warning">
                                                    <i className="fa-solid fa-edit"></i>
                                                </button>
                                            </td>
                                            &nbsp;
                                            <td>
                                                <button className="btn btn-danger">
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modalProducts" className="modal fade" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="" className="h5">{title}</label>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" id="id" />
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-gift"></i></span>
                                <input type="text" id="nombre" className="form-control" placeholder="Nombre" value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                                <input type="text" id="descripcion" className="form-control" placeholder="descripcion" value={description}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
                                <input type="text" id="precio" className="form-control" placeholder="precio" value={price}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="d-grid col-6 mx-auto">
                                <button className="btn btn-success">
                                    <i className="fa-solid fa-floppy-disk" ></i> Guardar
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss='modal'>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}