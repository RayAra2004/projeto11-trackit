import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import calendar from "dayjs/plugin/calendar";

dayjs.extend(calendar);
    
const data =
        dayjs().calendar(dayjs("2019-09-21"), {
          sameDay: "[Hoje às] h:m",
          nextDay: "[Amanhã]",
          nextWeek: "dddd",
          lastDay: "[Ontem]",
          lastWeek: "[Último] dddd",
          sameElse: "DD/MM"
        });

const dia =
        dayjs()
            .locale("pt-br")
            .format("dddd");
        
export const dataFinal = `${dia.substring(0,1).toUpperCase()}${dia.substring(1)}, ${data}`;