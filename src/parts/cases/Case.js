import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import QR from 'qrcode.react'
import { v1 as uuidv1 } from 'uuid';
import Template from '../../containers/Template';
import Footer from '../footer/Footer';
import './Case.css';

export class Case extends Component {
    state = {
        latLng: [-12.059290, -77.030060],
        qr: {
            id: '1',
            value: 'Fuckyou!',
            size: 290,
            level: 'H',
            includeMargin: true
        },
        denunce: '',
        place: '',
        type: '',
        firstName: '',
        lastName: '',
        documentNumber: '',
        telephone: '',
        showQr: false,
        showInfo: false
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log("[coords]", position.coords);
                this.setState({
                    latLng: [position.coords.latitude, position.coords.longitude]
                })
            });
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    saveAndExport = () => {
        const data = {
            denunce: this.state.denunce,
            place: this.state.place,
            type: this.state.type,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            documentNumber: this.state.documentNumber,
            telephone: this.state.telephone
        };
        let cpQr = { ...this.state.qr }
        cpQr.id = uuidv1();
        cpQr.value = JSON.stringify(data);
        this.setState({
            qr: cpQr,
            showQr: true
        }, () => {
            const canvas = document.getElementById(cpQr.id);
            const pngUrl = canvas
                .toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = `${cpQr.id}.png`;
            document.getElementById("content_qr").appendChild(downloadLink);
            downloadLink.click();
            document.getElementById("content_qr").removeChild(downloadLink);
        })
    }

    setType = () => {
        // const t = (!this.state.showInfo) ? false : true;
        this.setState({
            showInfo: !this.state.showInfo,
            type: !this.state.showInfo
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div id="content_qr" className={(this.state.showQr) ? 'row text-center' : 'row text-center hide'}>
                                <QR
                                    id={this.state.qr.id}
                                    value={this.state.qr.value}
                                    size={290}
                                    level={"H"}
                                    includeMargin={true}
                                />
                                <p>
                                    <a onClick={this.saveAndExport} href="#/"> Download QR </a>
                                </p>
                                <p>
                                    <h3>Gracias! estaremos revisando tu caso!</h3>
                                </p>
                            </div>
                            <div className={(this.state.showQr) ? 'hide row' : 'row'}>
                                <div className="col s6">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <label htmlFor="denunce">Denuncia:</label>
                                            <textarea onChange={this.onChange} name="denunce" className="materialize-textarea" cols="30" rows="5" value={this.state.denunce}>{this.state.denunce}</textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input onChange={this.onChange} value={this.state.place} name="place" placeholder="Ingrese su dirección" type="text" className="validate" />
                                            <label htmlFor="place">Lugar donde se cometió:</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>
                                            <label>
                                                <input onClick={this.setType} className="with-gap" name="type" type="radio" defaultChecked={true} />
                                                <span>Anonima</span>
                                            </label>
                                            <label>
                                                <input onClick={this.setType} className="with-gap" name="type" type="radio"  />
                                                <span>Con mis datos</span>
                                            </label>
                                        </p>
                                    </div>
                                    {this.state.type ? <>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input onChange={this.onChange} value={this.state.firstName} name="firstName" placeholder="Ingrese sus nombres" type="text" className="validate" />
                                                <label htmlFor="firstName">Nombres:</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input onChange={this.onChange} value={this.state.lastName} name="lastName" placeholder="Ingrese sus apellidos" type="text" className="validate" />
                                                <label htmlFor="lastName">Apellidos:</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input onChange={this.onChange} value={this.state.documentNumber} name="documentNumber" placeholder="Ingrese nro doc" type="text" className="validate" />
                                                <label htmlFor="documentNumber">Ingrese numero de documento:</label>
                                            </div>
                                            <div className="input-field col s6">
                                                <input onChange={this.onChange} value={this.state.telephone} name="telephone" placeholder="Ingrese sus apellidos" type="text" className="validate" />
                                                <label htmlFor="telephone">Telefono:</label>
                                            </div>
                                        </div>
                                    </> : null}

                                    <div className="row">
                                        <div className="input-field">
                                            <button className="btn waves-effect waves-light" type="button" onClick={this.saveAndExport} name="action">Enviar
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <Map
                                        style={{ height: '100vh', width: '100vh' }}
                                        center={this.state.latLng}
                                        zoom={15}
                                    >
                                        <TileLayer
                                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={this.state.latLng} >
                                            <Popup>
                                                Usted está aqui
                                            </Popup>
                                        </Marker>
                                    </Map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default Template(Case);