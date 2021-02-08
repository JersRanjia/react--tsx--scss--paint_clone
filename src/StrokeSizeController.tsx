import React from "react";
// @ts-ignore
import ReactColorPicker from '@super-effective/react-color-picker';
import {log} from "util";

interface StrokeSizeControllerState {
    color:any
}

interface StrokeSizeControllerProps {
}

export class StrokeSizeController extends React.Component<StrokeSizeControllerProps, StrokeSizeControllerState>{


    constructor(props : StrokeSizeControllerProps) {
        super(props) ;

        this.state = {
            color: "#010000"
        }

    }

    private onColorChange = (color:any) => {

        console.log(typeof(color));
        // this.setState({
        //     color: color
        // })

    }

    render() {

        return (
            <ReactColorPicker
                color={this.state.color}
                onChange={this.onColorChange}
                showSwatch={true}
            />
        )


    }


}
