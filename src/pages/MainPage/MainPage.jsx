import React, {useState} from 'react';

const MainPage = () => {
    const [list, setList] = useState([])
    const [value, setValue] = useState('')
    const createList =() =>{
        if(value!==''){
            setList([value, ...list])
        }
    }
    const changeList =(index) =>{
        if(value!==''){
            const listName = [...list]
            listName[index]=value
            setList(listName)
        }
    }

    return (
        <div>
            <input type="text" onInput={(e) =>{setValue(e.target.value)}}/>
            <button onClick={createList}>create</button>
            <ul>
                {
                    list.length!==0 ?
                    list.map((item, idx)=> <div key={idx}>
                        <li>{item}</li>
                        <button onClick={() =>changeList(idx)}>change</button>
                    </div>)
                        :
                        <p>Список пуст</p>
                }
            </ul>
        </div>
    );
};

export default MainPage;