document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const tasks = document.getElementById('tasks');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskName = document.getElementById('task-name').value;
        const taskDate = document.getElementById('task-date').value;
        const taskPriority = document.getElementById('task-priority').value;
        const taskResponsible = document.getElementById('task-responsible').value;
        
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <strong>${taskName}</strong> - ${taskDate} - ${taskPriority} - ${taskResponsible}
        `;
        
        // Adicionar tarefa na lista
        tasks.appendChild(taskItem);
        
        taskForm.reset();
    });
});