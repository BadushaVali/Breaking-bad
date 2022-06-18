import Card from "./ReComponent";
import { useState, useEffect } from "react";
import Header from "./Header";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let breakingBadProimse = fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    breakingBadProimse
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        setData(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Header />
      {data.map((item) => {
        return (
          <Card
            char_id={item.char_id}
            birthday={item.birthday}
            img={item.img}
            name={item.name}
            nickname={item.nickname}
          />
        );
      })}
    </div>
  );
}

export default App;
