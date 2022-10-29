
import { useState } from 'react'
import items from './data'
import Menu from './menu'
import Categories from './categories'

const allCategories = ['all', ...new Set(items.map((item)=> item.category))]

const App = ()=>{
    const[menuItems, setMenuItems]  = useState(items)
    const[categories, setCategories] = useState(allCategories)
    // console.log(menuItems)

    const filterItems = (category) => {
        if (category === 'all') {
          setMenuItems(items);
          return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
      };

    return(
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline">
                    </div>
                </div>
                <Categories categories={categories} filterItems ={filterItems}/>
            </section>
            <Menu items={menuItems} />
        </main>
    )
}
export default App
