import * as React from "react";
import {MouseEvent, useEffect, useRef, useState} from "react";
import {log} from "util";

interface MyCanvasProps {
    strokeColor: string;
    lineWidth: number;
}

interface MyCanvasState {
    xIsNext: boolean;
}

function MyCanvas(props : MyCanvasProps){

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const contextRef = useRef<CanvasRenderingContext2D>()
    const [isDrawing, setIsDrawing] = useState(false)
    const [isInitiating, setIsInitiating] = useState(true)


    useEffect(() => {

        console.log("useEffect")
console.log("ici:" + props.strokeColor)
        const canvas = canvasRef.current ;

        if (!canvas) return ;

        if (isInitiating) {
            canvas.width = window.innerWidth ;
            canvas.height = window.innerHeight;
            canvas.style.border = "solid black 1px";
            // canvas.style.background = "blue" ;
        }


        const context = canvas?.getContext("2d");
        if (context == null) return ;

        // context.lineCap = "round"
        // context.strokeStyle = "black"
        // context.lineWidth = 5 ;
        [context.lineCap, context.strokeStyle, context.lineWidth] = ["round", props.strokeColor, props.lineWidth]
        contextRef.current = context ;

        if (!contextRef.current) alert("erreur useEffect" )

        setIsInitiating(false) ;


    }, [props.lineWidth, props.strokeColor])

    const startDrawing = (e : MouseEvent) => {

        const [offsetX, offsetY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY] ;
        console.log( "start => x:" + offsetX + ", y:" + offsetY);
        if (!contextRef.current) console.log("erreur startDrawing" )
        contextRef.current?.beginPath()
        contextRef.current?.moveTo(offsetX , offsetY)

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

        const [offsetX, offsetY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY] ;
        console.log({offsetX, offsetY});

        contextRef.current?.lineTo(offsetX, offsetY) ;
        contextRef.current?.stroke() ;

    };

    return (
        <div>
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
        </div>

    ) ;

}

export default MyCanvas ;