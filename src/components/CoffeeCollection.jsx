import React, { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import "./CoffeeCollection.css";

const coffeeData = [
  {
    id: 1,
    name: "Cappuccino",
    price: "$5.20",
    rating: 4.7,
    votes: 65,
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop&crop=center",
    isPopular: true,
    isSoldOut: false,
  },
  {
    id: 2,
    name: "House Coffee",
    price: "$3.50",
    rating: 4.85,
    votes: 14,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop&crop=center",
    isPopular: true,
    isSoldOut: false,
  },
  {
    id: 3,
    name: "Espresso",
    price: "$2.50",
    rating: 4.9,
    votes: 55,
    image:
      "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop&crop=center",
    isPopular: false,
    isSoldOut: false,
  },
  {
    id: 4,
    name: "Coffee Latte",
    price: "$4.50",
    rating: 5.0,
    votes: 23,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop&crop=center",
    isPopular: false,
    isSoldOut: false,
  },
  {
    id: 5,
    name: "Chocolate Coffee",
    price: "$4.00",
    rating: 4.65,
    votes: 122,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    isPopular: false,
    isSoldOut: true,
  },
  {
    id: 6,
    name: "Valentine Special",
    price: "$5.50",
    rating: null,
    votes: 0,
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop&crop=center",
    isPopular: false,
    isSoldOut: false,
  },
];

function CoffeeCollection() {
  const [coffeeList, setCoffeeList] = useState();
  const [activeFilter, setActiveFilter] = useState("All Products");

  useEffect(function () {
    async function getCoffeeList() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        );
        console.log(res);
        if (res.ok) {
          const data = await res.json();
          setCoffeeList(data);
        }
      } catch (err) {}
    }
    getCoffeeList();
  }, []);

  const filteredCoffees =
    activeFilter === "Available Now"
      ? coffeeList.filter((coffee) => !coffee.isSoldOut)
      : coffeeData;

  return (
    <section className="coffee-collection">
      <div className="collection-header">
        <h1 className="collection-title">Our Collection</h1>
        <p className="collection-description">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${
              activeFilter === "All Products" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("All Products")}
          >
            All Products
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "Available Now" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("Available Now")}
          >
            Available Now
          </button>
        </div>
      </div>

      <div className="coffee-grid">
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  );
}

export default CoffeeCollection;
