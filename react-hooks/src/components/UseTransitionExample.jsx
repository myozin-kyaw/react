import { useState, useTransition } from "react"

export default function UseTransitionExample() {
    const [query, setQuery] = useState('');
    const [filterItems, setFilterItems] = useState([]);
    const [isPending, startTransition] = useTransition();
    const items = Array.from({length: 1000}, (_, i) => `Item ${i + 1}`);

    const handleFilter = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            const filtered = items.filter((item) => {
                return item.toLowerCase().includes(value.toLowerCase());
            });
    
            setFilterItems(filtered);
        })
    }

    return (
        <div>
            <h1>useTransition() Example</h1>
            <div>
                <input type="text" onChange={handleFilter} value={query} placeholder="Search items..."/>

                {isPending && <div>Loading...</div>}
                
                <ul>
                    {filterItems.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}