// Define a function named createDiv that takes no arguments.
// Return a <div> element.
function createDiv() {
    let div = document.createElement('DIV');
        // console.log(div);
        return div;
}


// Define a function named createDivWithClass that takes one argument.
//   className (string)
//
// Return a <div> element with the given className.
function createDivWithClass(className) {
    let div = document.createElement('DIV');
    div.className = className;
        // console.log(div);
        return div;
}

// Define a function named updateTodoList that takes one argument.
//   todoList (<ul> DOM element)
//
// The function must iterate over its list items (<li>) and do the following:
//   * Remove items from the list if its text starts with "COMPLETED"
//   * Applies the "important" CSS class if its text starts with "URGENT".
//     TIP: Applying a CSS class means adding on top of what's already there.
//   * Make no change otherwise
function updateTodoList(todoList) {
    // console.log(todoList)
    for (let i = 0; i < todoList.childNodes.length; i++) {
        // Fixed this by grabbing the child nodes inside the loop, rather than outside... 
        // using a querySelector and a variable on the outside
        //  was causing it to iterate ove 3 items rather than 4 -- should probably revise scopes!
        let listItems = todoList.getElementsByTagName('li');
        // then grabbed all the targetable 'li's
        let str = listItems[i].textContent;
        // then turned the textContent into a string (from an obj) so the .remove() function would work
        // then passed in my if else statement... and Viola! lol
        // also didn't use return bc we're only modifying and couldnt rely on console log bc... you can't log a removal?
        if (str.startsWith('COMPLETED')) {
            listItems[i].remove();
        } else if (str.startsWith('URGENT')) {
            listItems[i].className = listItems[i].className + ' ' + 'important';
        }
    }
        
}


// Define a function named createList that takes one argument.
//   sites (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
//
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'DevCommute': 'https://www.devcommute.com'
//    }
//
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.devcommute.com">DevCommute</a></li>
//    </ul>
function createList(sites) {
    let html = document.createElement('ul');
    // first create the html markup obj ie. the ul
    for (let i = 0; i < Object.keys(sites).length; i++){
        let title = Object.keys(sites);
        let url = Object.values(sites);
        //then grab the key, value ie. 'TITLE': 'URL'
        // console.log(title[i])
        // console.log(url[i])
        let li = document.createElement('li');
        let a = document.createElement('a');
        // then create you li and a tags
        a.innerHTML = title[i];
        a.href = url[i];
        // then assign the values to the a tag. ie. 'TITLE': 'URL'

        li.appendChild(a);
        html.appendChild(li);
        //then append them
    };
    // console.log(html)
    return html;
    // then thank your mum 
}


// Write a function named extractQuote that takes in one argument.
//   article (<article> DOM element)
//
// Assume the article contains a paragraph. For example:
//
//    <article>
//      <p>Neale Donald Walsch once said, "Life begins at the end of your
//      comfort zone." This is really important.</p>
//    </article>
//
// The function must check the paragraph for double quotes ("), extract it out,
// add it to the text of a <blockquote> element, and then replace the paragraph
// with that blockquote. For example, given the  above input, it must change the
// article as following:
//
//    <article>
//      <blockquote>"Life begins at the end of your comfort zone."</blockquote>
//    </article>
//
// No changes should be made if there's no quote.
//
// TIP: Assume that if there's an opening double quote, there's a closing
// double quote as well.
function extractQuote(article) {

    let para = article.firstChild;
    paraStr = para.textContent;

    if (paraStr.indexOf('"')> -1) {
        let b = document.createElement('blockquote')
        quote = paraStr.split('"')[1];
        b.textContent = '"' + quote + '"';
        // console.log(b.textContent)
        article.replaceChild(b, para);
        return para;
    } 
    else {
        return null;
        // console.log('no changes');
    }
    // console.log(paraStr)
}

// Define a function named createTable that takes one argument.
//   data (array of arrays)
//
// The function must return a <table> DOM element that matches the structure of
// the input data. The first element in the data array is the <thead> data, the
// last element is the <tfoot> data, and the remaining elements form the <tbody>
// data. For example, given the following input:
//    [
//      ['a', 'b', 'c'],
//      ['d', 'e', 'f'],
//      ['g', 'h', 'i'],
//      ['j', 'k', 'l']
//    ]
//
// the function returns
//
// <table>
//   <thead>
//     <tr>
//       <th>a</th>
//       <th>b</th>
//       <th>c</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>d</td>
//       <td>e</td>
//       <td>f</td>
//     </tr>
//     <tr>
//       <td>g</td>
//       <td>h</td>
//       <td>i</td>
//     </tr>
//   </tbody>
//   <tfoot>
//     <tr>
//       <td>j</td>
//       <td>k</td>
//       <td>l</td>
//     </tr>
//   </tfoot>
// </table>
//
// TIP: Assume that data array has at least three elements.
// TIP: Assume that the elements of the data array are equal in length.
// non working copy
function createTable(data) {
    // console.log(data);
    // console.log(data.length);
    // // this is the number of rows
    // console.log(data[0].length);
    // this is the number of columns

    let table =  document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tfoot = document.createElement('tfoot');

    for (let i = 0; i > data.length; i++){
        let tr = document.createElement('tr');
        

        for (let e = 0; e > data[0].length; e++) {
            let td = document.createElement('td');
            let tableData = document.createTextNode(i + e)
            console.log(tableData)
            return tableData
        }
        console.log(tableData)
    }
    console.log(tableData)
}