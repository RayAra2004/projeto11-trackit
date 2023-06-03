import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { SCMenu, SCProgressBar, SCPRotas } from "../style/MenuStyle";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <SCMenu data-test="menu">
            <Link data-test="habit-link" to={'/habitos'}>
                <SCPRotas left={'20px'}>Hábitos</SCPRotas>
            </Link>
            <Link data-test="today-link" to={'/hoje'}>
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
            </Link>
            <Link data-test="history-link" to={'/historico'}>
                <SCPRotas left={'270px'}>Histórico</SCPRotas>
            </Link>
        </SCMenu>
    );
}