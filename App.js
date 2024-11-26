
import Content from "./Content";
import Footer from "./Footer";
import Heading from "./Heading";
import { useState,useEffect } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() { 
 
  const [items, setItem]= useState( []
    
);

      const [newItem,setNewItem]= useState('')
      const [search,setSearch] = useState('')
      
      useEffect(()=>{
        JSON.parse(localStorage.getItem('todo_list'))
      },[])



      const  addItem = (item)=>{
      const  id = items.length ? items[items.length-1].id 
      +1 : 1;
      const addNewItem = {id, checked:false ,item }
      const listItem = [...items , addNewItem]
      setItem(listItem)
      localStorage.setItem('todo_list ',JSON.stringify(listItem));
     }
      const handleCheck=(id)=>{
      const listItems= items.map((item)=>
      item.id===id ? {...item ,checked:! item.checked}:item)
      setItem(listItems)
      localStorage.setItem('todo_list',JSON.stringify(listItems))
     }
      const handleDelete=(id)=>{
      const listItem = items.filter((item)=>
      item.id!==id)
      setItem(listItem)
      localStorage.setItem('todo_list',JSON.stringify(listItem))
      }
      const handleSubmit = (e)=>{
        e.preventDefault()
        if (!newItem) return ;
        console.log (newItem)
        addItem(newItem)
        setNewItem('')
      }
  return (
   <div >
       <Heading  title =" To do list  " />
       <AddItem 
       NewItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
       />
       <SearchItem
       search={search}
       setSearch={setSearch}
       />
       <Content
       items = {items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
       />
       <Footer
        length={items.length}
       />
   </div>
  );
}

export default App;

