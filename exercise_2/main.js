const URL = "db/employees.json"
const URLSettings = "db/settings.json"

const button = document.getElementById('button');
const table = document.getElementById('employees');

button.addEventListener("click", handleButtonClick);


function handleButtonClick() {
    fetch(URLSettings).then(res => res.json()).then(settings => {
        fetchedSettings(settings)
    })
}

document.getElementById('employees_length_get').addEventListener('click', updateEmployeeslength)

function updateEmployeeslength() {
    let newEmployeeslength = Number(document.getElementById('employees_length').value)
    fetch(URLSettings).then(res => res.json()).then(settings => {
        fetchedSettings(settings, newEmployeeslength)
    })

}


function fetchedSettings(set, newEmployeeslength) {


    let settings = set.reduce((previousValue, currentValue) => {

        previousValue[currentValue.name] = currentValue.value

        return previousValue
    }, {})


    settings.max_items_to_show = newEmployeeslength >= 0 ? newEmployeeslength : settings.max_items_to_show

    fetch(URL)
        .then(res => res.json())
        .then(employers => {
            let result = []
            employers.forEach((value) => {
                let boolValue = (/true/).test(settings.show_only_active)

                if (boolValue === !value.status) {

                    if (set.show_description) {

                        value.description = `N/A`
                    }

                    result.push(value)
                }

            })
            console.log(settings)
            result.length = settings.max_items_to_show


            indexVive(result)
        })


}


function deleteHTML() {
    let removeItem = this.parentNode.parentNode
    removeItem.remove()
}


function indexVive(employees) {
     table.innerHTML = ''
    employees.forEach((elem) => {
        table.innerHTML += getRowHTML(
            elem.id, elem.name, elem.status, elem.description
        )
    })
    const deleteButtons = document.getElementsByClassName('delete_employees');

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', deleteHTML)

    }

}


function getRowHTML(id, name, status, description) {
    return `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${status}</td>
        <td>${description}</td>
        <td>
        <input type="button"  class="delete_employees" value="Delete">
        </td>
      </tr>`
}