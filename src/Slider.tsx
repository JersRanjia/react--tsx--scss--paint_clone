import React, { Component, MouseEvent } from "react";
import "./Slider.scss"

interface SliderProps {

    onSlide?: (valMin:number, valMax:number) => number

}

interface SliderState {

    circleX:number ;

}


export class Slider extends React.Component<SliderProps, SliderState>{

    isMoving = false ;
    private initX: number = 0 ;

    constructor(props: SliderProps) {

        super(props)

        this.state = {
            circleX : 10
        }

    }



    private startMoving = (e : MouseEvent) => {

        this.isMoving = true
        this.initX = e.clientX

    }

    private stopMoving = (e : MouseEvent) => {

        this.isMoving = false

    }

    private move = (e : MouseEvent) => {

        if (!this.isMoving) return;

        const mouseX = e.clientX ;
        const moveX = mouseX - this.initX  ;

        this.initX = mouseX ;

        const new_circleX = this.state.circleX + moveX ;

        const VAL_MIN = 10, VAL_MAX = 180 ;

        if (new_circleX < VAL_MIN || new_circleX > VAL_MAX) return ;

        if (this.props.onSlide)
            this.props.onSlide(VAL_MIN, VAL_MAX)

        this.setState(
            prevState => ({
                circleX: prevState.circleX + moveX
            })
        )

    }



    render() {
        return(

            <div className="slider-container">

                <div className="slider-line"/>

                <button className="slider-circle"
                        type="button"
                        onMouseDown={this.startMoving}
                        onMouseUp={this.stopMoving}
                        onMouseMove={this.move}
                        style={{left: this.state.circleX}}
                        >

                </button>

            </div>

        )
    }
}

// function Slider(props : SliderProps) {
//
//
//
//     const startMoving = (e : MouseEvent) => {
//
//
//
//     }
//
//     const stopMoving = (e : MouseEvent) => {
//
//
//
//     }
//
//     const move = (e : MouseEvent) => {
//
//
//
//     }
//
//     return(
//
//         <div className="slider-container">
//
//             <button className="slider-circle"
//                     type="button"
//                     onClick={startMoving}
//                     >
//
//             </button>
//
//         </div>
//
//     )
//
// }