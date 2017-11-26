var students = [
    {
        id: 1,
        name: 'ნოდო',
    },
    {
        id: 2,
        name: 'დათო',
    },
   {
       id: 3,
       name: 'ჟორა',
   },
   {
    id: 4,
    name: 'თედო',
    }
];

function change(studentsList,studentsName) {
    var changedName = [];

    for(var i = 0; i < studentsList.length; ++i){
        if(changedName.indexOf(studentsList[i].name) == -1){
            changedName.push(studentsList[i].name);
        }
    }

    return changedName;
}

var names = change(students);

document.write(names);