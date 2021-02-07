import * as React from "react";
import {MouseEvent, useEffect, useRef, useState} from "react";
import {log} from "util";

interface MyCanvasProps {
    strokeColor: String;
    lineWidth: number;
}

interface MyCanvasState {
    xIsNext: boolean;
}
//
// export class MyCanvas extends React.Component{
//
//     // canvas = useRef(null)
//     width = 500
//     height = 500
//
//
//     constructor(props : MyCanvasProps) {
//         super(props) ;
//
//     }
//
//     public getCanvas = () => {
//
//         const canvasRef: React.MutableRefObject<CanvasRenderingContext2D> = useRef<CanvasRenderingContext2D>(null)
//         return canvasRef.current ;
//
//     }
//
//     private startDrawing = () => {
//
//         alert("kaiza")
//
//     };
//
//     private finishDrawing = () => {
//
//
//
//     };
//
//     private draw = () => {
//
//
//
//     };
//
//
//     render(): React.ReactNode {
//
//         return (
//             <canvas
//                 onMouseDown={this.startDrawing}
//                 onMouseUp={this.finishDrawing}
//                 onMouseMove={this.draw}
//                 width={this.width}
//                 height={this.height}
//             />
//         ) ;
//
//     }
// }

function MyCanvas(props : MyCanvasProps){

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const contextRef = useRef<CanvasRenderingContext2D>()
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current ;

        if (!canvas) return ;

        canvas.width = window.innerWidth ;
        canvas.height = window.innerHeight;
        canvas.style.border = "solid black 1px";
        // canvas.style.background = "blue" ;

        const context = canvas?.getContext("2d");
        if (context == null) return ;

        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 5 ;


        contextRef.current = context ;
        if (!contextRef.current) alert("erreur useEffect" )

    }, [])

    const startDrawing = (e : MouseEvent) => {

        const [offsetX, offsetY] = [e.clientX, e.clientY] ;
        console.log( "start => x:" + offsetX + ", y:" + offsetY);
        if (!contextRef.current) console.log("erreur startDrawing" )
        contextRef.current?.beginPath()
        contextRef.current?.moveTo(offsetX, offsetY)

        setIsDrawing(true)

    };

    const finishDrawing = () => {

        if (!contextRef.current) console.log("erreur finishDrawing")
        contextRef.current?.closePath()
        setIsDrawing(false)

    };

    const draw = (e: MouseEvent) => {

        if(!isDrawing) return ;
        console.log("drawing")

        const [offsetX, offsetY] = [e.pageX, e.pageY] ;
        console.log({offsetX, offsetY});

        contextRef.current?.lineTo(offsetX, offsetY) ;
        contextRef.current?.stroke() ;

    };

    return (
        <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
        />
    ) ;

}

export default MyCanvas ;