let todoContent = [];

// $("#submit-form").submit(function(event){
//     event.preventDefault();
//     let userInput = $("#input-activity").val();

//     if(userInput.length == 0){
//         alert("Du måste fylla i fältet!")
//         return false;
//     }
    
//     let activityToAdd = {
//         activity: userInput
//     }
    
//     todoContent.push(activityToAdd);
//     $("#input-activity").val("");
    
// })

function addActivity() {
    let userInput = $("#input-activity").val();

    if (userInput.length > 0) {

        let activity = {
            text: userInput,
            checked: ""
        }

        todoContent.push(activity);
       

    } else {
        alert("Lämna inte fältet tomt!");
    } 

    $("#input-activity").val("");
    displayList();
}

function displayList(){
    let list = $("ul");
    list.empty();

    for(eachActivity of todoContent){
        list.append(`<li class=${eachActivity.checked}>  ${eachActivity.text} <button class="delete-button">x</button> </li>`);
    }
   
    deleteActivity();
    toggleActivityStatus()

}

function toggleActivityStatus(){
    let allItems = $("li");

    for (let i = 0; i < allItems.length; i++) {
        $(allItems[i]).click(function () {
            $(allItems[i]).toggleClass("checked");

            if (todoContent[i].checked === "checked") {
                todoContent[i].checked = "";

            } else if (todoContent[i].checked === "") {
                todoContent[i].checked = "checked";
            }

            console.log(todoContent);
        })
    }
    
    
    // $("li").click(function (event) {
        
        //     let cb = $(this).find(":checkbox")[0];
        //     if (event.target != cb) cb.checked = !cb.checked;
        //     $(this).toggleClass("selected", cb.checked);
        
        // });
        
}
            

            

function deleteActivity(){
    let allActivities = $(".delete-button");

    for(let i of allActivities){
        $(i).click(function (){
            $(this).parent().remove();
            todoContent.splice(i, 1);
        })
    }
}





