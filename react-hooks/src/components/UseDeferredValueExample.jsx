import { useDeferredValue, useState, useTransition } from "react"

export default function UseDeferredValueExample() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    const items = Array.from({length: 1000}, (_, i) => `Item ${i + 1}`);

    const filterItems = items.filter((item) => {
        return item.toLowerCase().includes(deferredQuery.toLowerCase());
    });

    return (
        <div>
            <h1>UseDeferredValueExample() Example</h1>
            <div>
                <input type="text" onChange={(e) => setQuery(e.target.value)} value={deferredQuery} placeholder="Search items..."/>

                {query !== deferredQuery && <div>Loading...</div>}
                
                <ul>
                    {filterItems.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}