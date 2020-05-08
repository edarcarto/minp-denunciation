import  React ,{ Component } from 'react';
import Template from '../../containers/Template';
import Layer from './layer/Layer';
import Information from './information/Information';
import Qr from './qr/Qr';
import Footer from '../footer/Footer';

class Home extends Component {
    render(){
        return(
            <>
                <Layer />
                <Information />
                <Qr />
                <Footer />
            </>
        )
    }
}
export default Template(Home);