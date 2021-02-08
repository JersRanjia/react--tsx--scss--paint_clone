import React, {ChangeEvent, Component} from "react";
import Slider from '@material-ui/core/Slider';
import "./Menu.css"
import ColorPicker from "react-pick-color";

interface MenuProps {

    afterSliderChangeValue?: ((newValue: number) => void ) ;
    afterColorChangeValue?: ((newValue: string) => void ) ;

}

interface MenuState {

    sliderValue: number
    colorValue: string
    isEraser:boolean

}

class Menu extends Component<MenuProps, MenuState> {

    constructor(props : MenuProps) {
        super(props) ;

        this.state = {
            sliderValue:5,
            colorValue:"#000000",
            isEraser:false
        }

    }

    private handleSliderChange = (event:any, newValue:any) => {

        const new_value = parseInt(newValue)

        this.setState({
            sliderValue:new_value
        })

        if (this.props.afterSliderChangeValue)
            this.props.afterSliderChangeValue(new_value) ;

    };

    private handleColorChange = (color: { hex: string, rgb: object, hsl: object, alpha: number }) => {

        const new_value = color.hex ;
        console.log(new_value) ;
        this.setState({
            colorValue:new_value
        })

        if (this.props.afterColorChangeValue)
            this.props.afterColorChangeValue(new_value) ;

    };

    render() {

        return (
            <nav className="menu">

                <h1>Taille du pinceau</h1>
                <div className="slider-container">

                    <Slider
                        defaultValue={this.state.sliderValue}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        min={5}
                        max={20}
                        onChange={this.handleSliderChange}

                    />

                    <input type="text" className="tfd-slider-value" value={this.state.sliderValue} readOnly/>

                </div>

                <h1>Couleur du pinceau</h1>
                <div className="colorpicker-container" >
                    <ColorPicker
                        color="#000000"
                        onChange={this.handleColorChange}
                    />
                </div>

            </nav>
        )
    }
}

export default Menu ;