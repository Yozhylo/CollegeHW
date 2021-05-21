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
    document.write("//Task 5//<br>")

    function msgSend(msg, count = 3)
    {
        if (typeof(msg) == "underfined") alert("NO")
        else for(let i = 0;i < count; i++) document.write(`${msg}<br>`)
    }
    msgSend(prompt("What would you like to write"),prompt("How much?"))
   
    document.body.innerHTML = ""
}

function Task6()
{
    document.write("//Task 6//<br>")

    let a, b

    function sum(a, b)
    {
        return a + b;
    }
   
    function power(a, n)
    {
        let res = a
        if(n == 0) return 1
        else if(n != 1 && n > 0)
            {
                for (let i = 0; i < n-1; i++)res *= a
                return res
            }else if(n < 0)
                {
                    let negRes = a
                    for (let i = 0; i < n-1; i++) negRes *= a
                    return 1 / negRes
                }else return res
    }

    let q = 0;
    while(!q)
    {
        switch(Number(prompt("1. Sum\n2. Power")))
        {
            case 1:
            {
                a = Number(prompt("Enter the first number to sum"))
                b = Number(prompt("Enter the second number to sum"))
                
                res = sum(a,b)

                alert(`Sum: ${res}`)
            q++; break;
            }

            case 2:
            {
                a = Number(prompt("Enter the number to power"))
                b = Number(prompt("Enter the power of the number"))
                
                res = power(a,b)

               alert(`Power: ${res}`) 
            q++; break;
            }

            default: alert("Invalid input!"); break;
        }
    }

    document.body.innerHTML = ""
}

function Task7()
{
    let a, b, operator, res, q = 0

    function add(a, b)
    {
        return a + b
    }

    function sub(a, b)
    {
        return a - b
    }

    function mul(a, b)
    {
        return a * b
    }

    function div(a, b)
    {
        return a / b
    }

    a = Number(prompt("Enter the first number"))
    b = Number(prompt("Enter the second number"))
    
    while(!q)
    {
        operator = prompt("Enter the operation sign: +, -, * or /")
        switch (operator)
        {
            case '+':
            {
            res = add(a, b)
            document.write(`${a} ${operator} ${b} = ${res}`)
            q++; break;
            }

            case '-':
            {
                res = sub(a, b)
                document.write(`${a} ${operator} ${b} = ${res}`)
                q++; break;
            }
            case '*':
            {
                res = mul(a, b)
                document.write(`${a} ${operator} ${b} = ${res}`)
                q++; break;
            }

            case '/':
            {
                res = div(a, b)
                document.write(`${a} ${operator} ${b} = ${res}`)
                q++; break;
            }

            default:
                document.write(`<b style='color:red'>${operator}</b> is not an arithmetic operation sign.<br>`);
            break;
        }
    }
}

function Task8()
{
    function max(a, b, c) 
    {
        let maxValue = Number.NEGATIVE_INFINITY;
        document.write(`<p>Number.NEGATIVE_INFINITY = ${maxValue}`);
        
        for (let i = 0; i < arguments.length; i++) if (arguments[i] > maxValue) maxValue = arguments[i];
        
        return maxValue;
    }
    
    let res = max(-9, 0, 124, 26, 202, 1);
    document.write(`<p>Максимальное значение одного из аргументов функции = ${res}`);

}

function Task9()
{
    function func()
    {
        if (arguments.length != 3) document.write(`<p align="middle"><b style="color:red;">Wrong function call, there must be three parameters present.<br>Parameters present: ${arguments.length}</b>`)
        else document.write(`<p align="middle" style="color:green;">Function called properly.`)
    }

    func(0)
    func(1)
    func(1,2)
    func(1,2,3)
}