import Card from './component/Card';
import Header from './component/Header';
import Drawer from './component/Drawer';

const arr = [
  { title:"Мужские Кроссовки Nike Blazer Mid Suede",
    price: "7999",
    imageUrl: "/img/Sneakers/image1.png"
  },
  { title:"Мужские Кроссовки Nike Air Max 270",
    price: "12999",
    imageUrl: "/img/Sneakers/image2.png"
  },
  { title:"Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12999",
    imageUrl: "/img/Sneakers/image3.png"
  },
  { title:"Кроссовки Puma X Aka Boku Future Rider",
    price: "12999",
    imageUrl: "/img/Sneakers/image4.png"
  },
  { title:"Мужские Кроссовки Under Armour Curry 8",
    price: "15199",
    imageUrl: "/img/Sneakers/image5.png"
  },
  { title:"Мужские Кроссовки Nike Kyrie 7",
    price: "11299",
    imageUrl: "/img/Sneakers/image6.png"
  },
  { title:"Мужские Кроссовки Jordan Air Jordan 11",
    price: "10799",
    imageUrl: "/img/Sneakers/image7.png"
  },
  { title:"Мужские Кроссовки Nike LeBron XVIII",
    price: "16499",
    imageUrl: "/img/Sneakers/image8.png"
  },
  { title:"Мужские Кроссовки Nike Lebron XVIII Low",
    price: "13499",
    imageUrl: "/img/Sneakers/image9.png"
  },
  { title:"Мужские Кроссовки Nike Blazer Mid Suede",
    price: "8499",
    imageUrl: "/img/Sneakers/image10.png"
  },
  { title:"Кроссовки Puma X Aka Boku Future Rider",
    price: "8999",
    imageUrl: "/img/Sneakers/image11.png"
  },
  { title:"Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: "11299",
    imageUrl: "/img/Sneakers/image12.png"
  },
]

function App() {
  return (
    <div className="wrapper pb-10">
      {/*DRAWER*/}
      <Drawer />
      {/*END DRAWER*/}
      {/*HEADER*/}
      <Header />
      {/*END HEADER*/}
      {/*CONTAINER*/}
      <div className="container mx-auto mt-9 sm:container sm:mx-auto md:container md:mx-auto lg:px-14">
        <div className="flex justify-between items-center searchAndTittle">
          <h1 className="md:ml-5 font-bold text-3xl leading-7 uppercase">Все Кроссовки</h1>
          <div className="search-block flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" className="text-base" placeholder="Поиск..." />
          </div>
        </div>
        <div className="mt-9 xs_card_grid grid gap-10 sm:gap-5 sm:justify-items-center sm:grid-cols-2 md:gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/*CARD*/}
        {arr.map((obj) =>(
          <Card 
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            />
        ))}
        {/*END CARD*/}
        </div>
      </div>
      {/*END CONTAINER*/}
    </div>
  );
}

export default App;
