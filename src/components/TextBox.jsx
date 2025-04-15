import React, { useState } from 'react'
import DeleteBtn from '/src/assets/cross.svg'

function TextBox() {

    const[text,setText] = useState("");

    const[items,setItems] = useState([]);

    const handleKeyDown = (e)=>{
      if(e.key === "Enter" && text.trim() != ""){
        setItems([...items, text.trim()]);
        setText("");
      }
    }

    const handleDelete = (index) => {
      const newItems = items.filter((__, i) => i !== index);
      setItems(newItems);
    }


  return (
    <>
    <div className='flex justify-center'>
    <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="新しいやることをかきましょう。"
        className=" border-3 border-black p-2 rounded w-100 mt-18 mb-8"
        />
        </div> 

        <div className='flex items-center flex-col' >
          {items.length > 0 ? (
            items.map((item, index) =>(
            <div 
            key={index} 
            className="flex justify-between text-left  my-1 border-3 border-black rounded w-100 group">
            
              <label  
              className='my-2 pl-3 flex items-center'>
                <input type="checkbox" 
                className='peer mr-2 border bworder-black appearance-none rounded-full w-4 h-4 checked:bg-green-500 checked:ring-'/>
              <span 
              className='peer-checked:line-through'>{item}
              </span>

            </label>
            <button onClick={() => handleDelete(index)}
             className='cursor-pointer mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200' >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            >
            <path d="M16 8L8 16M8 8L16 16" />
            </svg>
             </button>
            </div>
            )
          )) :(
              <p className='text-gray-500'> テキストボックスに入力してください。</p>
          )}
        </div>
        
        </> 
  );
}
export default TextBox;
