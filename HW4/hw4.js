let userInfo = []
function Task1_3()
{
    document.write("//Task 1 - 3//")

    function ask()
    {
    userInfo[0] = prompt("Enter your name, please.")
    userInfo[1] = prompt("Enter your surname, please.")
    userInfo[2] = prompt("Enter your age, please.")
    }

    function say()
    {
        document.write(`Your name: ${userInfo[0]}<br>`)
        document.write(`Your surname: ${userInfo[1]}<br>`)
        document.write(`Your age: ${userInfo[2]}<br>`)
    }

        do 
        {
            ask()
            say()
            repeater = confirm("Want to do it again?")
        }while(repeater)
    document.body.innerHTML = ""
}

function Task4()
{
    document.write("//Task 4//<br>")

    let num1 = Number(prompt("Enter the first number"))
    let num2 = Number(prompt("Enter the second number"))

    function sum1(a, b)
    {
        alert(`Sum using the first func: ${a + b}`)
    }

    function sum2()
    {
        alert(`Sum using the second func: ${num1 + num2}`)
    }

    sum1(num1,num2)
    sum2()
    document.body.innerHTML = ""
}

function Task5()
{
    function msgSend(msg, count = 3)
    {
        if (typeof(msg) == "underfined") alert("NO")
        else for(let i = 0;i < count; i++) document.write(`${msg}<br>`)
    }
    msgSend(prompt("What would you like to write"),prompt("How much?"))
}


