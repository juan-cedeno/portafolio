import '../css/title.css'

interface Props {
    title: string
}
export const Title = ({title}: Props) => {
    return (
        <div className="container_title">
            <h2>{title}</h2>
        </div>
    )
}
