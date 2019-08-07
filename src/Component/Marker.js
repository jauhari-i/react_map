import React, { Component } from 'react'
import './cyka.css'

class Marker extends Component {
    render() 
    {   
        let kelas = "marker"
        if(this.props.dipilih)
            kelas = "dipilih"
        return (
            <div className={kelas}>
               Rp. {this.props.text} rb
            </div>
        )
    }
}

export default Marker
