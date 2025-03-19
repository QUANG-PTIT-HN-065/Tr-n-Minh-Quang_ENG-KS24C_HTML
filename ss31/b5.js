const employees = [
    {
        id: 1,
        name: 'van huy',
        age: 18,
        address: 'ha noi'
    },
    {
        id: 2,
        name: 'van huyen',
        age: 11,
        address: 'hcm'
    },
    {
        id: 3,
        name: 'nguyen huy',
        age: 12,
        address: 'ha tinh'
    },
    {
        id: 4,
        name: 'van binh',
        age: 19,
        address: 'hai phong'
    }
]
const tableBody = document.getElementById("table-body");
employees.forEach(user => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
    `;
    tableBody.appendChild(row);
});
