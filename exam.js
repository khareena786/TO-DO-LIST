$(document).ready(function () {
    // Function to add a task
    function addTask(taskText) {
        const taskList = $("#taskList");
        const listItem = $("<li>").text(taskText);
        const checkbox = $("<input>").attr("type", "checkbox");
        const deleteButton = $("<span>").addClass("delete").text("Delete");

        listItem.append(checkbox);
        listItem.append(deleteButton);
        taskList.append(listItem);
    }

    // Add a new task when the Add button is clicked
    $("#addTask").click(function () {
        const taskInput = $("#taskInput");
        const taskText = taskInput.val().trim();
        //trim() used to remove whitespace characters

        if (taskText !== "") {
            addTask(taskText); //taskText identifies the task based on it's text content
            taskInput.val("");
        }
    });
    //  when the checkbox is clicked it marks task is completed
    $("#taskList").on("change", "input[type='checkbox']", function () {
        const listItem = $(this).parent();
        listItem.toggleClass("completed");
    });

    // Deletes a task when the Delete button is clicked
    $("#taskList").on("click", ".delete", function () {
        $(this).parent().remove();
    });
});
