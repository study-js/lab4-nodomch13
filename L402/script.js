var name = prompt("შეიყვანეთ სახელი: ");

var students = [
{
    id: 1,
    name: 'ნოდო',
},
{
    id: 2,
    name: 'გიო',
},
{
    id: 3,
    name: 'დათო',
}
];

function list (studentsList,studentsName) {
    var count = 0;

    for(var i = 0; i < studentsList.length; ++i){
        if(studentsList[i].name == studentsName){
            ++count;
        }
    }

    return count;
}



var filter = list(students, name);

document.write(filter);