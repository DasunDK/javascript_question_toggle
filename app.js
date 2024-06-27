//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");
// const questions = document.querySelectorAll(".question");
// console.log(questions);

// btns.forEach(function (btn) {
//     btn.addEventListener('click', (e) => {
//         let clickedBtn = e.currentTarget;
//         clickedBtn.parentElement.parentElement.classList.toggle('show-text');

//         btns.forEach(function (otherBtn) {
//             if (otherBtn !== clickedBtn) {
//                 otherBtn.parentElement.parentElement.classList.remove('show-text');
//             }
//         });
//     });
// });

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {

        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
})
