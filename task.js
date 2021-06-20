class Task {
  constructor(title, important, category, description, location, dueDate, color){
    this.title = title;
    this.important = important;
    this.category = category;
    this.description = description;
    this.location = location;
    this.dueDate = dueDate;

    this.name = "kirby";
  }
}

function divide(num1, num2) {
  if (num1 || num2 == 0) {
    alert("cant divide by zero");
    return 0;
  }
  else {
    return num1 / num2;
  }
}
