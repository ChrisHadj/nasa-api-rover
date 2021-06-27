import React, {useEffect, useState} from 'react';
import styled from 'styled-components'


const Image = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.latest_photos);
                console.log(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    let itemsToRender;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        itemsToRender = items.map(item => {
            return (
                <Container>
                    <List key={item.id}>
                        <div>"{item.camera.full_name}"</div>
                        <div>Rover {item.rover.name}, Status: {item.rover.status}</div>
                        <div>Earth Date: {item.earth_date}</div>
                        <img src={item.img_src} />
                        
                    </List>
                </Container>
            )
        })
    }
    return <div>{itemsToRender}</div>
}

export default Image; 

const List = styled.li``;

const Container = styled.ul`
    list-style: none;
`;