import * as React from "react";
import Menu from "./Menu" ;
import MyCanvas from "./MyCanvas";
import "./Main.css"

interface MainProp {

}

interface MainState {

    strokeColor:string
    strokeWidth: number

}


export class Main extends React.Component<MainProp, MainState> {

    constructor(props: MainProp) {
        super(props) ;

        this.state = {
            strokeColor:"black",
            strokeWidth:5
        }

    }

    private afterSliderChangeValue = (newValue:number) => {

        this.setState({

            strokeWidth:newValue

        });

    };

    private afterColorChangeValue = (newValue:string) => {

        this.setState({

            strokeColor:newValue

        });

    };

    componentDidMount(): void {
    }

    render(): React.ReactNode {
        return (

            <main>
                <Menu
                    afterSliderChangeValue={this.afterSliderChangeValue}
                    afterColorChangeValue={this.afterColorChangeValue}
                />
                <MyCanvas strokeColor={this.state.strokeColor} lineWidth={this.state.strokeWidth}/>
            </main>

        ) ;
    }
}