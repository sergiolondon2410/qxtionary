import React from "react";
import Nav from "./components/Nav";
import List from "./components/List";

function Home() {
    return (
        <div class="container flex mx-auto w-full items-center justify-center">
            <Nav />
            <List />
        </div>
    ); 
}

export default Home;