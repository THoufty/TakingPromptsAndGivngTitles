function cardFunc(employee) {
  function makeOptions() {
    if (employee.getrole() == "Manager") return employee.number;
    if (employee.getrole() == "Engineer") return employee.github;
    if (employee.getrole() == "Intern") return employee.school;
  }

  function makeFile() {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h2>${employee.name}</h2>
            <h3 class="card-title">${employee.getRole()}</h3>
            <p class="card-text ">Id: ${employee.id}</p>
            <a>email:<a href="#" class="btn btn-danger">${employee.email}</a>
            <a>${makeOptions(employee)}</a>

        </div>
    </div>
`;
  }

  return makeFile();
}

function finalDoc(employees) {
  let filled = "";
  employees.forEach((employee) => {
    filled += cardFunc(employee);
  });

  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Builder</title>
</head>

<body>
${Filled}
</body>
`;
}

modules.export = finalDoc;
