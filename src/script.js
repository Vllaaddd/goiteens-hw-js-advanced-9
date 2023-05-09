const BASE_URL = 'http://localhost:3000';

async function getAllStudents(){

    const res = await fetch(`${BASE_URL}/students`)
    const students = await res.json();

    console.log(students);

}

// getAllStudents()

const newStudent = {
    name: 'Bob',
    age: '20',
    email: 'Bob',
    phone: '123123'
}


async function addNewStudent(newStudent){

    const options = {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newStudent)
    }

    return await fetch(`${BASE_URL}/students`, options)

}

// addNewStudent(newStudent)

const newStudentInfo = {
    name: 'Bob'
}


async function updateAllStudentInfo(studentId ,newStudentInfo){

    const options = {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newStudentInfo)
    }

    return await fetch(`${BASE_URL}/students/${studentId}`, options)

}

// updateAllStudentInfo(4, newStudentInfo)


async function updateSomeStudentInfo(studentId ,newStudentInfo){

    const options = {
        method: "PATCH",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newStudentInfo)
    }

    return await fetch(`${BASE_URL}/students/${studentId}`, options)

}

// updateSomeStudentInfo(4, newStudentInfo)


async function deleteStudent(...id){

    const options = {
        method: "DELETE"
    }

    for(let i = 0; i < id.length; i++){
        await fetch(`${BASE_URL}/students/${id[i]}`, options)
    }

    

}

// deleteStudent()


async function getStudentsByAge(studentAge){
    const res = await fetch(`${BASE_URL}/students?age=${studentAge}`)
}

// getStudentsByAge(19)

async function getStudentsByName(studentName){
    const res = await fetch(`${BASE_URL}/students?name=${studentName}`)
}

// getStudentsByName('Jane Smith')

async function getStudentsByEmail(studentEmail){
    const res = await fetch(`${BASE_URL}/students?email=${studentEmail}`)
}

// getStudentsByEmail('john.doe@example.com')

async function getStudentsByPhone(studentPhone){
    const res = await fetch(`${BASE_URL}/students?phone=${studentPhone}`)
}

// getStudentsByPhone('555-9012')