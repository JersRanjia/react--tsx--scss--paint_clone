import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyCanvas from "./MyCanvas";
// import {Slider} from "./Slider";
// import {StrokeSizeController} from "./StrokeSizeController";
// import ReactSlider from "react-slider";
// import Slider from '@material-ui/core/Slider';
// import Typography from "@material-ui/core/Typography/Typography";
// import { ColorPicker } from 'material-ui-color';
import ColorPicker from "react-pick-color";
import {Main} from "./Main"; // nicenice

// const Poins = () => {
//     const [color, setColor] = useState("#fff");
//
//     return (
//         <ColorPicker
//             color={color}
//             onChange={(color) => {
//                 setColor(color.hex) ;
//                 console.log(color.hex) ;
//             }}
//         />
//     );
// };

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
