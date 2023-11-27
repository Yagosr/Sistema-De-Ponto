document.addEventListener("DOMContentLoaded", function () {
    const employeeList = document.getElementById("employeeList");
  
    // Dados de exemplo (pode ser obtido do servidor em um ambiente real)
    const employees = [
      { name: " Yago Santana Rocha", vacationStart: "2023-12-01", vacationEnd: "2023-12-15" },
      { name: "Allan Santos", vacationStart: "2023-12-10", vacationEnd: "2023-12-20" },
      // Adicione mais funcionários conforme necessário
    ];
  
    // Mostrar lista de funcionários e suas férias
    employees.forEach((employee) => {
      const employeeDiv = document.createElement("div");
      employeeDiv.classList.add("employee");
  
      const employeeInfo = document.createElement("p");
      employeeInfo.innerHTML = `<strong>${employee.name}</strong>: ${employee.vacationStart} a ${employee.vacationEnd}`;
  
      const approveBtn = document.createElement("button");
      approveBtn.classList.add("btn");
      approveBtn.innerHTML = "Aprovar";
      approveBtn.addEventListener("click", () => {
        alert(`Férias de ${employee.name} aprovadas!`);

        employeeDiv.remove();
      });
  
      employeeDiv.appendChild(employeeInfo);
      employeeDiv.appendChild(approveBtn);
  
      employeeList.appendChild(employeeDiv);
    });
  });