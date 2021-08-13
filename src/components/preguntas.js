import React,{useState, useCallback} from 'react';
import './preguntas.css';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { motion } from "framer-motion";

const Preguntas = ({preguntas}) => {
  const [showTexto, setShowTexto] =  useState([]);

  const mostrarTexto = useCallback(
    index => {
      const mostrarTexto = [...showTexto]
      /*variables by refence and by value*/
      mostrarTexto[index] = !showTexto[index]
      console.log(mostrarTexto)
      setShowTexto(mostrarTexto)
      
    },
    [showTexto],
    /*2nd  parameter of usecallbc useffect*/
  )


  return (
    <div className="row contenedor">
      <h2 className="col-4 title ">Questions and Answers</h2>
      <div className="col-8 card px-5">
        {preguntas.map((question, index)=>
          <div className="card-body my-2" key={question.id}>
            <div className="d-flex justify-content-between m-3">
              <h2 className="card-title mt-2">{question.pregunta}</h2>
              <button className="btn" onClick={()=>mostrarTexto(index)}>
                {showTexto[index] ? <AiOutlineMinus/> : <AiOutlinePlus/>}
              </button>
            </div>
            {
              showTexto[index] ? 
              <motion.p 
                className="card-text my-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{duration: 1}}
                  exit={{ opacity: 0 }}
                >{question.respuestas}
              </motion.p>
            
            : <div/>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Preguntas
