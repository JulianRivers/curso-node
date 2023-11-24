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

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find(empleado => empleado.id === id)?.nombre

    if (empleado) {
        callback(null, empleado)
    } else {
        callback(`Empleado con id ${id} no existe`)
    }

}

const getSalarioById = (id, callback) => {
    const salario = salarios.find(salario => salario.id === id)?.salario

    if (salario) {
        callback(null, salario)
    } else {
        callback(`No existe salario para el ${id}`)
    }
}

idValue = 3

getEmpleadoById(idValue, (err, empleado) => {
    if (err) {
        console.log("Error!");
        return console.log(err);
    }
    getSalarioById(idValue, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
    })
})