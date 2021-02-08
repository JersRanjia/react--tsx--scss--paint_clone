import  React from "react";
import Slider from '@material-ui/core/Slider';
import "./Menu.css"

interface MenuProps {

}

function Menu(props : MenuProps) {

    return (
        <nav className="menu">

            <div className="slider-container" >
                <Slider
                    defaultValue={5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={5}
                    max={20}
                />
            </div>

        </nav>
    )

}

export default Menu ;