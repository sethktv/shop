import { memo } from "react"


const Categories = memo(function Categories({ activeCategory, items, onClickCategory }) {


    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {items && items.map((name, index) => (
                    <li
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => onClickCategory(index)} key={name}>
                        {name}
                    </li>
                )
                )}
            </ul>
        </div>
    )
}
)
export default Categories