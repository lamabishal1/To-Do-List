import React, { useState } from 'react'
import DeleteBtn from '/src/assets/cross.svg'

function TextBox() {

    const[text,setText] = useState("");
    const[items,setItems] = useState([]);

    const handleKeyDown = (e)=>{
      if(e.key === "Enter" && text.trim() != ""){
        setItems([...items,{text: text.trim(), checked: false}]);
        setText("");
      }
    };

    const handleDelete = (index) => {
      const newItems = items.filter((__, i) => i !== index);
      setItems(newItems);
    };

    const handleCheck = (index) => {
      const updatedItems = items.map((item,i) =>
        i === index ? { ...item, checked: ! item.checked }:item
    );

      setItems(updatedItems); 
    };

    const checkedCount = items.filter(item => item.checked).length;

    const handleChecked = () => {
      const completedItems = items.filter(item => item.checked);
      setItems(completedItems);
    }

    const deletedAll = () => {
      const activeItems = items.filter(item => item.checked);
      setItems(activeItems);
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

          <div 
            className='flex items-center flex-col'>
            {items.length > 0 ? (
            items.map((item, index) =>(

          <div
            key={index}
            className="flex justify-between text-left my-1 border-3 border-black rounded w-100 group"
            >
              <label 
              className='my-2 pl-3 flex items-center'>
                <input 
                type="checkbox"
                checked={item.checked}
                onChange={()=> handleCheck(index)} 
                className='peer mr-2 border-2 border-black appearance-none rounded-full w-3 h-3 checked:bg-green-500 checked:ring-1 checked:ring-black-500'
                />
              <span 
              className='peer-checked:line-through'>
                {item.text}
              </span>
            </label>

            <button 
             onClick={() => handleDelete(index)}
             className=' cursor-pointer mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200' 
             >
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

          ))
        ) : (
          <p className='text-gray-500'> テキストボックスに入力してください。</p>
          )} 
          </div>
          <div className='mx-auto border-2 border-black w-100 h-10 flex justify-between items-center pl-2 mt-4'>
          <p className='bix'>{items.length} が残っている</p>
          <div className='flex gap-2 items-center'>
              <button className='btn1'>全て</button>
              <button className='btn1'>アクティブ</button>
              <button className='btn1' onClick={handleChecked}>完了</button> 
              <button className='btn1' onClick={deletedAll}>クリア 完了</button>

             </div>
          </div>
          
          
          
    </> 
  );
}
export default TextBox;
