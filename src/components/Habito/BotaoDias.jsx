import { DaysButtons, DayButton } from "./Style"
import dias from "./dias"

export default function BotaoDias({diasSelecionados}) {
    return(
        <DaysButtons>
            {dias.map(d => (
                <DayButton 
                    key={d.id} 
                    selecionado={diasSelecionados.includes(d.id)}
                >
                    {d.dia}
                </DayButton>
            ))}
        </DaysButtons>
    )
}