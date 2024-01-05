import React,{useState} from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const dragg = () => {
  const [state, setState] = useState([])
  const drag = (props: any) =>{
    const {source, destination} = props
    if(!destination){
      return 
    }
    if(destination.droppableId !== source.droppableId){
      
    }else{
      let data = state[source.droppableId]
      let item  = [...data]
      console.log(data)
    }
  }
  return (
    <div className="flex justify-center items-center bg-[#005180] w-full h-[90vh]">
     <DragDropContext onDragEnd={drag}>
     <Droppable droppableId='myDrag'>
      {(prop)=>(
        <><div className="w-[300px] h-[60%] border shadow-md flex justify-center items-center flex-col bg-[green] mr-[30px] rounded-md" {...prop.droppableProps} ref={prop.innerRef} >
            {["1", "2"].map((el, i)=>(<Draggable draggableId={el} key={el} index={i}>
              {(prop)=>(
                <div className="w-[250px] h-[30%] border shadow-md bg-[white] rounded-md mt-[15px]" {...prop.draggableProps} {...prop.dragHandleProps} ref={prop.innerRef}>Card {el}</div>
              )}
            </Draggable>))}
            </div><div className="w-[300px] h-[60%] border shadow-md flex justify-center items-center bg-[green] rounded-md">
                
              </div></>
      )}
     </Droppable>
     </DragDropContext>
    </div>
  )
}

export default dragg;
