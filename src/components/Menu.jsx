import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SCMenu, SCProgressBar, SCPRotas } from "../style/MenuStyle";

export default function Menu(){
    return(
        <SCMenu>
            <SCPRotas left={'20px'}>Hábitos</SCPRotas>
            <SCProgressBar>
                <CircularProgressbar value={10} text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor:"#52B6FF",
                        textColor: "#FFFFFF",
                        trailColor: "transparent",
                        pathColor: "#FFFFFF"
                        })} 
                />
            </SCProgressBar>
            <SCPRotas left={'270px'}>Histórico</SCPRotas>
        </SCMenu>
    );
}