const WHATSAPP_NUMBER = "573023469759";
const menuContainer = document.querySelector(".menu-container");

const pizzas = [
  {
    name: "Margherita",
    description: "Salsa de tomate, mozzarella fresca, albahaca.",
    price: "12.50",
    image: "https://www.clarin.com/img/2023/08/01/SL3EslnOA_1256x620__1.jpg",
  },
  {
    name: "Pepperoni",
    description: "Salsa de tomate, mozzarella, pepperoni.",
    price: "14.00",
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola, parmesano, provolone.",
    price: "15.50",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Napolitana",
    description: "Salsa de tomate, anchoas, alcaparras, aceitunas.",
    price: "16.00",
    image:
      "https://media.istockphoto.com/id/1736646828/es/foto/pizza-margherita.jpg?s=2048x2048&w=is&k=20&c=-NU_-Q8B8tXl4x9DELNN0ulxD3StBqzSwRtBL0n9egg=",
  },
];

const createPizzaCard = (pizza) => {
  const card = document.createElement("article");
  card.className = "pizza-card";
  card.innerHTML = `
        <img src="${pizza.image}" alt="Pizza ${pizza.name}">
        <div class="pizza-card__content">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <div class="pizza-card__footer">
                <span class="pizza-card__price">$${pizza.price}</span>
                <button type="button" class="pizza-card__button">Ordenar</button>
            </div>
        </div>
    `;

  const orderButton = card.querySelector(".pizza-card__button");
  if (orderButton) {
    orderButton.addEventListener("click", () => {
      const message = encodeURIComponent(
        `Hola, quiero ordenar una pizza ${pizza.name}.`
      );
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  return card;
};

if (menuContainer) {
  pizzas.forEach((pizza) => {
    const pizzaCard = createPizzaCard(pizza);
    menuContainer.appendChild(pizzaCard);
  });
}
