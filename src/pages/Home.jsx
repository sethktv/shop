import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Categories from "../components/Categories"
import ContentBlock from "../components/ContentBlock"
import LoadingBlock from "../components/loadingBlock/LoadingBlock"
import Sorting from "../components/Sorting"
import { fetchContent } from "../redux/actions/content"
import { setCategory, setSortBy } from "../redux/actions/filters"
import addContentToCart from '../redux/actions/cart'

const categoryName = ['Мясо', 'ptic', 'vega', 'mega', 'shmega']
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
]

function Home() {

    const dispatch = useDispatch()
    const items = useSelector(({ content }) => content.items)
    const isLoaded = useSelector(({ content }) => content.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)
    const cartItems = useSelector(({ cart }) => cart.items);

    useEffect(() => {
        dispatch(fetchContent(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddContentToCart = (obj) => {
        dispatch({
            type: 'ADD_CONTENT_CART',
            payload: obj,
        });
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryName}
                />
                <Sorting onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) =>
                        <ContentBlock
                            onClickAddContent={handleAddContentToCart}
                            isLoading={true}
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                            {...obj}
                        />)
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <LoadingBlock key={index} />)
                }

            </div>
        </div>
    )
}

export default Home