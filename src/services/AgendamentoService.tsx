
interface AgendamentoProps {
    name: string, 
    email: string, 
    cellphone: string,
    scheduled_hour: string,
}

export const AgendamentoService = (props: AgendamentoProps) => {
    const dados = props

    const url = "https://arenacross.herokuapp.com/schedules/create"

    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(dados)
    })
}