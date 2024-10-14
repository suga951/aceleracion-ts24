//Pautas:
//Crea clases para `Expense` y `ExpenseReport`.
//Implementa métodos para agregar gastos, calcular totales por categoría y generar un informe resumido.
//Utiliza métodos de array como `filter` y `reduce` para procesar los datos.

class Expense {
  constructor({ id, description, amount, category, date }) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.date = date;
  }
}

class ExpenseReport {
  constructor() {
    this.expenses = [];
  }
  addExpense(expense) {
    const newExpense = new Expense(expense);
    this.expenses.push(newExpense);
  }
  getCategoryTotal(category) {
    const total = this.expenses
      .filter((expense) => expense.category === category)
      .reduce((total, expense) => total + expense.amount, 0);
    return `El total de la categoria ${category} es: ${total}`;
  }
  getReport() {
    const report = {};
    this.expenses.forEach((ex) => {
      if (!report[ex.category]) {
        report[ex.category] = this.getCategoryTotal(ex.category);
      }
    });
    return report;
  }
}

const initialExpenses = [
  new Expense({
    id: 1,
    description: "Almuerzo de negocios",
    amount: 55.5,
    category: "Comida",
    date: "2024-03-01",
  }),
  new Expense({
    id: 2,
    description: "Taxi al aeropuerto",
    amount: 30.0,
    category: "Transporte",
    date: "2024-03-02",
  }),
  new Expense({
    id: 3,
    description: "Hotel",
    amount: 200.0,
    category: "Alojamiento",
    date: "2024-03-02",
  }),
  new Expense({
    id: 4,
    description: "Cena con cliente",
    amount: 80.0,
    category: "Comida",
    date: "2024-03-03",
  }),
  new Expense({
    id: 5,
    description: "Vuelo de regreso",
    amount: 350.0,
    category: "Transporte",
    date: "2024-03-04",
  }),
];

const expenses = new ExpenseReport();

initialExpenses.forEach((ex) => {
  expenses.addExpense(ex);
});

expenses.addExpense({
  id: 6,
  description: "Comida para Titán",
  amount: 22.5,
  category: "Gatos",
  date: "2024-10-11",
});
expenses.addExpense({
  id: 7,
  description: "Rascador nuevo",
  amount: 25.7,
  category: "Gatos",
  date: "2024-9-21",
});
expenses.addExpense({
  id: 8,
  description: "Starbucks",
  amount: 5.2,
  category: "Comida",
  date: "2024-12-11",
});
expenses.addExpense({
  id: 9,
  description: "Uber",
  amount: 8.2,
  category: "Transporte",
  date: "2024-10-11",
});
expenses.addExpense({
  id: 10,
  description: "Botines Messi",
  amount: 1010,
  category: "Messi",
  date: "2024-10-10",
});

console.log(expenses);
console.log(expenses.getCategoryTotal("Messi"));
console.log(expenses.getReport());
