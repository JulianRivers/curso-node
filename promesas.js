const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleadoById = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre
    return new Promise((resolve, reject) => {
            (empleado) 
            ? resolve(empleado)
            : reject(`No existe empleado con el id ${id}`)
    })
}

getEmpleadoById(1).then(empleado => console.log(empleado))
.catch(err => console.log(err))

getSalarioById = (id) => {
    const salario = salarios.find(s => s.id === id)?.salario
    return new Promise((resolve, reject) => {
            (salario) 
            ? resolve(salario)
            : reject(`No existe salario con el id ${id}`)
    })
}

let id = 1;
let nombre;

getEmpleadoById(id)
.then(empleado => {nombre = empleado; return getSalarioById(id);})
.then(salario => console.log('El empleado ', nombre, ' tiene el salario ',salario ))
.catch(err => console.log(err))