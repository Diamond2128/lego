import { mergeProps } from "@vue/runtime-core"

interface HelloProps {
    msg: string;
}
const Hello = (props: HelloProps) => {
    return (
        <h1>{ props.msg }</h1>
    )
}

Hello.props = ['msg']
export default Hello