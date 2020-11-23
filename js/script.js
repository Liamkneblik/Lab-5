let course1 = {
    code : 'ACIT 1515',
    name : 'Scripting for IT'
}
let course2 = {
    code : 'ACIT 1620',
    name : 'Web Fundamental Technologies'
}
let course3 = {
    code : 'MATH 1310',
    name : 'Technical Math for IT'
}

const courseList = [course1, course2, course3];

let input;

let status = false;

do{
    input = prompt('Enter a course number')
}
while(!Number(input)){
    for (course of courseList){
        if (course.code.includes(input)){
            console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
            status = true
        }

    }
    if ((!course.code.includes(input)) && status === false){
        let course4 = {code : input, name : null}
        courseList.push(course4);
        console.log(`added course ${input} to courseList`)
    }


}

