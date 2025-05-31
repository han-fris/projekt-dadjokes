import { useState, useEffect } from 'react';
import './style.css';
import { Joke } from '../../components/Joke/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const getJokes = async () => {
      const response = await fetch(
        // 'https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json',
        'http://localhost:4000/api/jokes',
      );
      const jsonData = await response.json();
      //setJokes(jsonData); //pokud stahuju data z raw.githubusercontent
      setJokes(jsonData.data); // pokud stahuju data z lokaniho api
    };
    getJokes();
  }, []);

  // console.log(jokes);

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
