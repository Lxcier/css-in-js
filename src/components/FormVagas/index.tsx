import { FormEvent, useState } from 'react'
import { BtnPesquisar, Campo, Form } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo>
        <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
      </Campo>
    </Form>
  )
}

export default FormVagas
