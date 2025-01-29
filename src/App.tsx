import { Fragment ,ReactElement } from "react";
import "./App.css"

const pizzaData = [
{
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/focaccia.jpg",
    soldOut: false,
},
{
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/margherita.jpg",
    soldOut: false,
},
{
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/spinaci.jpg",
    soldOut: false,
},
{
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/funghi.jpg",
    soldOut: false,
},
{
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/salamino.jpg",
    soldOut: true,
},
{
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/prosciutto.jpg",
    soldOut: false,
},
];

function App() {
    return (
        <>
    <Header />
    <Menus />
    <Footer />
        </>
    )
}
function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}
function Menus() {
    // const pizzaData : [] = [];
    const numPizza : number = pizzaData.length;
    
    return (
        <div className='container'>
            <div className="menu">
                <h2>OUR MENU</h2>
                {numPizza > 0 ? (
                    <Fragment key={"go"}>
                        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
                        <ul className='pizzas'>
                        {pizzaData.map((pizza) => (
                            <Pizza
                            className={`pizza ${pizza.soldOut && "sold-out"}`}
                            name={pizza.name}
                            ingredients={pizza.ingredients}
                            price={pizza.price}
                            photoName={pizza.photoName}
                            soldOut={pizza.soldOut}
                            />
                        ))}
                        </ul>
                    </Fragment>
                ) : (
                    <p>We're still working on our menu, Please come back later :)</p>
                )}
            </div>
        </div>
    )
}
function Footer() {
    const openHour : number = 8;
    const closeHour : number = 22;
    const currentHour : number = new Date().getHours()
    const isOpen : boolean = (currentHour > openHour && currentHour < closeHour) 

    return (
        <div className='footer'>
            {  isOpen ? (
            <Order isOpen={isOpen} closeHour={closeHour} />
            ): (
                <Order isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
            )}
        </div>
    )
}
interface orderProps {
    closeHour? : number,
    openHour?: number,
    isOpen: boolean
}
const Order = ({openHour, closeHour, isOpen} : orderProps) => {
    const openText : ReactElement = <p>{`We're open until ${closeHour}:00`}, Come visit us or order online</p>
    const closedText : ReactElement = <p>{`We're happy welcome you between ${openHour}:00 and ${closeHour}:00`}</p>
    return (
        <div className="order">
            {isOpen ? openText : closedText}
            <button className="btn">Order Now</button>
        </div>
    );
}
interface pizzaProps{
    name: string,
    ingredients: string,
    price: number,
    photoName: string,
    className?: string,
    soldOut?: boolean
}
function Pizza({name, ingredients, price, photoName, className, soldOut} : pizzaProps) {
    // if (soldOut) return null;
    return (
        <li className={className}>
            <img alt={"Pizza spinachi"} src={"../public/" + photoName} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? "Sold out" : price}</span>
            </div>
        </li>
    )
}
export default App;
