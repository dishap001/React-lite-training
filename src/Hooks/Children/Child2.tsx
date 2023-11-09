import { useContext } from 'react';
import { Data1, Data2 } from '../Hook2';

export default function Child2() {
  const Framework:string = useContext(Data1);
  const Template :string = useContext(Data2);

  return (
    <>
      <p>We are using {Framework} and use {Template}</p>
    </>
  );
}
