import React, { Component } from 'react'
import './blyat.css'

class Penginapan extends Component {
    handleClick = () => {
        this.props.pilihPenginapan(this.props.inap)
    }
    render() {
        const judul = `${this.props.inap.nama} - Rp. ${this.props.inap.harga}K`;
        const style = {
            backgroundImage: `url('${this.props.inap.fotoUrl}')`
        }
        return (
            <div className="penginapan" onClick={this.handleClick}>
                <div className="penginapan-foto" style={style}>
                    {" "}
                </div>
                <div className="penginapan-judul">{judul}</div>
            </div>
        )
    }
}

export default Penginapan