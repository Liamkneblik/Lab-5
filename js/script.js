// let course1 = {
//     code : 'ACIT 1515',
//     name : 'Scripting for IT'
// }
// let course2 = {
//     code : 'ACIT 1620',
//     name : 'Web Fundamental Technologies'
// }
// let course3 = {
//     code : 'MATH 1310',
//     name : 'Technical Math for IT'
// }

// const courseList = [course1, course2, course3];


function createCourseArray(){
    let courselist = []
    let course = {}
    let anchoritems = document.querySelectorAll('section li a')
    let dateElem = document.querySelector('section li p')
    for (let anchor of anchoritems){
        course = {code : anchor, date : dateElem }
        courselist.push(course)
    }
    return courselist
}

function findCourse(courseList){
    let status = false
    let input
    do{
        input = prompt('Enter a course number')
    }
    while (!Number(input)){
        for (course of courseList){
            if (course.code.innerHTML.includes(input)){
                let f = course.code
                f.style.background = "lightgreen"
                status = true
            }
        }
        if((!course.code.innerHTML.includes(input)) && (status === false)){
                let newcourseCode = document.createElement('p')
                let text1 = document.createTextNode(`${input} - 'N/A' - Fall 2020`)
                newcourseCode.appendChild(text1)
                let element = document.querySelector('section')
                element.appendChild(newcourseCode)
        }
    }
}

courseList = createCourseArray()
console.log(courseList)
findCourse(courseList)


// do{
//     input = prompt('Enter a course number')
// }
// while(!Number(input)){
//     for (course of courseList){
//         if (course.code.includes(input)){
//             console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
//             status = true
//         }

//     }
//     if ((!course.code.includes(input)) && status === false){
//         let course4 = {code : input, name : null}
//         courseList.push(course4);
//         console.log(`added course ${input} to courseList`)
//     }


// }

