let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i=0;i<listOfItems.length ; i++) {
    const element = listOfItems[i];
    document.write(`<ul>
    <li>
    ${element}.${i}
    </li>
    </ul>`)

}