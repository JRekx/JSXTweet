const MAX_NAME_SHOW_LENGTH = 10;

function Person({age, hobbies, name}) {
    const voteText = age >= 18
    ? "You can vote!"
    : "Too young to vote.";

    const hobbiesLIs = hobbies.map(hobby => 
                                    <li>{hobby}</li>);
    
    return (
        <div>
            <p>USER BIO:</p>
            <ul>
                <li> Name: {name.slice(0,MAX_NAME_SHOW_LENGTH)}</li>
                <li> Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesLIs}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}