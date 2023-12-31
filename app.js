const taskItems = document.querySelector('.task-items')
const taskButtons = document.querySelectorAll('.select-task')
const totalAmountEl = document.getElementById('total-amount')

let totalAmount = 0

taskButtons.forEach(eachTaskButton => {
    eachTaskButton.addEventListener('click', function() {
        // eachTaskButton.disabled = true
        let btnContent = eachTaskButton.textContent

        let indexOfColon = btnContent.indexOf(':')
        let taskName = btnContent.slice(0,indexOfColon)

        let amount = btnContent.slice(-2)

        taskItems.innerHTML += `
            <div class="task-item">
                <h2 class="task-title">${taskName}</h2>
                <button class="remove-task">Remove</button>
                <h2 class="amount-wrap">
                    <span class="dollar-symbol">$</span>
                    <span class="amount">${amount}</span>
                </h2>
            </div>` 

        totalAmount += parseInt(amount)
        totalAmountEl.textContent = totalAmount

        removeTask()
    })
})

function removeTask() {
    document.querySelectorAll('.remove-task').forEach(eachRemoveBtn => {
        eachRemoveBtn.addEventListener('click', () => {
            let amount = parseInt(eachRemoveBtn.nextElementSibling.children[1].textContent)
            eachRemoveBtn.parentNode.remove()

            totalAmount -= amount
            totalAmountEl.textContent = totalAmount
        })
    })
}