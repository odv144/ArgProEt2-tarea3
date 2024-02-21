import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Botones = () => {
  const variants = {
    odd: {
      background: "#456",
      color: "#222",
    },
    even: {
      background: "#654",
      width: "50px",
      color: "#fff",
    },
  };
  const [contador, setContador] = useState(0);

  return (
    <Flex>
      <Button>
        <motion.div
          initial={{ sacale: 1, background: "#8f8f8f" }}
          transition={{ duration: "3" }}
          animate={{ scale: 2, rotate: 360 }}
        >
          Prueba
        </motion.div>
      </Button>
      <motion.h1
        initial={{ y: -50, x: -250, color: "#fefefe" }}
        transition={{ duration: 1 }}
        animate={{ y: -100, x: 0, color: "#000", scale: 3 }}
      >
        +1
      </motion.h1>
      <Button onClick={() => setContador((contador) => contador + 1)}>
        Otro mas
      </Button>
      <motion.div
        variants={variants}
        animate={contador % 2 == 0 ? "even" : "odd"}
        transition={{ duration: "2" }}
      >
        {contador}
      </motion.div>

         <motion.div
            initial={{width:'50px',height:'50px',background:'#588556'}}
             drag='y'
             
             dragConstraints={{
                 top: -50,
                 left: -50,
                 right: 50,
                 bottom: 50,
                }}
                >
        </motion.div>
    
    </Flex>
  );
};

export default Botones;
