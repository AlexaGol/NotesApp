//create pinned note element to insert the created note to
const pinnedNote = document.querySelector(".tasks")

pinnedNote.innerHTML = ''

//notes object
class Note {
    constructor (task, date, time) {
        this.task = task
        this.date = date
        this.time = time
    }

    //get HTML method
    getHtml(){
        pinnedNote.innerHTML += `
        <div class="tasks">
        <div class="note">
            <p class="pinnedTask">
            ${this.task} <br>
                ${this.date} <br>
                ${this.time} <br>
            </p>
            <button onclick="removeTask(this)">X</button>
        </div>
    </div>
        `
    }
}

//empty array
//takes a string and makes it an object json.parse
const notes = JSON.parse(localStorage.getItem("notes")) || []
// const notes = []

//add note function
function addNote() {
    //create a variables to store each user input
    const noteEL = document.querySelector("#txtAr")
    const dtEL = document.querySelector("#dt")
    const tmEL = document.querySelector("#tm")

    //create a new object from inputs
    const note1 = new Note (noteEL.value, dtEL.value, tmEL.value)

    note1.getHtml()

    notes.push(note1)
    console.log(notes)

    //takes objects and makes them a string
    localStorage.setItem("notes", JSON.stringify(notes))

}

//remove notes function
function removeTask(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.querySelector("#task").deleteRow(i);
}

//save notes after refresh page 




