let checkbox = document.getElementById("cb")
        let footerDiv = document.getElementById("divCheck")
        let button = document.getElementById("procedi")
        const whiteCheckbox = () => {
            if (checkbox.checked) {
                //checkbox.onclick(footerDiv.style.backgroundColor = "white")
                footerDiv.style.backgroundColor = "white"
            } else {
                footerDiv.style.backgroundColor = "transparent"
            }
        }
        
        const startTest = () => {
            if (checkbox.checked) {
                button.onclick(location.replace("../pagina2/secondPage.html"))
                
            }
        }

