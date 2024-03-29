import Link from "next/link"
import style from "./habitCategorySelector.module.css"

export interface HabitCategorySelectorProps {

    habits: Record<string, string[]>
}
export default function HabitCategorySelector({ habits }: HabitCategorySelectorProps) {

    return <div className={style["habitCategorySelector"]}>

        {Object.entries(habits).map(([habitCategory, habits], idx) => {

            return <Link href={`/habits/${habitCategory}`} key={idx}>
                <div className={style["card"]}>
                    {habitCategory}
                </div>
            </Link>
        })}
    </div>
}