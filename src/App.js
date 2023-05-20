import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body"
import Header from "./components/Header"


// Functional component : A function returning JSX code
const Main = () => {
    return (
        <div id="Main">
            <Header/>
            <Body/>
        </div>
    )
}

// react element : assigning JSX to a variable => ele is an object
const ele = (
    <p>
        I am a react element
    </p>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main/>)