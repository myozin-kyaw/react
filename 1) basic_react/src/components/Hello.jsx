function printOutMessage() {
    return 'Hey!!!';
}

function Hello({person}) {
    return (
        <div>
            <h1>{person.message} {person.name} and seat numbers are {person.seatNumbers}</h1>
            <div>Print name : {person.name}</div>
            <div>Mathematical Expression : {10 + 40}</div>
            <div>Print with fn call : {printOutMessage()}</div>
        </div>
    );
}

export default Hello;