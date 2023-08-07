import { data } from "./data/data";

function App() {
  const renderedCard = data.map((car,index) => {
    const isFirstCard = index === 0;
    const isLastCard = index === data.length - 1;

    const cardStyle = `${car.bgColor} w-[350px] h-[500px] md:w-[300px] 
    flex flex-col items-start justify-evenly 
    px-[50px] md:px-[37px] text-white 
    ${isFirstCard ? "rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none" : ""} 
    ${isLastCard ? "rounded-b-xl md:rounded-bl-none md:rounded-tr-xl " : ""}`;

    return (
      <div key={index} className={cardStyle}>
        <img src={car.img} alt={car.title + " icon"} />
        <h1 className="font-big-shoulders text-4xl">{car.title}</h1>
        <p className="font-lexend-deca text-md">{car.content}</p>
        <button className={`py-3 px-8 ${car.textColor} rounded-full bg-white font-bold hover:bg-transparent hover:text-white hover:border-2 hover:border-white`}>Learn More</button>
      </div>
    )
  })

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="h-11/12 my-20 md:my-0 flex flex-col justify-center items-center md:flex-row">
        {renderedCard}
      </div>
        
    </div>
  )
}

export default App;
