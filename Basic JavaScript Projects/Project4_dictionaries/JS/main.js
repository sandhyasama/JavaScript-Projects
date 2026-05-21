//create student dicionary 
function createStudentDictionary(){
    //create student dictionary
    var student = {
        firstName: "John",
        lastName: "Doe",
        age: 26,
        dateOfBirth: "1991-01-20",
        department: "Computer Science Engineering"
    }

    //display department key from student dictionary
    document.getElementById("Dictionary").innerHTML = student.department;
}

//attempt to create dictionary with duplicate key
//seems last key value is used 
function createTeacherDictionary(){
    //create teacher dictionary
    var teacher = {
        firstName: "John Proferssor",
        lastName: "Doe",
        age: 26,
        dateOfBirth: "1971-01-20",
        subject: "CSE1",
        subject: "CSE"
        
    }
    //display subject key from teacher dictionary
    document.getElementById("Dictionary_DuplicateKey").innerHTML = teacher.subject;
}

//using keywords as operators
//using delete keyword on dictionary to delete a key from dictionary then
//try to display the same key value which was deleted 
function deleteKeyWordOnDictionary(){
    var student = {
        firstName: "John",
        lastName: "Doe",
        age: 26,
        dateOfBirth: "1991-01-20",
        department: "Computer Science Engineering"
    }

    //delete department key
    delete student.department

    //try to show value for department key,which is producting undefined as expected
    document.getElementById("Dictionary_DeleteKey").innerHTML = student.department;
}