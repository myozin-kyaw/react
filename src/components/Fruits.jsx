export default function Fruits() {
    const fruits = ['Apple', 'Mango', 'Pineapple', 'Guava', 'Avocado'];
    return (
        <div>
            <ul>
            {fruits.map((fruit) => <li key={fruit}>{fruit}</li>)}
            </ul>
        </div>
    );
}