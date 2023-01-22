return React.createElement(
    "div", {
    className: "todoList"
},
    React.createElement("h1", null, "Список дел для  ", props.ownerName, " "),
    React.createElement("ul", null,
        React.createElement("li", null, "Зарядка"), 
        React.createElement("li", null, "Завтрак"),
        React.createElement("li", null, "Универ"))
);
