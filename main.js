console.log('Hello World!');

// Credits to Eliot Clarke for his help with this project.

const tree = {
    char: ''
}

const grabData = () => {
    tree.rows = document.querySelector('#rows').value;
    tree.char = document.querySelector('#symbol').value;
    treeFunction(tree);
}


const createTree = (text) => {
    let para = document.createElement('p');
    let paraData = document.createTextNode(text);
    para.appendChild(paraData);
    document.querySelector('#treeDiv').appendChild(para);
}

document.querySelector('#btn-tree').addEventListener('click', grabData);

const treeFunction = obj => {
    let line = '';
    let space = ' ';
    let charCount = 1;
    let spaceCount = obj.rows - 1;
    for (let i = 1; i <= obj.rows; i++) {
        for (let j = 1; j <= spaceCount; j++) {
            line += space;
        }
        for (let k = 1; k <= charCount; k++) {
            line += obj.char;
        }
        createTree(line);
        console.log(line);
        line = '';
        spaceCount--;
        charCount++;
        charCount++;
    }
    createTree(line);
}

