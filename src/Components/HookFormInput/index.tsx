import { Controller } from "react-hook-form";
import Input, { InputPropss } from "../Input/Input";
import { Container } from "./styles";

type Props = InputPropss & {
    id: string
    control: any
    error? : string
}

export function HookFormInput({id,control,error , ...rest}: Props) {

    return (
            <Container>
                <Controller control={control} defaultValue="" name={id} render={({field: {onChange, value}}) => (
                    <Input {...rest} onChange={onChange} value={value} id={id}/>
                )}/>
                {error && <p>{error}</p>}

            </Container>
    )
}