import { Text } from "@chakra-ui/react"
import { format } from "date-fns";
import { useEffect, useState } from "react";
import pl from "date-fns/locale/pl";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <Text fontSize="xl" fontWeight="bold" color="#fff">{format(date, "pp", { locale: pl })}</Text>
  )
}

export default Clock