import { useCategories } from "../hooks/use-category"

export function CategoryNav() {

    const { data: categories = [] } = useCategories()

    return(
        <nav className="w-full">
            <ul className="overflow-hidden rounded-2xl border border-border/70 bg-transparent">
                {categories.map((category) => ())}
            </ul>
        </nav>
    )
}