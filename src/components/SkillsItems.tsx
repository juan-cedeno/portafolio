import { Skill } from "../interfaces/ApiInterfaces"


interface Props {
    items: Skill
}

export const SkillsItems = ({items} : Props) => {

    const {name,image} = items

    return (
        <div className="items_skill">
            <img src={image} alt={name} />
            <p className="name_skill">{name}</p>
        </div>
    )
}
