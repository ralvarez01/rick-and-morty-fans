import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const Home: React.FC = () => {
  const { addFavorite, isLoggedIn } = useAppContext();
  const [characters, setCharacters] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => {
        setCharacters(prevCharacters => [...prevCharacters, ...response.data.results]);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleAddFavorite = (character: any) => {
    if (isLoggedIn) {
      addFavorite(character);
    } else {
      // Aqui vamos a redireccionar a inicio de sesión uff!!!
    }
  };

  // Función para dividir el array de personajes en grupos de 5 en pantalla
  const chunkArray = (arr: any[], chunkSize: number) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const groupedCharacters = chunkArray(characters, 5); // Divide el array de personajes en grupos de 5

  return (
    <Container>
      <h1>Personajes</h1>
      {groupedCharacters.map((group, index) => (
        <Row key={index} xs={1} md={5} style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
          {group.map(character => (
            <Col key={character.id} xs={12} sm={6} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={character.image} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{character.name}</Card.Title>
                  <Card.Text>Status: {character.status}</Card.Text>
                  {isLoggedIn && (
                    <Button variant="primary" onClick={() => handleAddFavorite(character)}>
                      Agregar a Favoritos
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
      <Button onClick={loadMore}>Cargar más</Button>
    </Container>
  );
};

export default Home;




