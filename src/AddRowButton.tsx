'use client'

import { useForm } from '@payloadcms/ui'

const AddRowButton = () => {
  const { addFieldRow } = useForm();

  const handleClick = () => {
    addFieldRow({
      subFieldState: {
        text: {
          initialValue: 'aaa',
          value: 'aaa',
          valid: true,
        },
      },
      path: "array",
      schemaPath: "array",
    });
  }

  return (
    <button onClick={handleClick}>Add Row</button>
  )
}

export default AddRowButton