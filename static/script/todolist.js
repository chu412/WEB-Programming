

function tryAddElement(event)
{
    try {	
        let tex = document.getElementById("form").value
        let element = makeElement(tex)      
        document.getElementById("todolist").appendChild(element)
        dumpLines(document.getElementById("todolist"))
    }
    catch(err)
    {
        alert(err)
    }
    document.getElementById("form").value = "";
    event.stopPropagation();
}

function Delete(obj)
{
    obj.parentNode.remove()
    dumpLines(document.getElementById("todolist"))
}


function dumpLines(div)
{
    let lines = []
    let child = null;
    let ps = div.getElementsByClassName('task-text')
    for (let i = 0; i < ps.length; i++)
    {
        child = ps[i]
        lines.push(child.getElementsByTagName('P')[0].textContent)
    }
    window.localStorage.setItem("loc", JSON.stringify(lines))
}

function makeElement1(tex)
{
    let element = document.createElement('P')
    let p = document.createElement('P')
    p.appendChild(document.createTextNode(tex))
    let but = document.createElement('BUTTON')
    but.type='button'
    but.innerHTML='Delete'
    but.setAttribute("onclick", "Delete(this)")
    let div = document.createElement('DIV')
    element.appendChild(but)
    element.appendChild(div)
    element.appendChild(p)
    element.setAttribute('class', 'task-text')
    return element
}

function makeElement(tex)
{
    let element = document.getElementById('formtemp').content.cloneNode(true).childNodes[1]
    element.getElementsByTagName('P')[0].textContent = tex
    return element
}

function loadList()
{
        let div = document.getElementById("todolist")
        if (div)
        {
            let element = null 
            let list = JSON.parse(window.localStorage.getItem("loc"))
            if (list)
            {
                for (let i = 0; i < list.length; i++) {
                    element = makeElement(list[i])
                    div.appendChild(element)
                }
            }
        }
}

window.addEventListener("load", function(event) {
    loadList()
    document.addEventListener("submit", tryAddElement)
  });  
  
