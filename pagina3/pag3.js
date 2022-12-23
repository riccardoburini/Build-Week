let somma = parseInt(localStorage.getItem("sum"))
        console.log(somma)
        let domande = parseInt(localStorage.getItem("max"))
        console.log(domande)
        const checkAnswer = (correct, questions) => {
            let correctAnswers = (correct * 100) / questions
            let wrongAnswers = 100 - correctAnswers
            if (correctAnswers >= 60) {
                let h5 = document.createElement("h5")
                h5.innerText = "Congratulations!"
                let h5Blue = document.createElement("h5")
                h5Blue.innerText = "You passed the exam."
                h5Blue.style.color = "#00FFFF"
                h5Blue.style.marginTop = 0
                let p = document.createElement("p")
                p.innerText = "We'll send you the certificate in few minutes. Check your email (including promotions / spam folder"
                let div = document.querySelector(".countdown")
                div.appendChild(h5)
                div.appendChild(h5Blue)
                div.appendChild(p)
            } else {
                document.querySelector(".countdown").style.border = "none"
                document.querySelector(".countdown").innerHTML += `<img src="../assets/criceto.gif">`
                document.querySelector(".countdown img").style.width = "200px"
            }
                let pResult = document.getElementById("pCorrect")
                pResult.innerText = (correctAnswers.toFixed(1)) + "%"
                let pCheckC = document.getElementById("checkCorrectAnswers")
                pCheckC.innerText = correct + "/" + questions + " questions"
                //let corrette = document.getElementById("correctResult")
                //corrette.appendChild(pResult)
                let pWrong = document.getElementById("pWrong")
                pWrong.innerText = (wrongAnswers.toFixed(1)) + "%"
                let pCheckW = document.getElementById("checkWrongAnswers")
                let totalWrong = questions - correct
                pCheckW.innerText = totalWrong + "/" + questions + " questions"
                //let sbagliate = document.getElementById("correctResult")
                //sbagliate.appendChild(pResult)

                

            }
            
        
        window.onload(checkAnswer(somma, domande))
/*let somma = parseInt(localStorage.getItem("sum"))
        console.log(somma)
        let domande = parseInt(localStorage.getItem("max"))
        console.log(domande)
        const checkAnswer = (correct, questions) => {
            let correctAnswers = (correct * 100) / questions
            let wrongAnswers = 100 - correctAnswers
            if (correctAnswers >= 60) {
                let h5 = document.createElement("h5")
                h5.innerText = "Congratulations!"
                let h5Blue = document.createElement("h5")
                h5Blue.innerText = "You passed the exam."
                h5Blue.style.color = "#00FFFF"
                h5Blue.style.marginTop = 0
                let p = document.createElement("p")
                p.innerText = "We'll send you the certificate in few minutes. Check your email (including promotions / spam folder"
                let div = document.querySelector(".countdown")
                div.appendChild(h5)
                div.appendChild(h5Blue)
                div.appendChild(p)

                let pResult = document.getElementById("pCorrect")
                pResult.innerText = (correctAnswers.toFixed(1)) + "%"
                let pCheckC = document.getElementById("checkCorrectAnswers")
                pCheckC.innerText = correct + "/" + questions + " questions"
                //let corrette = document.getElementById("correctResult")
                //corrette.appendChild(pResult)
                let pWrong = document.getElementById("pWrong")
                pWrong.innerText = (wrongAnswers.toFixed(1)) + "%"
                let pCheckW = document.getElementById("checkWrongAnswers")
                let totalWrong = questions - correct
                pCheckW.innerText = totalWrong + "/" + questions + " questions"
                //let sbagliate = document.getElementById("correctResult")
                //sbagliate.appendChild(pResult)

                

            }
            
        }
        window.onload(checkAnswer(somma, domande))*/
        
        
        
